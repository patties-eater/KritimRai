import cors from 'cors'
import express from 'express'
import { portfolio } from './data/portfolio.js'

const app = express()
const PORT = process.env.PORT || 4000

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

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`)
})
