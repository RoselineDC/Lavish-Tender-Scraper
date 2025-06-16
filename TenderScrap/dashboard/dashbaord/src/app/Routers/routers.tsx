import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../../components/Dashboard/dashboard";
import Tenders from '../tenders/page';
import Tasks from '../suppliers/page';
import Analytics from '../pages/Analytics';
import Downloads from '../pages/Documents';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
