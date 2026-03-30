/**
 * Cloudflare Worker — terminal.shop proxy
 *
 * Deploy steps:
 *  1. Go to https://dash.cloudflare.com → Workers & Pages → Create application → Create Worker
 *  2. Paste this file, click Save & Deploy
 *  3. In the worker settings → Variables → add secret:
 *       Name:  TERMINAL_TOKEN
 *       Value: your terminal.shop PAT (pat_...)
 *  4. Copy the worker URL (e.g. https://terminal-proxy.yourname.workers.dev)
 *  5. Paste it into .env as VITE_WORKER_URL
 */

const API = 'https://api.terminal.shop'

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

async function api(path, method, body, token) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  return res.json()
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...cors, 'Content-Type': 'application/json' },
  })
}

export default {
  async fetch(request, env) {
    // Preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: cors })
    }

    const { pathname } = new URL(request.url)
    const token = env.TERMINAL_TOKEN

    try {
      // ── GET /products ────────────────────────────────────────────────────
      if (pathname === '/products' && request.method === 'GET') {
        const data = await api('/product', 'GET', undefined, token)
        return json(data)
      }

      // ── POST /checkout/init ──────────────────────────────────────────────
      // Body: { items: [{ variantId, qty }], address: { name, street1, ... } }
      // 1. Create address  2. Clear + fill cart  3. Set address  4. Get card collect URL
      if (pathname === '/checkout/init' && request.method === 'POST') {
        const { items, address } = await request.json()

        // 1. Create shipping address
        const addrData = await api('/address', 'POST', address, token)
        const addressID = addrData?.result?.id
        if (!addressID) return json({ error: 'Failed to create address', detail: addrData }, 400)

        // 2. Clear existing cart
        await api('/cart', 'DELETE', undefined, token)

        // 3. Add each item
        for (const item of items) {
          await api('/cart/item', 'PUT', { productVariantID: item.variantId, quantity: item.qty }, token)
        }

        // 4. Set address on cart
        await api('/cart/address', 'PUT', { addressID }, token)

        // 5. Get card collect URL
        const collectData = await api('/card/collect', 'POST', undefined, token)
        const collectUrl = collectData?.result?.url
        if (!collectUrl) return json({ error: 'Failed to get payment URL', detail: collectData }, 400)

        return json({ ok: true, collectUrl, addressID })
      }

      // ── POST /checkout/complete ──────────────────────────────────────────
      // Finalizes the order after the user has entered their card
      if (pathname === '/checkout/complete' && request.method === 'POST') {
        // 1. Get latest card on the account
        const cardsData = await api('/card', 'GET', undefined, token)
        const cards = cardsData?.result ?? []
        if (cards.length === 0) return json({ error: 'No payment card found. Please add your card first.' }, 400)

        const cardID = cards[0].id

        // 2. Set card on cart
        await api('/cart/card', 'PUT', { cardID }, token)

        // 3. Convert cart → order
        const orderData = await api('/cart/convert', 'POST', undefined, token)
        const order = orderData?.result
        if (!order) return json({ error: 'Failed to place order', detail: orderData }, 400)

        return json({ ok: true, order })
      }

      return json({ error: 'Not found' }, 404)
    } catch (err) {
      return json({ error: err.message }, 500)
    }
  },
}
