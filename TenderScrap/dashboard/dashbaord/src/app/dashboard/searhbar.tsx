'use client';
import { useMemo, useState } from "react";

export default function TenderSearch({ tenders }: { tenders: any[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredTenders = useMemo(() => {
    if (!normalizedSearch) return tenders; // Show all if search is empty

    const searchableKeys = [
      "institution",
      "number",
      "description",
      "category",
      "location",
    ];

    return tenders.filter((tender) =>
      searchableKeys.some((key) => {
        const value = (tender as Record<string, any>)[key];
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(normalizedSearch)
        );
      })
    );
  }, [normalizedSearch, tenders]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search tenders..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full"
      />

      <table className="w-full">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Number</th>
            <th>Description</th>
            <th>Category</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenders.map((tender, index) => (
            <tr key={index}>
              <td>{tender.institution}</td>
              <td>{tender.number}</td>
              <td>{tender.description}</td>
              <td>{tender.category}</td>
              <td>{tender.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
