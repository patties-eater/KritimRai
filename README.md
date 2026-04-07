# Kritim Rai Portfolio

A responsive photographer portfolio website for Kritim Rai, built with React, Vite, Node.js, and Express.

The site is designed for phone, tablet, and desktop, with a simple multi-page layout and quick contact options for photography inquiries.

## Features

- Multi-page React app using Browser Router
- Responsive layout for mobile, tablet, and desktop
- Mobile bottom navigation for easier phone use
- Portfolio gallery with image lightbox
- Services page with package cards, prices, and included features
- Contact page with package-aware inquiry flow
- WhatsApp and SMS message generation from the contact form
- Bikram Sambat style date entry in the booking form
- Featured section for places where Kritim Rai has been featured
- Loader screen and automatic scroll-to-top on route change

## Pages

- Home
- Portfolio
- Services
- About
- Contact

## Tech Stack

- Frontend: React, Vite, React Router
- Styling: Tailwind via `@tailwindcss/vite`
- Backend: Node.js, Express

## Project Structure

- `frontend/` contains the React portfolio website
- `backend/` contains the Express API and portfolio data

## Installation

Install dependencies in all required folders:

```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

## Run The Project

From the project root:

```bash
npm run dev
```

This starts:

- the Vite frontend
- the Express backend

## Build

To build the frontend:

```bash
npm run build
```

## Start Backend Only

```bash
npm run start
```

## Notes

- The frontend includes fallback content, so much of the site can still render even if the backend is not running.
- Contact actions are practical and user-friendly: the form prepares a WhatsApp or SMS message instead of silently sending anything.
- Collections are currently hidden from the main UI for now, but related code can be brought back later.
