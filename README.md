# Bombay Group Website

React + Vite website for Bombay Group / Bombay Finance India Pvt. Ltd.

## Quick Start

```bash
# 1. Install dependencies (required first time)
npm install

# 2. Start development server → opens at http://localhost:5173
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css   ← Sticky navbar with mega-menu + mobile drawer
│   ├── Footer.jsx / .css   ← Full 4-col footer + company strip + CTA band
│   └── ComingSoon.jsx/.css ← Branded placeholder for pages in progress
├── pages/
│   ├── Home.jsx / .css     ← COMPLETE (9 sections)
│   ├── About.jsx           ← Placeholder — next stage
│   ├── Services.jsx        ← Placeholder — next stage
│   ├── Companies.jsx       ← Placeholder — next stage
│   ├── Achievements.jsx    ← Placeholder — next stage
│   ├── News.jsx            ← Placeholder — next stage
│   ├── Careers.jsx         ← Placeholder — next stage
│   └── Contact.jsx         ← Placeholder — next stage
├── App.jsx                 ← Router + global layout
├── main.jsx                ← Entry point
└── index.css               ← CSS variables + global utilities
```

## Brand Colors

| Variable        | Hex       | Usage                     |
|----------------|-----------|---------------------------|
| --green-dark   | #1B4332   | Primary brand / headings  |
| --green-mid    | #2D6A4F   | Hover states              |
| --gold         | #C9A84C   | Accent / CTA highlights   |
| --off-white    | #F9F7F2   | Alt section backgrounds   |

## Homepage Sections (Complete)

1. Hero — full-screen with headline, dual CTA, trust badges
2. Stats Strip — animated counters (10+ companies, 4 continents, $550M+, 25+ years)
3. Who We Are — mission, values, global presence chips
4. Business Verticals — 6 service cards
5. Our Companies — 10 group entity cards
6. Achievements & Credentials — 6 highlight cards
7. Leadership Team — 3 leader profile cards
8. News & Media — 3 latest articles
9. Finance Enquiry CTA — inline mini-form

## Page Status

| Page           | Status         | Route           |
|---------------|----------------|-----------------|
| Home           | ✅ Built        | /               |
| About          | 🏗️ Next stage   | /about          |
| Services       | 🏗️ Next stage   | /services       |
| Our Companies  | 🏗️ Next stage   | /companies      |
| Achievements   | 🏗️ Next stage   | /achievements   |
| News & Media   | 🏗️ Next stage   | /news           |
| Careers        | 🏗️ Next stage   | /careers        |
| Contact        | 🏗️ Next stage   | /contact        |
| Privacy Policy | 🏗️ Next stage   | /privacy        |
| Terms          | 🏗️ Next stage   | /terms          |
| NBFC Disclaimer| 🏗️ Next stage   | /disclaimer     |
