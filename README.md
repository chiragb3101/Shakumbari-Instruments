# PrecisionTech Instruments - Next.js Website

A modern, responsive website for PrecisionTech Instruments, showcasing professional paper testing equipment and laboratory instruments.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme optimized for laboratory equipment
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Intersection Observer-based animations for enhanced UX
- **Performance Optimized**: Built with Next.js 15 and optimized for speed
- **SEO Ready**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with stats
│   ├── Features.tsx         # Features/capabilities section
│   ├── Instruments.tsx      # Product portfolio
│   ├── Contact.tsx          # Contact section
│   └── Footer.tsx           # Footer component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shakumbari-instruments-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`from-blue-500 to-blue-700`)
- **Background**: Dark slate (`slate-900`, `slate-800`)
- **Text**: Light slate (`slate-100`, `slate-300`)
- **Accents**: Blue (`blue-400`, `blue-500`)

### Typography
- **Font**: Inter (with system fallbacks)
- **Headings**: Bold weights with tight tracking
- **Body**: Medium weight with relaxed line height

### Components
- **Cards**: Glassmorphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover animations
- **Navigation**: Smooth scroll with underline animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## 📄 Sections

1. **Header**: Fixed navigation with smooth scroll
2. **Hero**: Main value proposition with animated stats
3. **Features**: 6 key capabilities with icons
4. **Instruments**: Product portfolio with specifications
5. **Contact**: Call-to-action with contact information
6. **Footer**: Company branding and copyright

## 🔧 Customization

### Adding New Instruments

Edit the `instruments` array in `src/components/Instruments.tsx`:

```typescript
const instruments = [
  {
    name: 'New Instrument',
    description: 'Description here...',
    specs: [
      { label: 'Spec Label', value: 'Spec Value' }
    ]
  }
];
```

### Modifying Colors

Update the gradient classes in `src/app/globals.css`:

```css
@layer components {
  .gradient-accent {
    @apply bg-gradient-to-br from-[your-color] to-[your-color];
  }
}
```

## 📞 Contact Information

- **Sales**: sales@precisiontech-instruments.com
- **Support**: +1-555-PRECISION
- **Hours**: Monday - Friday: 8:00 AM - 6:00 PM EST

## 📄 License

This project is proprietary to PrecisionTech Instruments.

---

Built with ❤️ using Next.js and Tailwind CSS
