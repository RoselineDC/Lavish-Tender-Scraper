"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";

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
const filters = {
  institutionName: ['Transnet', 'CSIR', 'Huawei'],
  price: ['$0-100', '$101-500', '$501+'],
  device: ['PC', 'Tablet', 'Phone'],
  color: ['Purple', 'Black', 'White'],
};


const TenderTable: React.FC = () => {
  const [tenders, setTenders] = useState<Tender[]>(mockTenders);

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
    <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
      <table className="w-full text-left table-auto min-w-max">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">Institution Name</th>
            <th className="border px-3 py-2">Tender #</th>
            <th className="border px-3 py-2">Description</th>
            <th className="border px-3 py-2">Published</th>
            <th className="border px-3 py-2">Closing</th>
            <th className="border px-3 py-2">Briefing</th>
            <th className="border px-3 py-2">Location</th>
            <th className="border px-3 py-2">Document</th>
            <th className="border px-3 py-2">Category</th>
            <th className="border px-3 py-2">Type</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Contact</th>
            <th className="border px-3 py-2">Email</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((tender) => (
            <tr key={tender.id} className="hover:bg-gray-50">
              <td className="border px-3 py-2">{tender.institutionName}</td>
              <td className="border px-3 py-2">{tender.tender_number}</td>
              <td className="border px-3 py-2">{tender.description}</td>
              <td className="border px-3 py-2">{tender.published_date}</td>
              <td className="border px-3 py-2">{tender.closing_date}</td>
              <td className="border px-3 py-2">{tender.briefing_date}</td>
              <td className="border px-3 py-2">{tender.location}</td>
              <td className="border px-3 py-2">
                <a
                  href={tender.tender_document_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </td>
              <td className="border px-3 py-2">{tender.tender_category}</td>
              <td className="border px-3 py-2">{tender.tender_type}</td>
              <td className="border px-3 py-2">{tender.tender_status}</td>
              <td className="border px-3 py-2">{tender.contact_person}</td>
              <td className="border px-3 py-2">{tender.contact_email}</td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  onClick={() => handleApprove(tender.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDelete(tender.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TenderTable;
