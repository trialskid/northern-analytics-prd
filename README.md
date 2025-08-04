# Northern Analytics Website

A professional marketing website for Northern Analytics - Business Intelligence & Process Automation services.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Forms**: Formspree integration
- **Analytics**: Plausible.io
- **Hosting**: Cloudflare Pages
- **Testing**: Playwright + Axe for accessibility

## 📁 Project Structure

```
northern-analytics/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── legal/
│   │   ├── process/
│   │   ├── services/
│   │   └── thanks/
│   └── components/          # Reusable UI components
├── public/                  # Static assets
├── tests/                   # Playwright tests
└── .github/workflows/       # CI/CD configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#0A2540` (Navy)
- **Accent**: `#1E90FF` (Azure)
- **Background**: `#F5F6F9` (Light Gray)
- **Highlight**: `#FFB703` (Gold)

### Components
- `HeroSection` - Hero banners with CTA
- `StatGrid` - Metrics display
- `ServiceCards` - Service offerings
- `BulletGrid` - Feature lists
- `ProcessTimeline` - Step-by-step processes
- `CTASection` - Call-to-action sections
- `ProcessTable` - Detailed process breakdown
- `FAQList` - Collapsible FAQ component
- `LeadForm` - Contact form with validation
- `Timeline` - Professional journey timeline

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build & Export
```bash
npm run build
npm run export
```

### Testing
```bash
npm run test        # Playwright tests
npm run lint        # ESLint
```

## 📊 Performance Targets

- **LCP**: < 2 seconds
- **CLS**: < 0.1
- **TBT**: < 150ms
- **JavaScript**: ≤ 150kB (gzipped)
- **CSS**: ≤ 50kB
- **Lighthouse Score**: ≥ 90 (mobile)

## 🌐 Deployment

### Cloudflare Pages
The site automatically deploys to Cloudflare Pages via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs build process
3. Deploys to Cloudflare Pages
4. HTTPS + HSTS enforced

### Environment Variables
- `FORMSPREE_ID` - Form handling service ID
- `PLAUSIBLE_DOMAIN` - Analytics domain
- `CLOUDFLARE_API_TOKEN` - Deployment token
- `CLOUDFLARE_ACCOUNT_ID` - Account identifier

## ♿ Accessibility

- WCAG 2.2 AA compliant
- 4.5:1 color contrast ratio
- Keyboard navigation support
- Screen reader optimized
- `prefers-reduced-motion` support
- Semantic HTML landmarks

## 🔍 SEO Features

- Unique meta titles/descriptions
- JSON-LD structured data
- OpenGraph images
- XML sitemap
- Robots.txt
- Performance optimized

## 📝 Content Pages

1. **Home** - Hero, stats, services overview, benefits, process teaser
2. **Services** - Detailed service descriptions with pain points/solutions
3. **Process** - Methodology table and FAQ
4. **About** - Professional bio and timeline
5. **Contact** - Lead form and contact information
6. **Legal** - Privacy policy and terms of service

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration with static export
- `tailwind.config.js` - Design system tokens
- `playwright.config.ts` - Test configuration
- `.eslintrc.json` - Code quality rules
- `.prettierrc` - Code formatting

## 📈 Analytics & Forms

- **Plausible Analytics**: Privacy-focused website analytics
- **Formspree**: Form backend for contact submissions
- **Success Redirect**: `/thanks` page after form submission

## 🚦 Launch Checklist

- [ ] Replace placeholder metrics with real data
- [ ] Add client logos and testimonials
- [ ] Finalize privacy policy and terms content
- [ ] Configure Formspree domain and SSL
- [ ] Set up Plausible Analytics
- [ ] Run Lighthouse audit (target: 90+ mobile)
- [ ] Test on Chrome, Edge, Safari, Firefox
- [ ] Run accessibility audit (0 critical issues)
- [ ] Verify all forms and CTAs work correctly

## 📞 Support

For questions about this website:
- Email: hello@northern-analytics.com
- Issues: GitHub Issues tab

## 📄 License

© 2024 Northern Analytics. All rights reserved.