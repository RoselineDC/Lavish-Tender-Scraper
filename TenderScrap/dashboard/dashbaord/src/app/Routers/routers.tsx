import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "../../components/Dashboard/dashboard";
import Tenders from '../Pages/Tenders';
import Tasks from '../Pages/Suppliers';
import Analytics from '../Pages/Analytics';
import Downloads from '../Pages/Documents';

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
