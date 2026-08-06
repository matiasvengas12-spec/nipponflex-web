import { useEffect } from 'react'
import LandingPage from './components/landing/LandingPage'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'
import BiohackingPage from './pages/BiohackingPage'
import DistributorsPage from './pages/DistributorsPage'
import TechnologiesPage from './pages/TechnologiesPage'

function App() {
  const path = window.location.pathname
  const Page =
    path === '/biohacking'
      ? BiohackingPage
      : path === '/tecnologias'
        ? TechnologiesPage
        : path === '/distribuidores'
          ? DistributorsPage
          : LandingPage

  useEffect(() => {
    if (!window.location.hash) return

    window.requestAnimationFrame(() => {
      const target = document.querySelector(window.location.hash)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [path])

  return (
    <>
      <SiteHeader />
      <Page />
      <SiteFooter />
    </>
  )
}

export default App
