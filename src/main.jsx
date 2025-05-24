import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import FullscreenLayout from './layouts/FullscreenLayout'
import Home from './pages/Home'
import About from './pages/About'
import GlobeView from './pages/GlobeView'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Writings from './pages/Writings'
import TennisArticle from './pages/articles/TennisArticle'
import LeadershipArticle from './pages/articles/LeadershipArticle'
import PageTransition from './components/PageTransition'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    background: #f8f8f8;
    color: #1a1a1a;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

// Create routes with page transitions
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <PageTransition>
            <Home />
          </PageTransition>
        ),
      },
      {
        path: "/about",
        element: (
          <PageTransition>
            <About />
          </PageTransition>
        ),
      },
      {
        path: "/projects",
        element: (
          <PageTransition>
            <Projects />
          </PageTransition>
        ),
      },
      {
        path: "/writings",
        element: (
          <PageTransition>
            <Writings />
          </PageTransition>
        ),
      },
      {
        path: "/writings/tennis",
        element: (
          <PageTransition>
            <TennisArticle />
          </PageTransition>
        ),
      },
      {
        path: "/writings/leadership",
        element: (
          <PageTransition>
            <LeadershipArticle />
          </PageTransition>
        ),
      },
      {
        path: "/contact",
        element: (
          <PageTransition>
            <Contact />
          </PageTransition>
        ),
      },
    ],
  },
  {
    path: "/globe",
    element: <FullscreenLayout />,
    children: [
      {
        path: "",
        element: (
          <PageTransition>
            <GlobeView />
          </PageTransition>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
