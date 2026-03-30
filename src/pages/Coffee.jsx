import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Stars from '../components/Stars'

const WORKER = import.meta.env.VITE_WORKER_URL || ''

// ─── Animations ───────────────────────────────────────────────────────────────

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
`

const spin = keyframes`
  to { transform: rotate(360deg); }
`

// ─── Page layout ──────────────────────────────────────────────────────────────

const Page = styled.div`
  padding: 2rem 0 6rem;
  position: relative;
  z-index: 1;
`

const PageHeader = styled.div`
  margin-bottom: 3rem;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #333333;
  @media (max-width: 768px) { font-size: 2rem; }
`

const Subtitle = styled(motion.p)`
  color: #666666;
  font-size: 1.05rem;
  font-weight: 300;
  margin-top: 0.6rem;
  line-height: 1.6;
`

const GradientLink = styled.a`
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover { opacity: 0.8; }
`

// ─── Product grid ─────────────────────────────────────────────────────────────

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 960px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`

const Card = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover { box-shadow: 0 8px 36px rgba(0,0,0,0.1); transform: translateY(-3px); }
`

const CardAccent = styled.div`
  height: 3px;
  background: ${p => p.$color
    ? `linear-gradient(90deg, ${p.$color}99, ${p.$color})`
    : 'linear-gradient(90deg, #ff69b4, #87CEEB)'};
