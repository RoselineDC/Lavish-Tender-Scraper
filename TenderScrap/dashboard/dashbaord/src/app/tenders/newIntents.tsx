"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";
import TableWithPagination from "../dashboard/TableWithPagination";
import Link from "next/link";

const colorMap: Record<string, { border: string; bg: string }> = {
  blue: { border: "border-blue-900", bg: "bg-blue-900" },
  yellow: { border: "border-red-700", bg: "bg-red-700" },
  green: { border: "border-green-800", bg: "bg-green-800" },
};

const Card = ({
  color,
  title,
  subtitle,
  footer,
  link,
}: {
  color: string;
  title: string;
  subtitle: string;
  footer: string;
  link?: string;
}) => {
  const borderClass = colorMap[color]?.border || "border-gray-500";
  const bgClass = colorMap[color]?.bg || "bg-gray-500";

  const content = (
    <div className={`bg-white rounded-xl shadow-md p-4 border-t-4 ${borderClass} hover:shadow-lg transition`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div className={`mt-2 text-xs ${bgClass} text-white rounded p-1 text-center`}>{footer}</div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};

export interface TenderType {
  id: number;
  institutionName: string;
  tender_number: string;
  description: string;
  published_date: string;
  closing_date: string;
  briefing_date: string;
  location: string;
  tender_url?: string;
  tender_document_url: string;
  tender_category: string;
  tender_type: string;
  tender_status: "Open" | "Closed";
  contact_person: string;
  contact_email: string;
  rowKey?: string;
}

const NewIntents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [approvedTenders, setApprovedTenders] = useState<TenderType[]>([]);
  const [filteredTenders, setFilteredTenders] = useState<TenderType[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/tenders/approved")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch tenders");
        return res.json();
      })
      .then((data) => {
        setApprovedTenders(data);
        setFilteredTenders(data); // Initially show all approved tenders
      })
      .catch((err) => {
        console.error("Error fetching tenders:", err);
      });
  }, []);

  useEffect(() => {
    let filtered = approvedTenders;

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (t) =>
          (t.institutionName?.toLowerCase() || "").includes(term) ||
          (t.tender_number?.toLowerCase() || "").includes(term) ||
          (t.description?.toLowerCase() || "").includes(term) ||
          (t.tender_category?.toLowerCase() || "").includes(term) ||
          (t.location?.toLowerCase() || "").includes(term) ||
          (t.contact_person?.toLowerCase() || "").includes(term) ||
          (t.contact_email?.toLowerCase() || "").includes(term) ||
          (t.tender_status?.toLowerCase() || "").includes(term)
      );
    }

    if (checkedCategories.length > 0) {
      filtered = filtered.filter((t) =>
        checkedCategories.includes(t.tender_category)
      );
    }

    setFilteredTenders(filtered);
  }, [searchTerm, checkedCategories, approvedTenders]);

  const categories = Array.from(
    new Set(approvedTenders.map((t) => t.tender_category).filter(Boolean))
  );

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleRefresh = () => {
    setSearchTerm("");
    setCheckedCategories([]);
    setFilteredTenders(approvedTenders);
  };

  const handleCategoryToggle = (category: string) => {
    let updatedCategories = [...checkedCategories];
    if (updatedCategories.includes(category)) {
      updatedCategories = updatedCategories.filter((c) => c !== category);
    } else {
      updatedCategories.push(category);
    }
    setCheckedCategories(updatedCategories);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TRANSNET TENDERS</h1>

      <div className="grid grid-cols-3 gap-4">
        <Card
          color="yellow"
          title="TRANSNET"
          subtitle="Transnet Tenders Report"
          footer="Active and Closed Tenders"
          link="/tenders/approved"
        />
        <Card
          color="blue"
          title="CSIR"
          subtitle="CSIR Tenders Report"
          footer="Active and Closed Tenders"
          link="/cs"
        />
        <Card
          color="green"
          title="DOCUMENTS"
          subtitle="Documents Report"
          footer="Pending and Paid Documents"
          link="/documents"
        />
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500 hover:shadow-lg transition mt-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">TRANSNET APPROVED TENDERS</h2>
          <p className="text-gray-600">View and manage Approved tenders for Transnet</p>
        </div>

        {/* Search & Filter UI */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search tenders"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full pl-10 p-2"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center py-2 px-4 text-sm font-bold text-white bg-green-500 rounded-lg border hover:bg-green-900"
              type="button"
              title="Refresh the table"
            >
              <RefreshCcw className="mr-2" />
              Refresh
            </button>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              >
                <TfiFilter className="mr-2" />
                Filter
                <FaChevronDown className="ml-1" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 z-10 mt-2 w-48 p-3 bg-white rounded-lg shadow">
                  <h6 className="mb-3 text-sm font-medium text-gray-900 border-b pb-2">TENDER CATEGORY</h6>
                  <ul className="space-y-2 text-sm max-h-60 overflow-auto">
                    {categories.map((category) => (
                      <li key={category} className="flex items-center">
                        <input
                          id={`filter-${category}`}
                          type="checkbox"
                          checked={checkedCategories.includes(category)}
                          onChange={() => handleCategoryToggle(category)}
                          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label htmlFor={`filter-${category}`} className="ml-2 text-sm text-gray-900">
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

        {/* Display Tenders */}
        {approvedTenders.length === 0 ? (
          <div className="text-center text-gray-400 py-6">
            No tenders have been approved yet.
          </div>
        ) : filteredTenders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-2 py-3">Institution Name</th>
                  <th className="px-4 py-3">Tender Number</th>
                  <th className="px-20 py-3">Tender Description</th>
                  <th className="px-4 py-3">Closing Date</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3"> Tender Link</th>
                    <th className="px-4 py-3"> Tender Document</th>                
                  <th className="px-4 py-3">Tender Category</th>
                  <th className="px-4 py-3">Tender Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTenders.map((tender) => (
                  <tr key={tender.id} className="border-b">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">
                      {tender.institutionName}
                    </td>
                    <td className="px-4 py-3">{tender.tender_number}</td>
                    <td className="px-4 py-3">{tender.description}</td>
                    <td className="px-4 py-3">{tender.closing_date}</td>
                    <td className="px-4 py-3">{tender.location}</td>
                    <td className="px-4 py-3">
                    {tender.tender_url?.trim() ? (
                      <a
                        href={tender.tender_url.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Link
                      </a>
                    ) : (
                      <span className="text-red-500 font-bold">No link</span>
                    )}
                  </td>
                    <td className="px-4 py-3">
                      <a
                        href={tender.tender_document_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    </td>
                    <td className="px-4 py-3">{tender.tender_category}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          tender.tender_status === "Open"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {tender.tender_status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <TableWithPagination />
          </div>
        ) : (
          <div className="text-center text-gray-400 py-6">
            No tenders match your search or selected categories.
          </div>
        )}
      </div>
    </div>
  );
};

export default NewIntents;
