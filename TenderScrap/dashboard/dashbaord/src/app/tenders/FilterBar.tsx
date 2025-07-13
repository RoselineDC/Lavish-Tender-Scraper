"use client";

import React, { useState, useEffect, Key } from "react";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";
import { parse } from "date-fns";

// Define Tender type (adjust as needed)
export interface TenderType {
  id: number;
  institutionName?: string;
  tender_number: string;
  description: string;
  published_date: string;
  closing_date: string;
  briefing_date?: string;
  location: string;
  tender_url?: string;
  tender_document_url?: string;
  tender_category: string;
  tender_type?: string;
  tender_status: "Open" | "Closed" | "Approved";
  contact_person?: string;
  contact_email?: string;
}



const filters = {
  institutionName: ["Transnet", "CSIR", "OTHERS"],
  tender_category: ["Goods", "Services", "Goods & Services"],
  published_date_filter: [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 14 Days",
    "This Month",
    "Last Month",
    "Last 3 Months",
    "Custom Range",
  ],
};

export default function FilterBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedFilters, setCheckedFilters] = useState<string[]>([]);
  const [filteredTenders, setFilteredTenders] = useState<TenderType[]>([]);
  const [tenders, setTenders] = useState<TenderType[]>([]);
  const [loading, setLoading] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [closingDateSortAsc, setClosingDateSortAsc] = useState(true);
  const [approvedTenders, setApprovedTenders] = useState<TenderType[]>([]);

  // Fetch tenders from backend on mount
  useEffect(() => {
    fetchTenders();
  }, []);

  // Fetch tenders function
  const fetchTenders = async () => {
    try {
      const res = await fetch("http://localhost:8000/tenders");
      if (!res.ok) throw new Error("Failed to fetch tenders");
      const data = await res.json();
      setTenders(data);
      setFilteredTenders(data);
    } catch (error) {
      console.error("Error fetching tenders:", error);
    }
  };

  // Refresh tenders by triggering backend scraper & DB update
  const handleRefresh = async () => {
    try {
      setLoading(true);
      setCheckedFilters([]);
      setSearchTerm("");

      const res = await fetch("http://localhost:8000/refresh-tenders", {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to trigger scraper");

      const result = await res.json();
      console.log(`Scraping done: ${result.count} tenders collected`);

      if (!Array.isArray(result.tenders))
        throw new Error("No tenders returned");

      setTenders(result.tenders);
      setFilteredTenders(result.tenders);
    } catch (err) {
      console.error("Error refreshing tenders:", err);
      alert("Failed to refresh tenders, please try again later.");
    } finally {
      setLoading(false);
    }
  };
  // ✅ Place this above handleApproveTender
  const fetchApprovedTenders = async () => {
    try {
      const res = await fetch("http://localhost:8000/tenders/approved");
      const data = await res.json();
      setApprovedTenders(data);
    } catch (error) {
      console.error("Failed to fetch approved tenders:", error);
    }
  };

  // ✅ Update this to use `tender.id` and ensure `fetchApprovedTenders` is in scope
  const handleApproveTender = async (tender_number: string | undefined) => {
    if (!tender_number) return;

    try {
      const encodedTenderNumber = encodeURIComponent(tender_number);
      const res = await fetch(
        `http://localhost:8000/tenders/${encodedTenderNumber}/approve`,
        {
          method: "PATCH",
        }
      );

      if (!res.ok) throw new Error("Failed to approve tender");
      alert(`✅ Tender ${tender_number} approved successfully!`);

      // Update the frontend state
      setTenders((prev) =>
        prev.filter((t) => t.tender_number !== tender_number)
      );

      fetchApprovedTenders(); // Refresh approved tenders if needed
    } catch (err) {
      console.error("Error approving tender:", err);
    }
  };

  // Delete tender locally from state (no backend delete in your code yet)
  const handleDelete = (tender_number: string) => {
    if (
      window.confirm(
        "Are you sure you want to delete this tender? This only removes it locally."
      )
    ) {
      setTenders((prev) =>
        prev.filter((t) => t.tender_number !== tender_number)
      );
      setFilteredTenders((prev) =>
        prev.filter((t) => t.tender_number !== tender_number)
      );
      setOpenDropdown(null);
      console.log("Deleted tender number:", tender_number);
    }
  };

  // Handle filter checkbox toggling
  const handleFilterChange = (category: string) => {
    let updatedFilters = [...checkedFilters];
    if (updatedFilters.includes(category)) {
      updatedFilters = updatedFilters.filter((c) => c !== category);
    } else {
      updatedFilters.push(category);
    }
    setCheckedFilters(updatedFilters);

    if (updatedFilters.length === 0) {
      setFilteredTenders(tenders);
    } else {
      const filtered = tenders.filter((t) =>
        updatedFilters.includes(t.tender_category)
      );
      setFilteredTenders(filtered);
    }
  };

  // Search tenders dynamically
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTenders(tenders);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredTenders(
        tenders.filter(
          (t) =>
            (t.institutionName?.toLowerCase() || "").includes(term) ||
            t.tender_number.toLowerCase().includes(term) ||
            t.description.toLowerCase().includes(term) ||
            t.tender_category.toLowerCase().includes(term) ||
            t.location.toLowerCase().includes(term) ||
            (t.contact_person?.toLowerCase() || "").includes(term) ||
            (t.contact_email?.toLowerCase() || "").includes(term) ||
            t.tender_status.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm, tenders]);
  // check tender url and document url
console.log("Tender URL:", tender.tender_url);
console.log("Tender Document URL:", tender.tender_document_url);

  // Toggle dropdown for each tender row actions
  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  // Sort tenders by published_date desc
  const sortedTenders = [...filteredTenders].sort((a, b) => {
    const dateA = new Date(a.published_date);
    const dateB = new Date(b.published_date);
    return dateB.getTime() - dateA.getTime();
  });

  // Date formatter fallback
  const parseDateString = (dateStr: string) => {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      return new Date();
    }
    return date;
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500 hover:shadow-lg transition">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search tenders"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="flex space-x-3 items-center">
          <button
            id="refreshButton"
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center justify-center py-2 px-4 text-sm font-bold text-white bg-green-500 rounded-lg border hover:bg-green-900 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Refresh the table"
          >
            <RefreshCcw className="mr-2" />
            {loading ? "Refreshing..." : "Refresh"}
          </button>

          <div className="relative inline-block text-left w-48">
            <button
              id="filterDropdownButton"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:outline-none focus:ring-4 focus:ring-gray-200"
              type="button"
            >
              <TfiFilter className="mr-2" />
              Filter
              <svg
                className="-mr-1 ml-1.5 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                />
              </svg>
            </button>

            {showDropdown && (
              <div className="absolute right-0 z-10 mt-2 w-48 p-3 bg-white rounded-lg shadow border border-gray-200">
                <h6 className="mb-3 text-sm font-medium p-2 bg-green-900 text-white rounded-lg">
                  CATEGORY
                </h6>
                <ul className="space-y-2 text-sm text-gray-700">
                  {filters.tender_category.map((category) => (
                    <li key={category} className="flex items-center">
                      <input
                        id={`filter-${category}`}
                        type="checkbox"
                        checked={checkedFilters.includes(category)}
                        onChange={() => handleFilterChange(category)}
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                      />
                      <label
                        htmlFor={`filter-${category}`}
                        className="ml-2 font-medium cursor-pointer"
                      >
                        {category}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tender Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-2 py-3">Institution Name</th>
              <th className="px-4 py-3">Tender Number</th>
              <th className="px-20 py-3">Tender Description</th>
              <th className="px-4 py-3">Published Date</th>
              <th
                className="px-4 py-3 cursor-pointer"
                onClick={() => setClosingDateSortAsc(!closingDateSortAsc)}
              >
                Closing Date {closingDateSortAsc ? "↑" : "↓"}
              </th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Tender Link</th>
              <th className="px-4 py-3">Tender Document</th>
              <th className="px-4 py-3">Tender Category</th>
              <th className="px-4 py-3">Tender Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-4 py-3 text-center text-gray-400"
                >
                  No tenders found.
                </td>
              </tr>
            ) : (
              sortedTenders.map((tender, index) => (
                <tr key={tender.tender_number} className="border-b">
                  <td className="px-4 py-3 font-medium whitespace-nowrap">
                    {tender.institutionName || "N/A"}
                  </td>
                  <td className="px-4 py-3">{tender.tender_number}</td>
                  <td className="px-4 py-3">{tender.description}</td>
                  <td className="px-4 py-3">
                    {new Date(tender.published_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {new Date(tender.closing_date).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">{tender.location}</td>
                  <td className="px-4 py-3">
                    {tender.tender_url ? (
                      <a
                        href={tender.tender_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Link
                      </a>
                    ) : (
                      <span className="text-gray-500 italic">No link</span>
                    )}

                  </td>

                  <td className="px-4 py-3">
                    {tender.tender_document_url ? (
                      <a
                        href={tender.tender_document_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="px-4 py-3">{tender.tender_category}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        tender.tender_status === "Open"
                          ? "bg-green-100 text-green-800"
                          : tender.tender_status === "Approved"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {tender.tender_status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex items-center justify-end relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
                      type="button"
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>

                    <div
                      className={`absolute z-10 top-full right-0 mt-2 w-40 bg-white divide-y divide-gray-100 rounded shadow border border-gray-200 ${
                        openDropdown === index ? "" : "hidden"
                      }`}
                    >
                      <ul className="py-1 text-sm text-gray-700">
                        <li>
                          <button
                            onClick={() => {
                              handleApproveTender(tender.tender_number);
                            }}
                            className="block w-full px-4 py-2 hover:bg-green-100"
                          >
                            ✅ Approve
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(tender.tender_number)}
                            className="block w-full px-4 py-2 hover:bg-red-100 text-red-700"
                          >
                            🗑️ Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
