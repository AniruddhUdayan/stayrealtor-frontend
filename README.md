# StayRealtor Frontend Assignment

A comprehensive React + Tailwind CSS v4 application demonstrating modern frontend engineering practices, UX sensibility, and clean component architecture.

## 🚀 Live Demo

[View Live Application](https://stayrealtor-frontend.vercel.app/)

## 📋 Project Overview

This project showcases 5 distinct tasks, each highlighting different aspects of frontend development:

1. **OTP Verification UX Flow** - SMS to Voice fallback with auto-fill
2. **Loading State Implementation** - Skeleton loaders and spinners
3. **Image Optimization Audit** - Performance comparison and WebP optimization
4. **Inactive/Non-Functional UI Components** - Disabled states and removed components
5. **UI Consistency & Alignment Audit** - Dashboard with 4/8pt grid system

## 🛠 Tech Stack

- **React 19** - Latest React with modern hooks
- **Tailwind CSS v4** - Latest version with @import syntax
- **Vite** - Fast build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript features

## 🏗 Project Structure

```
src/
├── assets/
│   └── react.svg
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── TooltipWrapper.jsx
│   ├── GridOverlay.jsx
│   ├── StatCard.jsx
│   ├── ImageCard.jsx
│   ├── RemovedComponentPlaceholder.jsx
│   ├── DisabledButton.jsx
│   ├── SkeletonTable.jsx
│   ├── SkeletonCard.jsx
│   └── LoadingSpinner.jsx
├── screens/
│   ├── Dashboard/
│   │   └── index.jsx
│   ├── InactiveUI/
│   │   └── index.jsx
│   ├── ImageOptimization/
│   │   └── index.jsx
│   ├── LoadingStates/
│   │   └── index.jsx
│   └── OTPVerification/
│       └── index.jsx
├── service/
│   └── otp.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Task Implementations

### Task 1: OTP Verification UX Flow

**How I tackled it:**
- Built a multi-step OTP flow with a phone number sign-in, 6-digit OTP input, and a success dialog.
- Implemented SMS OTP with a 30s timer and automatic fallback to Voice OTP (call) if SMS is delayed.
- Added Web OTP API support for mobile web: the OTP auto-fills if received via SMS on supported browsers.
- Enhanced UX with auto-focus, paste support, error handling, and a modern, mobile-friendly UI.
- All states (loading, error, success) are visually distinct and accessible.

**File:** `src/screens/OTPVerification/index.jsx`

---

### Task 2: Loading State Implementation

**How I tackled it:**
- Created a skeleton loader grid that matches the real estate theme, with animated placeholders for cards.
- After loading, real estate property cards are shown, each with agent avatars, property details, and a "Register" button.
- The "Register" button shows a loading spinner and a success animation when clicked, all within the card.
- The design is responsive and visually consistent with the app’s dark/light theme.

**File:** `src/screens/LoadingStates/index.jsx`

---

### Task 3: Image Optimization Audit

**How I tackled it:**
- Built a side-by-side (and later toggleable) image comparison UI to show original vs. optimized images.
- Used WebP and SVG for optimized images, with metrics and best practices explained in the UI.
- The section is styled for clarity, with a modern, dark theme and real estate branding.
- Included a summary of performance impact and optimization techniques.

**File:** `src/screens/ImageOptimization/index.jsx`

---

### Task 4: Inactive/Non-Functional UI Components

**How I tackled it:**
- Designed a prominent disabled button with a custom, pill-shaped tooltip (dark, centered, no icon) that matches the reference image.
- Added a "Feature Removed" card with an alternative action, styled for clarity and focus.
- All states are visually distinct, accessible, and consistent with the app’s theme.

**File:** `src/screens/InactiveUI/index.jsx`

---

### Task 5: UI Consistency & Dashboard Grid

**How I tackled it:**
- Rebuilt the dashboard with a dark sidebar/topbar, animated stat cards, deployments list, and activity feed, all themed for real estate.
- Sidebar icons are visible and the layout is fully responsive, with a hamburger menu for mobile.
- Used a strict 4/8pt grid system for all spacing, padding, and layout.
- Added a real estate–themed overview section and ensured all elements are visually consistent and accessible.

**File:** `src/screens/Dashboard/index.jsx`

## 🎨 Design System

### Color Palette

```css
Primary: #0ea5e9 (Blue)
Secondary: #d946ef (Purple)
Accent: #f97316 (Orange)
Success: #22c55e (Green)
Error: #ef4444 (Red)
Warning: #f59e0b (Yellow)
Neutral: #737373 (Gray scale)
```

### Spacing System

Based on 4/8pt grid for mathematical consistency:
- All margins and padding use 4px or 8px increments
- Typography line-heights follow the 8px baseline
- Component dimensions align to the grid
- Consistent visual rhythm throughout

### Typography

- **Font Family:** Inter (Google Fonts)
- **Sizes:** 12px to 60px following modular scale
- **Line Heights:** Optimized for readability
- **Font Weights:** 400, 500, 600, 700, 800, 900

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/stayrealtor-frontend.git

# Navigate to project directory
cd stayrealtor-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Setup

The project uses Vite with Tailwind CSS v4. No additional environment variables are required for basic functionality.

## 📱 Responsive Design

All components are fully responsive with breakpoints:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

Key responsive features:
- Mobile-first approach
- Touch-friendly interactions
- Optimized layouts for all screen sizes
- Accessible navigation patterns

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance (WCAG 2.1 AA)
- Focus management for interactive elements

## 🔧 Tailwind CSS v4 Configuration

**Key Changes from v3:**
- Uses `@import "tailwindcss"` instead of `@tailwind` directives
- No `@apply` with `theme()` functions inside
- Custom theme configuration in `tailwind.config.js`
- Improved performance and smaller bundle size

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { /* Custom color palette */ },
      spacing: { /* 4/8pt spacing system */ },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    }
  }
}
```

## 🏆 Performance Optimizations

### Image Optimization
- WebP format for 25-35% better compression
- Responsive images with proper sizing
- Lazy loading for below-the-fold content
- Optimized quality settings (80-85%)

### Loading States
- Skeleton loaders reduce perceived loading time
- Progressive image loading
- Optimistic UI patterns
- Efficient state management

### Code Quality
- Component reusability
- Clean separation of concerns
- Efficient React patterns
- Minimal bundle size

## 🧪 Testing Strategy

While this is a demo project, production implementation would include:
- Unit tests with Jest and React Testing Library
- Integration tests for user flows
- Visual regression testing
- Accessibility testing with axe-core
- Performance testing with Lighthouse

## 🚀 Deployment

### Build Process

```bash
# Create production build
npm run build

# Preview build locally
npm run preview
```

### Deployment Options

The project can be deployed to:
- **Vercel** - Recommended for Vite projects
- **Netlify** - Easy static site hosting
- **GitHub Pages** - Free hosting option
- **AWS S3 + CloudFront** - Scalable solution

## 🔄 Future Improvements

### Potential Enhancements
- Add TypeScript for better type safety
- Implement proper API integration
- Add comprehensive test suite
- Set up CI/CD pipeline
- Add internationalization (i18n)
- Implement dark mode support
- Add animation library (Framer Motion)

### Performance Optimizations
- Code splitting with React.lazy()
- Service Worker for caching
- Bundle analysis and optimization
- Image CDN integration

## 📖 Documentation

### Component APIs

Each component is self-documented with:
- Clear prop interfaces
- Usage examples
- Accessibility guidelines
- Performance considerations

### Design System Documentation

The project includes a comprehensive design system with:
- Color specifications
- Typography guidelines
- Spacing documentation
- Component patterns
- Best practices

## 🤝 Contributing

This is an assignment project, but if extended:

1. Fork the repository
2. Create a feature branch
3. Follow the existing code style
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is for assignment purposes. All rights reserved.

## 👥 Author

**Frontend Engineer Candidate**
- Assignment for StayRealtor
- Demonstrating React, Tailwind CSS, and modern frontend practices

## 📞 Contact

For questions about this implementation:
- Review the live demo
- Check the source code documentation
- Examine the component implementations

---

**Built with ❤️ using React 19, Tailwind CSS v4, and Vite**
