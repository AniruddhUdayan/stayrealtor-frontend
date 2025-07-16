# StayRealtor Frontend Assignment

A comprehensive React + Tailwind CSS v4 application demonstrating modern frontend engineering practices, UX sensibility, and clean component architecture.

## 🚀 Live Demo

[View Live Application](https://your-deployment-url.com)

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
├── components/
│   ├── Task1/
│   │   └── OTPVerification.jsx
│   ├── Task2/
│   │   └── LoadingStates.jsx
│   ├── Task3/
│   │   └── ImageOptimization.jsx
│   ├── Task4/
│   │   └── InactiveUI.jsx
│   └── Task5/
│       └── Dashboard.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎯 Task Implementations

### Task 1: OTP Verification UX Flow

**Features:**
- 6-digit OTP input with auto-focus navigation
- SMS verification with 30-second timeout
- Automatic fallback to Voice OTP option
- Auto-fill support for pasted codes
- Real-time validation and error handling
- Mock API simulation with realistic delays

**Key UX Considerations:**
- Clear visual feedback for each state
- Accessibility support with proper ARIA labels
- Mobile-optimized input handling
- Graceful error recovery

**File:** `src/components/Task1/OTPVerification.jsx`

### Task 2: Loading State Implementation

**Features:**
- Skeleton loaders for cards and tables
- Multiple spinner variations (sm, md, lg, xl)
- Button loading states with inline spinners
- Responsive skeleton components
- Mock API calls with realistic delays
- Property listings and user management demos

**Performance Benefits:**
- Perceived performance improvement
- Reduced bounce rates during loading
- Better user engagement
- Clear loading state communication

**File:** `src/components/Task2/LoadingStates.jsx`

### Task 3: Image Optimization Audit

**Before vs After Comparison:**

| Aspect | Poor Quality | Optimized |
|--------|-------------|-----------|
| Format | JPEG | WebP |
| File Size | 450-680KB | 95-120KB |
| Quality | 25-30% | 80-85% |
| Load Time | 3+ seconds | <1 second |
| Compression | High artifacts | Clean, optimized |

**Performance Impact:**
- **73-86% file size reduction**
- **60-70% faster load times**
- **Improved Core Web Vitals**
- **Better mobile experience**
- **Reduced bandwidth costs**

**Implementation Features:**
- Live image load time measurement
- Side-by-side quality comparison
- Performance metrics visualization
- Best practices documentation
- Code examples for responsive images

**File:** `src/components/Task3/ImageOptimization.jsx`

### Task 4: Inactive/Non-Functional UI Components

**Disabled Button States:**
- Form validation with conditional enabling
- Tooltip explanations for disabled states
- Feature availability restrictions
- Permission-based button states
- Visual feedback with appropriate styling

**Removed Component Patterns:**
- Live Chat Widget (maintenance placeholder)
- Interactive Map (API limitation handling)
- Social Media Sharing (privacy compliance)
- Advanced Search (redesign in progress)

**Best Practices Demonstrated:**
- Clear user communication
- Alternative action suggestions
- Consistent disabled state styling
- Helpful tooltip explanations
- Feature toggle implementations

**File:** `src/components/Task4/InactiveUI.jsx`

### Task 5: UI Consistency & Alignment Audit

**4/8pt Grid System:**
- `xs: 4px` - Micro spacing
- `sm: 8px` - Small spacing  
- `md: 16px` - Medium spacing
- `lg: 24px` - Large spacing
- `xl: 32px` - Extra large spacing
- `2xl: 48px` - Section spacing

**Dashboard Features:**
- Interactive grid overlay (toggle with "Show 8px Grid")
- Consistent spacing throughout
- Visual hierarchy with typography scales
- Responsive grid layouts
- Mock charts and data visualization
- Activity feeds and property listings

**Design System Elements:**
- Comprehensive color palette
- Typography scale with proper line heights
- Border radius system (4px increments)
- Shadow system for depth
- Icon consistency and sizing

**File:** `src/components/Task5/Dashboard.jsx`

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
