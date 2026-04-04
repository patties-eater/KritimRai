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
  collections: [
    {
      name: 'Collection One',
      count: 'Coming soon',
      description: 'Placeholder collection for future wedding, portrait, or event photos.',
    },
    {
      name: 'Collection Two',
      count: 'Coming soon',
      description: 'Placeholder collection for future portrait or personal photo work.',
    },
    {
      name: 'Collection Three',
      count: 'Coming soon',
      description: 'Placeholder collection for future travel, outdoor, or location shoots.',
    },
    {
      name: 'Collection Four',
      count: 'Coming soon',
      description: 'Placeholder collection for future event coverage and featured albums.',
    },
  ],
  services: [
    {
      name: 'Wedding Basic Package',
      price: 'NPR 25,000',
      featured: false,
      duration: '4 hours',
      description:
        'Good for small weddings and simple event coverage with the main moments captured well.',
      deliverables: '4 hours coverage, edited photos, and online gallery delivery.',
      features: ['4 hours of coverage', '100+ edited photos', 'Online gallery', 'Phone support before event'],
    },
    {
      name: 'Wedding Full Day Package',
      price: 'NPR 55,000',
      featured: true,
      duration: 'Full day',
      description:
        'Best for full wedding stories from preparation to ceremony and celebration.',
      deliverables: 'Full day coverage, highlight photos, edited gallery, and event planning support.',
      features: ['Full day coverage', '300+ edited photos', 'Highlight preview', 'Planning support', 'Online gallery'],
    },
    {
      name: 'Portrait Package',
      price: 'NPR 8,000',
      featured: false,
      duration: '1 to 2 hours',
      description:
        'A simple portrait package for one person, couples, graduation, or family photos.',
      deliverables: '1 to 2 hour shoot, pose guidance, edited images, and digital delivery.',
      features: ['1 to 2 hour session', 'Pose guidance', '25+ edited photos', 'Digital delivery'],
    },
    {
      name: 'Pre Wedding Package',
      price: 'NPR 18,000',
      featured: false,
      duration: 'Half day',
      description:
        'A relaxed outdoor or city shoot for couples before the wedding day.',
      deliverables: 'Location planning, outfit support, edited photos, and social media ready images.',
      features: ['Location planning', 'Outfit suggestions', 'Edited photos', 'Social media ready images'],
    },
    {
      name: 'Event Coverage Package',
      price: 'NPR 15,000',
      featured: false,
      duration: 'Up to 4 hours',
      description:
        'Photography for birthdays, engagements, parties, launches, and special programs.',
      deliverables: 'Event coverage, edited photos, and fast online delivery.',
      features: ['Event coverage', 'Fast photo delivery', 'Edited images', 'Suitable for parties and programs'],
    },
    {
      name: 'Brand and Product Package',
      price: 'Starting from NPR 12,000',
      featured: false,
      duration: 'Custom timing',
      description:
        'Photo service for cafes, small businesses, products, menus, and social media content.',
      deliverables: 'Shot planning, product or space photos, edited files, and business use images.',
      features: ['Shot planning', 'Product and space photos', 'Edited files', 'Business use images'],
    },
  ],
  gallery: [
    {
      title: 'Monsoon Letters',
      category: 'Wedding',
      description: 'A warm wedding story with rain, lights, and real moments.',
      image:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'After the Crossing',
      category: 'Travel',
      description: 'A calm travel shoot with mountain views and soft light.',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Studio Silence',
      category: 'Portrait',
      description: 'A simple portrait set with clean styling and quiet mood.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Salt and Light',
      category: 'Editorial',
      description: 'A brand shoot made to feel warm, bright, and welcoming.',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Before the Vows',
      category: 'Wedding',
      description: 'Quiet photos from the moments before the ceremony begins.',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80',
    },
    {
      title: 'Drift',
      category: 'Portrait',
      description: 'A creative portrait collection with soft shadow and movement.',
      image:
        'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=900&q=80',
    },
  ],
  contact: {
    email: 'hello@elaravossstudio.com',
    instagram: '@elaravossstudio',
    facebook: 'https://www.facebook.com/kritim224',
    phone: '+977 9765259401',
    whatsapp: '+977 9765259401',
    location: 'Kathmandu, Nepal',
    vcardUrl: '/kritim-rai-contact.vcf',
  },
  availability: {
    title: 'Available across Nepal for weddings, portraits, events, and travel shoots.',
    details:
      'Open for bookings in Kathmandu, outside valley shoots, destination weddings, and short creative projects.',
    slots: ['Weddings', 'Portraits', 'Events', 'Travel Shoots'],
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
