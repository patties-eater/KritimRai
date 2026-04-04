import cors from 'cors'
import express from 'express'
import { portfolio } from './data/portfolio.js'

const app = express()
const PORT = process.env.PORT || 4000
const inquiries = []

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.get('/api/portfolio', (_request, response) => {
  response.json(portfolio)
})

app.get('/api/contact-methods', (_request, response) => {
  response.json(portfolio.contact)
})

app.post('/api/inquiries', (request, response) => {
  const { name, phone, eventType, date, message } = request.body ?? {}

  if (!name || !phone || !eventType || !message) {
    response.status(400).json({
      ok: false,
      error: 'Name, phone, event type, and message are required.',
    })
    return
  }

  const inquiry = {
    id: inquiries.length + 1,
    name,
    phone,
    eventType,
    date: date || '',
    message,
    createdAt: new Date().toISOString(),
  }

  inquiries.push(inquiry)

  response.status(201).json({
    ok: true,
    message: 'Inquiry received successfully.',
    inquiry,
  })
})

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
