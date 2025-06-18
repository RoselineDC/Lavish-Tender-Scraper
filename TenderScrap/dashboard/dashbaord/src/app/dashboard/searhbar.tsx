"use client";

import React, { useState } from "react";

export default function ) {
  const [searchTerm, setSearchTerm] = useState("");

  const [tenders] = useState([
    {
      institution: "Dept of Education",
      number: "DOE123",
      description: "Supply of Stationery",
      closingDate: "2025-06-01",
      location: "Pretoria",
      documentUrl: "http://example.com/doc.pdf",
      category: "Supplies",
    },
    {
      institution: "Transnet",
      number: "TN1234",
      description: "Supply of Rail Components",
      closingDate: "2025-06-10",
      location: "Johannesburg",
      documentUrl: "https://www.transnet.net/tenders/rail-components.pdf",
      category: "Engineering",
    },
    {
      institution: "Transnet",
      number: "TN5678",
      description: "Maintenance of Freight Terminals",
      closingDate: "2025-06-14",
      location: "Durban",
      documentUrl: "https://www.transnet.net/tenders/terminal-maintenance.pdf",
      category: "Maintenance",
    },
  ]);

  const filteredTenders = tenders.filter((tender) =>
    `${tender.institution} ${tender.number} ${tender.description} ${tender.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-1">
        <div className="bg-white dark:bg-gray-800 shadow-md sm:rounded-lg overflow-hidden border-t-4 border-green-500">
          <div className="flex flex-col md:flex-row items-center justify-between p-4">
            {/* Search Bar */}
            <div className="w-full md:w-1/2">
              <label htmlFor="simple-search" className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Search by institution, tender number, description..."
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Institution</th>
                  <th className="px-4 py-3">Tender Number</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3">Closing Date</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Document</th>
                  <th className="px-4 py-3">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredTenders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-3 text-center text-gray-400">
                      No tenders found.
                    </td>
                  </tr>
                ) : (
                  filteredTenders.map((tender, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{tender.institution}</td>
                      <td className="px-4 py-3">{tender.number}</td>
                      <td className="px-4 py-3">{tender.description}</td>
                      <td className="px-4 py-3">{tender.closingDate}</td>
                      <td className="px-4 py-3">{tender.location}</td>
                      <td className="px-4 py-3">
                        <a
                          href={tender.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          View
                        </a>
                      </td>
                      <td className="px-4 py-3">{tender.category}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
