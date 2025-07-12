"use client";

import { useState, useEffect } from "react";

export interface TenderType {
  id: number;
  tender_number: string;
  description: string;
  published_date: string;
  closing_date: string;
  briefing_date: string;
  location: string;
  tender_document_url: string;
  tender_category: string;
  tender_type: string;
  tender_status: string;
  contact_person: string;
  contact_email: string;
}

const HandleTransnetTenders = () => {
  const [tenders, setTenders] = useState<TenderType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/tenders/approved")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tenders");
        return res.json();
      })
      .then((data) => {
        setTenders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading tenders...</p>;
  if (error) return <p>Error: {error}</p>;
  if (tenders.length === 0) return <p>No approved tenders found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Approved Tenders</h1>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Number</th>
            <th>Description</th>
            <th>Published Date</th>
            <th>Closing Date</th>
            <th>Location</th>
            <th>Category</th>
            <th>Status</th>
            <th>Document</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((t) => (
            <tr key={t.id} className="border-b">
              <td>{t.tender_number}</td>
              <td>{t.description}</td>
              <td>{t.published_date}</td>
              <td>{t.closing_date}</td>
              <td>{t.location}</td>
              <td>{t.tender_category}</td>
              <td>{t.tender_status}</td>
              <td>
                <a
                  href={t.tender_document_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleTransnetTenders;


