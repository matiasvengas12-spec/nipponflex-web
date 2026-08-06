import LandingPage from './components/landing/LandingPage'
import SiteHeader from './components/layout/SiteHeader'
import BiohackingPage from './pages/BiohackingPage'
import TechnologiesPage from './pages/TechnologiesPage'

function App() {
  const path = window.location.pathname
  const Page =
    path === '/biohacking'
      ? BiohackingPage
      : path === '/tecnologias'
        ? TechnologiesPage
        : LandingPage

  return (
    <>
      <SiteHeader />
      <Page />
    </>
  )
}

export default App
