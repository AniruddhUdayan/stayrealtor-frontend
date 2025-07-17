import { BrowserRouter as Router } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import ScreensRouter from './screens';
import Header from './components/Header';
import Footer from './components/Footer';

export const ThemeContext = createContext();

const tasks = [
  { id: 'task1', title: 'Task 1: OTP Verification', path: '/task1' },
  { id: 'task2', title: 'Task 2: Loading States', path: '/task2' },
  { id: 'task3', title: 'Task 3: Image Optimization', path: '/task3' },
  { id: 'task4', title: 'Task 4: Inactive UI States', path: '/task4' },
  { id: 'task5', title: 'Task 5: Dashboard & Grid System', path: '/task5' }
];

function getDefaultTheme() {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  }
  return 'dark';
}

function App() {
  const [theme, setTheme] = useState(getDefaultTheme());
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light');
    document.body.classList.add(`theme-${theme}`);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen theme-${theme} transition-colors duration-300`}> {/* top-level theme class */}
        <Router>
          <Header tasks={tasks} />
          <main className="py-lg">
            <ScreensRouter />
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
