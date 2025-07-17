import { Routes, Route, Link } from 'react-router-dom';
import OTPVerification from './OTPVerification';
import LoadingStates from './LoadingStates';
import ImageOptimization from './ImageOptimization';
import InactiveUI from './InactiveUI';
import Dashboard from './Dashboard';

const HERO_BG =
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80';

const tasks = [
  {
    id: 'task1',
    title: 'OTP Verification',
    description: 'Task 1: Implement an OTP verification flow with SMS and Voice fallback, auto-fill, and mock API simulation.',
    icon: (
      <svg className="w-7 h-7 text-primary-400" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M12 17v.01M12 13a4 4 0 100-8 4 4 0 000 8zm0 0v4m0 0h4m-4 0H8"/></svg>
    ),
    color: 'bg-primary-50',
    to: '/task1',
  },
  {
    id: 'task2',
    title: 'Loading States',
    description: 'Task 2: Build a component with skeleton loader and spinner for API calls. Simulate delay with fake fetch.',
    icon: (
      <svg className="w-7 h-7 text-accent-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M12 6v6l4 2"/></svg>
    ),
    color: 'bg-accent-50',
    to: '/task2',
  },
  {
    id: 'task3',
    title: 'Image Optimization',
    description: 'Task 3: Audit and optimize two poor-quality images. Replace with optimized WebP/SVG and explain the impact.',
    icon: (
      <svg className="w-7 h-7 text-success-400" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="8.5" cy="12.5" r="1.5" fill="currentColor"/><path stroke="currentColor" strokeWidth="2" d="M21 19l-5.5-7-4.5 6-3-4-4 5"/></svg>
    ),
    color: 'bg-success-50',
    to: '/task3',
  },
  {
    id: 'task4',
    title: 'Inactive UI States',
    description: 'Task 4: Design a UI with a disabled button (with tooltip) and a removed component (show alt UX flow/message).',
    icon: (
      <svg className="w-7 h-7 text-warning-400" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M12 8v4m0 4h.01"/></svg>
    ),
    color: 'bg-warning-50',
    to: '/task4',
  },
  {
    id: 'task5',
    title: 'Dashboard & Grid',
    description: 'Task 5: Create a sample dashboard using a 4/8pt grid. Apply consistent spacing, padding, and visual hierarchy.',
    icon: (
      <svg className="w-7 h-7 text-secondary-400" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    color: 'bg-secondary-50',
    to: '/task5',
  },
];

function OverviewContent() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center rounded-2xl overflow-hidden mx-2 my-4 shadow-xl"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Animated floating real estate SVG */}
        <div className="absolute right-8 bottom-8 hidden md:block animate-float z-20 pointer-events-none">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="40" width="100" height="30" rx="6" fill="#fff" fillOpacity="0.9" />
            <rect x="30" y="25" width="60" height="25" rx="4" fill="#6366f1" fillOpacity="0.8" />
            <rect x="50" y="10" width="20" height="20" rx="3" fill="#a5b4fc" fillOpacity="0.8" />
            <rect x="60" y="55" width="10" height="15" rx="2" fill="#fbbf24" fillOpacity="0.8" />
          </svg>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4 drop-shadow-xl animate-fade-in-down">
            One Place For Everything
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-6 max-w-xl mx-auto animate-fade-in-up delay-100">
            A smart digital account with built-in tools and features that simplify real estate brokerage business.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-600 text-white font-semibold text-base shadow-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 mb-8 animate-fade-in-up delay-200 motion-safe:animate-bounce-on-hover"
          >
            Download for Android
          </a>
        </div>
      </section>
      {/* Tasks Grid */}
      <section id="tasks" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task, idx) => (
            <Link
              key={task.id}
              to={task.to}
              className="group bg-white/90 hover:bg-white shadow-md rounded-2xl p-6 flex flex-col h-full transition-all border border-neutral-100 hover:border-primary-200 transform-gpu motion-safe:hover:scale-[1.03] motion-safe:active:scale-95 animate-fade-in-up"
              style={{ animationDelay: `${idx * 80 + 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${task.color} mr-3`}>
                  {task.icon}
                </div>
                <span className="text-xs font-bold text-neutral-400">Task {idx + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-neutral-900 mb-1 group-hover:text-primary-700 transition-colors">{task.title}</h3>
                <p className="text-neutral-500 text-sm mb-2">{task.description}</p>
              </div>
              <div className="flex justify-end mt-auto">
                <svg className="w-5 h-5 text-neutral-300 group-hover:text-primary-400 transition-colors" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M17 7l-7 7m0 0l7 0m-7 0l0-7"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Animations (add to global CSS or Tailwind config) */}
      <style>{`
        @keyframes fade-in-down { from { opacity: 0; transform: translateY(-24px); } to { opacity: 1; transform: none; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .animate-fade-in-down { animation: fade-in-down 0.7s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-up { animation: fade-in-up 0.7s cubic-bezier(.4,0,.2,1) both; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .motion-safe\:animate-bounce-on-hover:hover { animation: bounce 0.7s; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      `}</style>
    </>
  );
}

export default function ScreensRouter() {
  return (
    <Routes>
      <Route path="/" element={<OverviewContent />} />
      <Route path="/task1" element={<OTPVerification />} />
      <Route path="/task2" element={<LoadingStates />} />
      <Route path="/task3" element={<ImageOptimization />} />
      <Route path="/task4" element={<InactiveUI />} />
      <Route path="/task5" element={<Dashboard />} />
    </Routes>
  );
} 