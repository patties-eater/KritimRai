import { createContext, useContext, useEffect, useState } from 'react'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

const fallbackData = {
  profile: {
    name: 'Kritim Rai',
    title: 'Photographer for people, events, and travel',
    tagline:
      'Simple, beautiful photos for weddings, portraits, family moments, and special places.',
    location: 'Based in Kathmandu and available for travel',
    yearsExperience: '5+',
    heroImage: '/profile-photo.png',
    stats: [
      { label: 'Happy clients', value: '120+' },
      { label: 'Photo shoots', value: '240+' },
      { label: 'Years of work', value: '5+' },
    ],
  },
  collections: [],
  featuredIn: [],
  services: [],
  gallery: [],
  testimonials: [],
  contact: {
    email: 'hello@elaravossstudio.com',
    instagram: '@elaravossstudio',
    facebook: 'https://www.facebook.com/kritim224',
    phone: '+977 9765259401',
    whatsapp: '+977 9765259401',
    location: 'Kathmandu, Nepal',
  },
}

const PortfolioContext = createContext({
  portfolio: fallbackData,
  status: 'loading',
})

export function PortfolioProvider({ children }) {
  const [portfolio, setPortfolio] = useState(fallbackData)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    let cancelled = false

    async function loadPortfolio() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/portfolio`)

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }

        const data = await response.json()

        if (!cancelled) {
          setPortfolio(data)
          setStatus('ready')
        }
      } catch {
        if (!cancelled) {
          setStatus('fallback')
        }
      }
    }

    loadPortfolio()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <PortfolioContext.Provider value={{ portfolio, status }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  return useContext(PortfolioContext)
}
