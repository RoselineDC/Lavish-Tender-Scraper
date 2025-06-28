'use client';

import React, { useState } from "react";
import Link from "next/link";
import FilterBar from './FilterBar';

interface Tender {
  id: number;
  institutionName: string;
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

const mockTenders: Tender[] = [
  {
    id: 1,
    institutionName: "Dept of Education",
    tender_number: "DOE123",
    description: "Supply of Stationery",
    published_date: "2025-06-01",
    closing_date: "2025-06-30",
    briefing_date: "2025-06-10",
    location: "Pretoria",
    tender_document_url: "http://example.com/doc.pdf",
    tender_category: "Supplies",
    tender_type: "Open",
    tender_status: "Open",
    contact_person: "John Doe",
    contact_email: "john@example.com",
  },
];

const TenderTable: React.FC = () => {
  const [tenders, setTenders] = useState<Tender[]>(mockTenders);

  const handleRefresh = () => {
    // Simulate refreshing data from server
    setTenders([...mockTenders]);
  };

  const handleApprove = (id: number) => {
    alert(`Tender ID ${id} approved.`);
  };

  const handleDelete = (id: number) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this tender?"
    );
    if (confirmDelete) {
      setTenders((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Tenders</h2>
        <button
          onClick={handleRefresh}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh
        </button>
      </div>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Institution</th>
            <th className="border p-2">Tender No</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Closing Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender.id}>
              <td className="border p-2">{tender.institutionName}</td>
              <td className="border p-2">{tender.tender_number}</td>
              <td className="border p-2">{tender.description}</td>
              <td className="border p-2">{tender.closing_date}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleApprove(tender.id)}
                  className="text-green-600 hover:underline"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDelete(tender.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TenderTable;
