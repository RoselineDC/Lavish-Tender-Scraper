import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../analytics/dashboard";
import Tenders from '../tenders/page';
import Tasks from '../suppliers/page';
import Analytics from '../analytics/page';
import Downloads from '../documents/page';

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
