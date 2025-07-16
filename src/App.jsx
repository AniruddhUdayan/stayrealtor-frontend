import { useState } from 'react';

// Import all task components
import OTPVerification from './components/Task1/OTPVerification';
import LoadingStates from './components/Task2/LoadingStates';
import ImageOptimization from './components/Task3/ImageOptimization';
import InactiveUI from './components/Task4/InactiveUI';
import Dashboard from './components/Task5/Dashboard';

function App() {
  const [activeTask, setActiveTask] = useState('overview');

  const tasks = [
    {
      id: 'task1',
      title: 'Task 1: OTP Verification',
      description: 'SMS OTP with Voice fallback, auto-fill support',
      component: <OTPVerification />
    },
    {
      id: 'task2', 
      title: 'Task 2: Loading States',
      description: 'Skeleton loaders and spinners for API calls',
      component: <LoadingStates />
    },
    {
      id: 'task3',
      title: 'Task 3: Image Optimization',
      description: 'Performance audit and WebP optimization demo',
      component: <ImageOptimization />
    },
    {
      id: 'task4',
      title: 'Task 4: Inactive UI States',
      description: 'Disabled buttons and removed components',
      component: <InactiveUI />
    },
    {
      id: 'task5',
      title: 'Task 5: Dashboard & Grid System',
      description: '4/8pt grid with consistent spacing and layout',
      component: <Dashboard />
    }
  ];

  const OverviewContent = () => (
    <div className="max-w-6xl mx-auto p-lg space-y-2xl">
      <div className="text-center mb-2xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-md">StayRealtor Frontend Assignment</h1>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          A comprehensive demonstration of React, Tailwind CSS v4, and modern frontend engineering practices
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {tasks.map((task, index) => (
          <div 
            key={task.id}
            onClick={() => setActiveTask(task.id)}
            className="bg-white rounded-xl p-lg border border-neutral-200 hover:shadow-lg hover:border-primary-300 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-md">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <span className="text-primary-600 font-bold text-lg">{index + 1}</span>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-sm group-hover:text-primary-700 transition-colors">
              {task.title}
            </h3>
            <p className="text-neutral-600 text-sm">{task.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-2xl border border-primary-200">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-lg text-center">Technical Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-sm">React 19</h3>
            <p className="text-sm text-neutral-600">Modern hooks and state management</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-600 rounded-xl flex items-center justify-center mx-auto mb-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-sm">Tailwind v4</h3>
            <p className="text-sm text-neutral-600">Latest CSS framework with @import syntax</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-600 rounded-xl flex items-center justify-center mx-auto mb-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-sm">Vite</h3>
            <p className="text-sm text-neutral-600">Fast build tool and dev server</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success-600 rounded-xl flex items-center justify-center mx-auto mb-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-sm">Best Practices</h3>
            <p className="text-sm text-neutral-600">Accessibility, responsiveness, performance</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-lg border border-neutral-200">
        <h2 className="text-xl font-semibold text-neutral-900 mb-lg">Assignment Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
          <div>
            <h3 className="font-semibold text-neutral-800 mb-sm">Features Demonstrated</h3>
            <ul className="space-y-xs text-sm text-neutral-700">
              <li>• OTP verification with SMS → Voice fallback flow</li>
              <li>• Skeleton loaders and loading state management</li>
              <li>• Image optimization with WebP and performance metrics</li>
              <li>• Disabled UI states with tooltips and alternatives</li>
              <li>• Dashboard with 4/8pt grid system and visual hierarchy</li>
              <li>• Responsive design across all breakpoints</li>
              <li>• Accessibility considerations and ARIA support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-800 mb-sm">Technical Highlights</h3>
            <ul className="space-y-xs text-sm text-neutral-700">
              <li>• Tailwind v4 compatible configuration</li>
              <li>• Custom theme with comprehensive color palette</li>
              <li>• 4/8pt spacing system for consistent layouts</li>
              <li>• Modern React patterns with hooks</li>
              <li>• Mock API simulations with realistic delays</li>
              <li>• Interactive components with state management</li>
              <li>• Clean, reusable component architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const activeTaskData = tasks.find(task => task.id === activeTask);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-lg py-md">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveTask('overview')}
              className="flex items-center space-x-sm hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SR</span>
              </div>
              <span className="font-semibold text-neutral-900">StayRealtor Assignment</span>
            </button>

            <div className="hidden md:flex items-center space-x-xs bg-neutral-100 rounded-lg p-xs">
              <button
                onClick={() => setActiveTask('overview')}
                className={`px-sm py-xs text-sm font-medium rounded transition-colors ${
                  activeTask === 'overview'
                    ? 'bg-white text-neutral-900 shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Overview
              </button>
              {tasks.map((task, index) => (
                <button
                  key={task.id}
                  onClick={() => setActiveTask(task.id)}
                  className={`px-sm py-xs text-sm font-medium rounded transition-colors ${
                    activeTask === task.id
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Task {index + 1}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-sm">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-sm rounded-lg hover:bg-neutral-100 transition-colors"
                title="View on GitHub"
              >
                <svg className="w-5 h-5 text-neutral-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-md">
            <div className="flex space-x-xs overflow-x-auto pb-xs">
              <button
                onClick={() => setActiveTask('overview')}
                className={`px-sm py-xs text-sm font-medium rounded transition-colors whitespace-nowrap ${
                  activeTask === 'overview'
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                Overview
              </button>
              {tasks.map((task, index) => (
                <button
                  key={task.id}
                  onClick={() => setActiveTask(task.id)}
                  className={`px-sm py-xs text-sm font-medium rounded transition-colors whitespace-nowrap ${
                    activeTask === task.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-neutral-100 text-neutral-600'
                  }`}
                >
                  Task {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-lg">
        {activeTask === 'overview' ? (
          <OverviewContent />
        ) : (
          activeTaskData?.component
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-lg">
        <div className="max-w-7xl mx-auto px-lg text-center">
          <p className="text-neutral-600 text-sm">
            Built with React 19, Tailwind CSS v4, and Vite • Frontend Assignment for StayRealtor
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
