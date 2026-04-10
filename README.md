# Radical Engineering Limited

Company website for **Radical Engineering Limited**, an EPC (Engineering, Procurement & Construction) company based in Zambia specializing in Solar, Civil, Electrical, and Mining Engineering services.

## Tech Stack

- **React 19** with Vite 8
- **React Router DOM 7** for client-side routing
- **Swiper** for carousels/sliders
- **React Icons** for iconography
- **ESLint** for linting
- **Google Fonts** (Poppins & Inter)

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services overview |
| `/services/:slug` | Service detail (solar-energy, civil-engineering, electrical-engineering, mining-engineering, general-supplies) |
| `/products` | Product catalog (inverters, batteries, solar modules, accessories) |
| `/projects` | Project portfolio |
| `/contact` | Contact form |

## Project Structure

```
src/
  App.jsx            # Root component with route definitions
  main.jsx           # App entry point (BrowserRouter + StrictMode)
  index.css          # Global styles
  assets/            # Static assets (hero image, etc.)
  components/        # Reusable UI components
    Navbar, Footer, HeroCarousel, ContactForm,
    ProductCard, ServiceCard, StatsCounter,
    ScrollReveal, ScrollToTop, WhatsAppButton
  data/              # Static data files
    services.js, products.js, projects.js
  pages/             # Route-level page components
    Home, About, Services, ServiceDetail,
    Products, Projects, Contact
images/              # Project & product photography
public/              # Public static assets (favicon, icons)
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```
