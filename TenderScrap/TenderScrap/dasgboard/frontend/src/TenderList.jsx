import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TenderList() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tenders')
      .then(res => setTenders(res.data))
      .catch(console.error);
  }, []);

  const handleAccept = (id) => {
    axios.post(`http://localhost:5000/api/tenders/accept/${id}`)
      .then(() => setTenders(prev => prev.filter(t => t[0] !== id)));
  };

  const handleReject = (id) => {
    axios.post(`http://localhost:5000/api/tenders/reject/${id}`)
      .then(() => setTenders(prev => prev.filter(t => t[0] !== id)));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Tenders</h1>
      {tenders.map((tender) => (
        <div key={tender[0]} className="p-4 mb-3 bg-white shadow rounded">
          <h2 className="text-lg font-semibold">{tender[1]}</h2>
          <p>{tender[2]}</p>
          <div className="mt-2 space-x-2">
            <button onClick={() => handleAccept(tender[0])} className="px-3 py-1 bg-green-600 text-white rounded">Accept</button>
            <button onClick={() => handleReject(tender[0])} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
          </div>
        </div>
      ))}
    </div>
  );
}
