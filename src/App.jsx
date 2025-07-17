import { BrowserRouter as Router } from 'react-router-dom';
import ScreensRouter from './screens';
import Header from './components/Header';
import Footer from './components/Footer';

const tasks = [
  { id: 'task1', title: 'Task 1: OTP Verification', path: '/task1' },
  { id: 'task2', title: 'Task 2: Loading States', path: '/task2' },
  { id: 'task3', title: 'Task 3: Image Optimization', path: '/task3' },
  { id: 'task4', title: 'Task 4: Inactive UI States', path: '/task4' },
  { id: 'task5', title: 'Task 5: Dashboard & Grid System', path: '/task5' }
];

function App() {
  return (
    <Router>
      <Header tasks={tasks} />
      <main className="py-lg">
        <ScreensRouter />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
