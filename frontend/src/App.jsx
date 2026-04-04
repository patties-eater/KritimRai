import { Route, Routes } from 'react-router-dom'
import AppLoader from './components/AppLoader.jsx'
import Layout from './components/Layout.jsx'
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function AppRoutes() {
  const { status } = usePortfolio()

  if (status === 'loading') {
    return <AppLoader />
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <PortfolioProvider>
      <AppRoutes />
    </PortfolioProvider>
  )
}

export default App