`

const CardImage = styled.div`
  height: 140px;
  background: ${p => p.$color ? `${p.$color}18` : 'linear-gradient(135deg, #fff5f9, #f0f8ff)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  user-select: none;
`

const CardBody = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ProductName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.4rem;
  font-weight: 500;
  ${Card}:hover & {
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const ProductDesc = styled.p`
  color: #666;
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.6;
  margin-bottom: 1.1rem;
  flex: 1;
`

const SubscriptionBadge = styled.span`
  display: inline-block;
  font-size: 0.7rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 0.15rem 0.6rem;
  border-radius: 10px;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  color: white;
  margin-bottom: 0.75rem;
  width: fit-content;
`

const VariantRow = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

const VariantPill = styled.button`
  padding: 0.2rem 0.75rem;
  border-radius: 20px;
  border: 1.5px solid ${p => p.$active ? 'transparent' : '#e1e1e1'};
  background: ${p => p.$active ? 'linear-gradient(45deg, #ff69b4, #87CEEB)' : 'white'};
  color: ${p => p.$active ? 'white' : '#666'};
  font-size: 0.76rem;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  &:hover { border-color: #ff69b4; }
`

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`

const Price = styled.span`
  font-size: 1.15rem;
  font-weight: 500;
  color: #333;
`

const AddBtn = styled(motion.button)`
  padding: 0.42rem 1rem;
  border-radius: 20px;
  border: 1.5px solid #1a1a1a;
  background: transparent;
  color: #1a1a1a;
  font-family: 'Playfair Display', serif;
  font-size: 0.82rem;
  cursor: pointer;
  transition: all 0.3s;
  white-space: nowrap;
  &:hover {
    animation: ${shake} 0.4s ease;
    background: linear-gradient(45deg, #ff69b4, #87CEEB);
    border-color: transparent;
    color: white;
  }
`

const QtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
`

const QtyBtn = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid #e1e1e1;
  background: white;
  color: #333;
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`

const QtyNum = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  min-width: 18px;
  text-align: center;
`

// ─── Floating cart button ─────────────────────────────────────────────────────

const CartFab = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  border: none;
  border-radius: 30px;
  padding: 0.7rem 1.4rem;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(255,105,180,0.45);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  z-index: 100;
  &:hover { box-shadow: 0 6px 32px rgba(255,105,180,0.6); }
`

const FabBadge = styled.span`
  background: white;
  color: #ff69b4;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-size: 0.78rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`

// ─── Drawer shell ─────────────────────────────────────────────────────────────

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(26,26,26,0.35);
  z-index: 200;
  backdrop-filter: blur(3px);
`

const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 420px;
  max-width: 96vw;
  background: #fafafa;
  z-index: 201;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 48px rgba(0,0,0,0.1);
`

const DrawerHead = styled.div`
  padding: 1.6rem 2rem 1.4rem;
  border-bottom: 1px solid #ebebeb;
  background: white;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`

const BackBtn = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  &:hover { color: #333; }
`

const DrawerTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #333;
  font-weight: 500;
  flex: 1;
`

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #999;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.2s;
  &:hover { color: #333; }
`

const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 2rem;
  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
`

const DrawerFooter = styled.div`
  padding: 1.5rem 2rem 2rem;
  border-top: 1px solid #ebebeb;
  background: white;
  flex-shrink: 0;
`

// ─── Step indicators ──────────────────────────────────────────────────────────

const Steps = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1.75rem;
`

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  color: ${p => p.$active ? '#333' : p.$done ? '#aaa' : '#ccc'};
  font-weight: ${p => p.$active ? '500' : '300'};
`

const StepDot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => p.$done
    ? 'linear-gradient(45deg, #ff69b4, #87CEEB)'
    : p.$active
      ? '#333'
      : '#e5e5e5'};
  color: white;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const StepSep = styled.div`
  flex: 1;
  height: 1px;
  background: #e5e5e5;
  max-width: 24px;
`

// ─── Cart step ────────────────────────────────────────────────────────────────

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  border-radius: 10px;
  padding: 0.9rem 1.1rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
`

const ItemIcon = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: ${p => p.$color ? `${p.$color}18` : 'linear-gradient(135deg,#fff5f9,#f0f8ff)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`

const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const ItemName = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemVariant = styled.div`
  font-size: 0.76rem;
  color: #999;
  font-weight: 300;
  margin-top: 0.1rem;
`

const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.4rem;
  flex-shrink: 0;
`

const ItemPrice = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
`

const SmQtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`

const SmQtyBtn = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid #e1e1e1;
  background: white;
  color: #666;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.2s;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`

const SmQtyNum = styled.span`
  font-size: 0.85rem;
  color: #333;
  min-width: 14px;
  text-align: center;
`

const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 0;
  color: #bbb;
  font-size: 0.9rem;
  font-weight: 300;
`

// ─── Address form ─────────────────────────────────────────────────────────────

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${p => p.$cols || '1fr'};
  gap: 0.75rem;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

const Label = styled.label`
  font-size: 0.76rem;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 400;
`

const Input = styled.input`
  padding: 0.65rem 0.9rem;
  border: 1.5px solid ${p => p.$error ? '#ff6b6b' : '#e5e5e5'};
  border-radius: 8px;
  font-size: 0.92rem;
  color: #333;
  background: white;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  &:focus { border-color: #ff69b4; }
  &::placeholder { color: #bbb; }
`

const Select = styled.select`
  padding: 0.65rem 0.9rem;
  border: 1.5px solid #e5e5e5;
  border-radius: 8px;
  font-size: 0.92rem;
  color: #333;
  background: white;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
  &:focus { border-color: #ff69b4; }
`

const FieldError = styled.span`
  font-size: 0.74rem;
  color: #ff6b6b;
`

// ─── Payment step ─────────────────────────────────────────────────────────────

const PaymentBox = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`

const PayIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff5f9, #f0f8ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
`

const PayTitle = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`

const PayDesc = styled.div`
  font-size: 0.88rem;
  color: #777;
  font-weight: 300;
  line-height: 1.6;
  max-width: 280px;
`

const PayStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: ${p => p.$done ? '#27c93f' : '#999'};
  font-weight: 300;
`

const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${p => p.$done ? '#27c93f' : '#ddd'};
  flex-shrink: 0;
`

// ─── Success step ─────────────────────────────────────────────────────────────

const SuccessBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  text-align: center;
`

const SuccessIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

const SuccessTitle = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  color: #333;
  font-weight: 500;
`

const SuccessText = styled.p`
  color: #777;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 280px;
`

const OrderId = styled.div`
  font-size: 0.78rem;
  color: #bbb;
  letter-spacing: 0.5px;
`

// ─── Shared footer elements ───────────────────────────────────────────────────

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.1rem;
`

const TotalLabel = styled.span`
  font-size: 0.9rem;
  color: #888;
  font-weight: 300;
`

const TotalAmount = styled.span`
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
`

const PrimaryBtn = styled(motion.button)`
  width: 100%;
  padding: 0.88rem;
  background: linear-gradient(45deg, #ff69b4, #87CEEB);
  border: none;
  border-radius: 8px;
  color: white;
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  cursor: pointer;
  letter-spacing: 0.3px;
  margin-bottom: 0.6rem;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`

const GhostBtn = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  border: 1.5px solid #e1e1e1;
  border-radius: 8px;
  color: #888;
  font-family: 'Playfair Display', serif;
  font-size: 0.88rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.5rem;
  &:hover { border-color: #ff69b4; color: #ff69b4; }
`

const PoweredBy = styled.p`
  text-align: center;
  font-size: 0.76rem;
  color: #ccc;
  font-weight: 300;
  a { color: #ccc; text-decoration: underline; text-underline-offset: 2px; &:hover { color: #ff69b4; } }
`

const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`

const ErrorMsg = styled.div`
  font-size: 0.82rem;
  color: #ff6b6b;
  text-align: center;
  margin-top: 0.5rem;
  line-height: 1.5;
`

// ─── Constants ────────────────────────────────────────────────────────────────

const COUNTRIES = [
  ['US', 'United States'], ['CA', 'Canada'], ['GB', 'United Kingdom'],
  ['AU', 'Australia'], ['DE', 'Germany'], ['FR', 'France'],
  ['ES', 'Spain'], ['IT', 'Italy'], ['NL', 'Netherlands'],
  ['JP', 'Japan'], ['MX', 'Mexico'], ['CO', 'Colombia'],
  ['BR', 'Brazil'], ['AR', 'Argentina'],
]

const COFFEE_EMOJIS = { cron: '⏰', segfault: '💥', 'dark mode': '🌑', '404': '🔍', default: '☕' }

const getEmoji = (name) => COFFEE_EMOJIS[name?.toLowerCase()] || COFFEE_EMOJIS.default

const INITIAL_ADDRESS = {
  name: '', street1: '', street2: '', city: '',
  province: '', zip: '', country: 'US', phone: '',
}

const FALLBACK_PRODUCTS = [
  { id: 'fb_cron', name: 'cron', description: 'Subscribe to Cron, the official Terminal membership. Monthly delivery with a special flavor-of-the-month blend.', order: 1, subscription: 'required', variants: [{ id: 'fb_v1', name: '12oz', price: 3000 }], tags: { color: '#00FFF0' } },
  { id: 'fb_seg', name: 'segfault', description: 'A savory yet sweet blend created from a natural fault in the coffee cherry — one bean instead of two.', order: 2, subscription: 'allowed', variants: [{ id: 'fb_v2', name: 'Medium Roast | 12oz | Whole Beans', price: 2200 }], tags: { color: '#169FC1' } },
  { id: 'fb_dark', name: 'dark mode', description: 'A dark roast from Cerrado, Brazil. Dark chocolate with hints of almond. Low acid, full body.', order: 3, subscription: 'allowed', variants: [{ id: 'fb_v3', name: 'Dark Roast | 12oz | Whole Beans', price: 2200 }], tags: { color: '#118B39' } },
  { id: 'fb_404', name: '404', description: 'A flavorful decaf processed in the mountain waters of Brazil. Dark chocolatey blend.', order: 4, subscription: 'allowed', variants: [{ id: 'fb_v4', name: 'Decaf | 12oz | Whole Beans', price: 2200 }], tags: { color: '#D53C81' } },
]

// ─── Component ────────────────────────────────────────────────────────────────

const STEP_LABELS = ['Cart', 'Address', 'Payment', 'Done']

export default function Coffee() {
  // Products & cart
  const [products, setProducts] = useState([])
  const [selectedVariants, setSelectedVariants] = useState({})
  const [cart, setCart] = useState([])

  // Drawer
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0) // 0=cart 1=address 2=payment 3=success

  // Address form
  const [address, setAddress] = useState(INITIAL_ADDRESS)
  const [fieldErrors, setFieldErrors] = useState({})

  // Checkout state
  const [collectUrl, setCollectUrl] = useState('')
  const [cardAdded, setCardAdded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [order, setOrder] = useState(null)

  // ── Data fetching ────────────────────────────────────────────────────────

  useEffect(() => {
    const url = WORKER ? `${WORKER}/products` : 'https://api.terminal.shop/product'
    fetch(url)
      .then(r => r.json())
      .then(d => {
        const items = d?.result ?? d?.data ?? []
        setProducts(items.length > 0 ? items : FALLBACK_PRODUCTS)
      })
      .catch(() => setProducts(FALLBACK_PRODUCTS))
  }, [])

  useEffect(() => {
    if (!products.length) return
    setSelectedVariants(prev => {
      const next = { ...prev }
      products.forEach(p => { if (next[p.id] == null) next[p.id] = 0 })
      return next
    })
  }, [products])

  // ── Cart helpers ─────────────────────────────────────────────────────────

  const key = (pid, vi) => `${pid}__${vi}`

  const getQty = (pid, vi) => cart.find(i => i.key === key(pid, vi))?.qty ?? 0

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)

  const totalPrice = cart.reduce((s, i) => {
    const p = products.find(p => p.id === i.productId)
    return s + (p?.variants?.[i.variantIdx]?.price ?? 0) * i.qty
  }, 0)

  const formatPrice = c => `$${(c / 100).toFixed(2)}`

  const addToCart = (product, vi) => {
    const k = key(product.id, vi)
    setCart(prev => {
      const ex = prev.find(i => i.key === k)
      if (ex) return prev.map(i => i.key === k ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { key: k, productId: product.id, variantIdx: vi, qty: 1 }]
    })
  }

  const updateQty = (k, delta) => {
    setCart(prev => prev.map(i => i.key === k ? { ...i, qty: i.qty + delta } : i).filter(i => i.qty > 0))
  }

  // ── Drawer helpers ───────────────────────────────────────────────────────

  const openCart = () => { setStep(0); setOpen(true) }
  const closeDrawer = () => { setOpen(false); setTimeout(() => setStep(0), 400) }

  const resetCheckout = () => {
    setStep(0); setAddress(INITIAL_ADDRESS); setCollectUrl('')
    setCardAdded(false); setError(''); setOrder(null)
  }

  // ── Validation ───────────────────────────────────────────────────────────

  const validateAddress = () => {
    const required = ['name', 'street1', 'city', 'zip', 'country']
    const errs = {}
    required.forEach(f => { if (!address[f]?.trim()) errs[f] = 'Required' })
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  // ── Checkout API calls ───────────────────────────────────────────────────

  const initCheckout = async () => {
    if (!validateAddress()) return
    if (!WORKER) { setError('Worker URL not configured. Add VITE_WORKER_URL to your .env file.'); return }

    setLoading(true); setError('')
    try {
      const items = cart.map(i => ({
        variantId: products.find(p => p.id === i.productId)?.variants?.[i.variantIdx]?.id,
        qty: i.qty,
      })).filter(i => i.variantId)

      const res = await fetch(`${WORKER}/checkout/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, address }),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'Checkout init failed')

      setCollectUrl(data.collectUrl)
      setStep(2)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const openCardCollect = () => {
    window.open(collectUrl, '_blank', 'width=520,height=680')
  }

  const completeOrder = async () => {
    if (!WORKER) return
    setLoading(true); setError('')
    try {
      const res = await fetch(`${WORKER}/checkout/complete`, { method: 'POST' })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'Failed to place order')
      setOrder(data.order)
      setCart([])
      setStep(3)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  // ── Address field handler (must be at component level, not inside a sub-component) ──

  const setAddressField = (field) => (e) => {
    setAddress(prev => ({ ...prev, [field]: e.target.value }))
    if (fieldErrors[field]) setFieldErrors(prev => ({ ...prev, [field]: '' }))
  }

  // ── Step indicator (shared across steps) ─────────────────────────────────

  const StepBar = () => (
    <Steps>
      {STEP_LABELS.map((label, i) => (
        <React.Fragment key={label}>
          {i > 0 && <StepSep />}
          <Step $active={i === step} $done={i < step}>
            <StepDot $active={i === step} $done={i < step}>
              {i < step ? '✓' : i + 1}
            </StepDot>
            {label}
          </Step>
        </React.Fragment>
      ))}
    </Steps>
  )

  // ── Render the correct step content as plain JSX (NOT as a component) ────
  // This prevents React from unmounting inputs on every state change.

  const renderStep = () => {
    if (step === 0) return (
      <>
        <DrawerBody>
          <StepBar />
          {cart.length === 0 ? (
            <Empty>
              <span style={{ fontSize: '2.5rem' }}>☕</span>
              <span>Your cart is empty</span>
            </Empty>
          ) : (
            <CartItems>
              {cart.map(item => {
                const product = products.find(p => p.id === item.productId)
                if (!product) return null
                const variant = product.variants?.[item.variantIdx]
                return (
                  <CartItem key={item.key}>
                    <ItemIcon $color={product.tags?.color}>{getEmoji(product.name)}</ItemIcon>
                    <ItemInfo>
                      <ItemName>{product.name}</ItemName>
                      {variant?.name && <ItemVariant>{variant.name}</ItemVariant>}
                    </ItemInfo>
                    <ItemRight>
                      <ItemPrice>{variant?.price ? formatPrice(variant.price * item.qty) : '—'}</ItemPrice>
                      <SmQtyRow>
                        <SmQtyBtn onClick={() => updateQty(item.key, -1)}>−</SmQtyBtn>
                        <SmQtyNum>{item.qty}</SmQtyNum>
                        <SmQtyBtn onClick={() => updateQty(item.key, 1)}>+</SmQtyBtn>
                      </SmQtyRow>
                    </ItemRight>
                  </CartItem>
                )
              })}
            </CartItems>
          )}
        </DrawerBody>
        <DrawerFooter>
          {cart.length > 0 && (
            <TotalRow>
              <TotalLabel>Total</TotalLabel>
              <TotalAmount>{formatPrice(totalPrice)}</TotalAmount>
            </TotalRow>
          )}
          <PrimaryBtn whileTap={{ scale: 0.98 }} onClick={() => setStep(1)} disabled={cart.length === 0}>
            Continue to Shipping →
          </PrimaryBtn>
          <PoweredBy>Powered by <a href="https://terminal.shop" target="_blank" rel="noopener noreferrer">terminal.shop</a></PoweredBy>
        </DrawerFooter>
      </>
    )

    if (step === 1) return (
      <>
        <DrawerBody>
          <StepBar />
          <Form>
            <Field>
              <Label>Full name *</Label>
              <Input value={address.name} onChange={setAddressField('name')} placeholder="Jane Smith" $error={!!fieldErrors.name} />
              {fieldErrors.name && <FieldError>{fieldErrors.name}</FieldError>}
            </Field>
            <Field>
              <Label>Street address *</Label>
              <Input value={address.street1} onChange={setAddressField('street1')} placeholder="123 Main St" $error={!!fieldErrors.street1} />
              {fieldErrors.street1 && <FieldError>{fieldErrors.street1}</FieldError>}
            </Field>
            <Field>
              <Label>Apt, suite, etc.</Label>
              <Input value={address.street2} onChange={setAddressField('street2')} placeholder="Apt 4B" />
            </Field>
            <FormRow $cols="1fr 1fr">
              <Field>
                <Label>City *</Label>
                <Input value={address.city} onChange={setAddressField('city')} placeholder="Austin" $error={!!fieldErrors.city} />
                {fieldErrors.city && <FieldError>{fieldErrors.city}</FieldError>}
              </Field>
              <Field>
                <Label>State / Province</Label>
                <Input value={address.province} onChange={setAddressField('province')} placeholder="TX" />
              </Field>
            </FormRow>
            <FormRow $cols="1fr 1fr">
              <Field>
                <Label>ZIP / Postal *</Label>
                <Input value={address.zip} onChange={setAddressField('zip')} placeholder="78701" $error={!!fieldErrors.zip} />
                {fieldErrors.zip && <FieldError>{fieldErrors.zip}</FieldError>}
              </Field>
              <Field>
                <Label>Country *</Label>
                <Select value={address.country} onChange={setAddressField('country')}>
                  {COUNTRIES.map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                  ))}
                </Select>
              </Field>
            </FormRow>
            <Field>
              <Label>Phone (optional)</Label>
              <Input value={address.phone} onChange={setAddressField('phone')} placeholder="+1 555 000 0000" type="tel" />
            </Field>
          </Form>
          {error && <ErrorMsg style={{ marginTop: '1rem' }}>{error}</ErrorMsg>}
        </DrawerBody>
        <DrawerFooter>
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>{formatPrice(totalPrice)}</TotalAmount>
          </TotalRow>
          <PrimaryBtn whileTap={{ scale: 0.98 }} onClick={initCheckout} disabled={loading}>
            {loading ? <><Spinner /> Processing…</> : 'Continue to Payment →'}
          </PrimaryBtn>
          <PoweredBy>Powered by <a href="https://terminal.shop" target="_blank" rel="noopener noreferrer">terminal.shop</a></PoweredBy>
        </DrawerFooter>
      </>
    )

    if (step === 2) return (
      <>
        <DrawerBody>
          <StepBar />
          <PaymentBox>
            <PayIcon>💳</PayIcon>
            <PayTitle>Add your payment card</PayTitle>
            <PayDesc>
              A secure card entry form will open in a new window — hosted by terminal.shop.
              Once you've saved your card there, come back and confirm your order.
            </PayDesc>
            <PrimaryBtn
              whileTap={{ scale: 0.97 }}
              onClick={() => { openCardCollect(); setCardAdded(true) }}
              style={{ width: 'auto', padding: '0.65rem 1.5rem', marginBottom: 0 }}
            >
              Open Secure Card Form →
            </PrimaryBtn>
            <PayStatus $done={cardAdded}>
              <StatusDot $done={cardAdded} />
              {cardAdded ? 'Card form opened — complete it then confirm below' : 'Card not yet added'}
            </PayStatus>
          </PaymentBox>
          {error && <ErrorMsg style={{ marginTop: '1rem' }}>{error}</ErrorMsg>}
        </DrawerBody>
        <DrawerFooter>
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>{formatPrice(totalPrice)}</TotalAmount>
          </TotalRow>
          <PrimaryBtn whileTap={{ scale: 0.98 }} onClick={completeOrder} disabled={!cardAdded || loading}>
            {loading ? <><Spinner /> Placing order…</> : 'Place My Order ☕'}
          </PrimaryBtn>
          <GhostBtn whileTap={{ scale: 0.98 }} onClick={openCardCollect}>Re-open card form</GhostBtn>
          <PoweredBy>Powered by <a href="https://terminal.shop" target="_blank" rel="noopener noreferrer">terminal.shop</a></PoweredBy>
        </DrawerFooter>
      </>
    )

    return (
      <>
        <DrawerBody>
          <SuccessBox initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <SuccessIcon>☕</SuccessIcon>
            <SuccessTitle>Order placed!</SuccessTitle>
            <SuccessText>Your coffee is on its way. Thanks for supporting the curiosity — enjoy every sip.</SuccessText>
            {order?.id && <OrderId>Order #{order.id}</OrderId>}
          </SuccessBox>
        </DrawerBody>
        <DrawerFooter>
          <PrimaryBtn whileTap={{ scale: 0.98 }} onClick={() => { closeDrawer(); resetCheckout() }}>
            Back to the shop
          </PrimaryBtn>
          <PoweredBy>Powered by <a href="https://terminal.shop" target="_blank" rel="noopener noreferrer">terminal.shop</a></PoweredBy>
        </DrawerFooter>
      </>
    )
  }

  const stepTitles = ['Your Cart', 'Shipping Address', 'Payment', 'Order Confirmed']

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      <Stars />
      <Page>
        <PageHeader>
          <Title initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Brew
          </Title>
          <Subtitle initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            Coffee that fuels the curiosity — powered by{' '}
            <GradientLink href="https://terminal.shop" target="_blank" rel="noopener noreferrer">
              terminal.shop
            </GradientLink>
          </Subtitle>
        </PageHeader>

        <Grid>
          {products.map((product, idx) => {
            const vi = selectedVariants[product.id] ?? 0
            const variant = product.variants?.[vi]
            const qty = getQty(product.id, vi)
            const color = product.tags?.color

            return (
              <Card
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <CardAccent $color={color} />
                <CardImage $color={color}>{getEmoji(product.name)}</CardImage>
                <CardBody>
                  {product.subscription === 'required' && (
                    <SubscriptionBadge>Monthly subscription</SubscriptionBadge>
                  )}
                  <ProductName>{product.name}</ProductName>
                  <ProductDesc>{product.description || 'Premium coffee, carefully sourced.'}</ProductDesc>

                  {product.variants?.length > 1 && (
                    <VariantRow>
                      {product.variants.map((v, i) => (
                        <VariantPill
                          key={v.id}
                          $active={vi === i}
                          onClick={() => setSelectedVariants(p => ({ ...p, [product.id]: i }))}
                        >
                          {v.name}
                        </VariantPill>
                      ))}
                    </VariantRow>
                  )}

                  <BottomRow>
                    <Price>{variant?.price != null ? formatPrice(variant.price) : '—'}</Price>
                    {qty === 0 ? (
                      <AddBtn whileTap={{ scale: 0.95 }} onClick={() => addToCart(product, vi)}>
                        Add to cart
                      </AddBtn>
                    ) : (
                      <QtyRow>
                        <QtyBtn onClick={() => updateQty(key(product.id, vi), -1)}>−</QtyBtn>
                        <QtyNum>{qty}</QtyNum>
                        <QtyBtn onClick={() => updateQty(key(product.id, vi), 1)}>+</QtyBtn>
                      </QtyRow>
                    )}
                  </BottomRow>
                </CardBody>
              </Card>
            )
          })}
        </Grid>
      </Page>

      {/* ── Floating cart button ─────────────────────────────────────── */}
      <AnimatePresence>
        {totalItems > 0 && (
          <CartFab
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            whileTap={{ scale: 0.96 }}
            onClick={openCart}
          >
            ☕ Cart <FabBadge>{totalItems}</FabBadge>
          </CartFab>
        )}
      </AnimatePresence>

      {/* ── Cart drawer ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
            />
            <Drawer
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <DrawerHead>
                {step > 0 && step < 3 && (
                  <BackBtn onClick={() => { setError(''); setStep(s => s - 1) }}>←</BackBtn>
                )}
                <DrawerTitle>{stepTitles[step]}</DrawerTitle>
                <CloseBtn onClick={closeDrawer}>✕</CloseBtn>
              </DrawerHead>

              {renderStep()}
            </Drawer>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
