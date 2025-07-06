"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";
import TableWithPagination from "../dashboard/TableWithPagination";

// Define the TenderType interface
export interface TenderType {
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
  tender_status: "Open" | "Closed";
  contact_person: string;
  contact_email: string;
  rowKey?: string;
}

const filters = {
  institutionName: ["Transnet", "CSIR", "OTHERS"],
  tender_category: [
    "Goods",
    "Services",
    "Goods & Services",
    "Siding Lease",
    "Port Slot / Terminal Concession",
    "RFQ (Request for Quotation)",
    "RFP (Request for Proposal)",
  ],
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
  const [checkedFilters, setCheckedFilters] = useState<number[]>([]);

  // ✅ FETCH tenders from backend
  const [tenders, setTenders] = useState<TenderType[]>([]);
  const [filteredTenders, setFilteredTenders] = useState<TenderType[]>([]);
  const [selected, setSelected] = useState({
    institutionName: filters.institutionName[0],
    tender_category: filters.tender_category[0],
    published_date_filter: filters.published_date_filter[0],
  });

  const applyFilters = (filters: number[]) => {
    if (filters.length === 0) {
      setFilteredTenders(tenders);
      return;
    }

    const filtered = tenders.filter((tender) => filters.includes(tender.id));
    setFilteredTenders(filtered);
  };

  const handleChange = (key: string, value: string) => {
    setSelected({ ...selected, [key]: value });
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleFilterChange = (filterId: number) => {
    let updatedFilters = [...checkedFilters];

    if (updatedFilters.includes(filterId)) {
      updatedFilters = updatedFilters.filter((id) => id !== filterId);
    } else {
      updatedFilters.push(filterId);
    }

    setCheckedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleRefresh = () => {
    setCheckedFilters([]);
    setFilteredTenders(tenders);
  };

  const [approvedTenders, setApprovedTenders] = useState<TenderType[]>([]);
  const [deletedTenders, setDeletedTenders] = useState<TenderType[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const handleApprove = (id: number) => {
    const tenderToApprove = tenders.find((tender) => tender.id === id);
    if (tenderToApprove) {
      setApprovedTenders((prev) => [...prev, tenderToApprove]);
      setTenders((prev) => prev.filter((tender) => tender.id !== id));
      setOpenDropdown(null);
      console.log("Approved tender ID:", id);
    }
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this tender?"
    );
    if (confirmed) {
      const tenderToDelete = tenders.find((tender) => tender.id === id);
      if (tenderToDelete) {
        setDeletedTenders((prev) => [...prev, tenderToDelete]);
        setTenders((prev) => prev.filter((tender) => tender.id !== id));
        setOpenDropdown(null);
        console.log("Deleted tender ID:", id);
      }
    }
  };

  // ✅ Fetch tenders from FastAPI on mount
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const res = await fetch("http://localhost:8000/tenders");
        const data = await res.json();
        setTenders(data);
        setFilteredTenders(data);
      } catch (error) {
        console.error("Error fetching tenders:", error);
      }
    };

    fetchTenders();
  }, []);

  // ✅ Dynamic search
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTenders(tenders);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredTenders(
        tenders.filter(
          (t) =>
            t.institutionName.toLowerCase().includes(term) ||
            t.tender_number.toLowerCase().includes(term) ||
            t.description.toLowerCase().includes(term) ||
            t.tender_category.toLowerCase().includes(term) ||
            t.location.toLowerCase().includes(term) ||
            t.contact_person.toLowerCase().includes(term) ||
            t.contact_email.toLowerCase().includes(term) ||
            t.tender_status.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm, tenders]);

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500 hover:shadow-lg transition">
      {/* ... Search & Filter UI (unchanged) ... */}
      {/* [ KEEP all your search input, dropdown button, checkboxes etc here ] */}
      {/* ... copy-paste your full existing JSX UI here ... */}

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2 py-3">
                Institution Name
              </th>
              <th scope="col" className="px-4 py-3">
                Tender Number
              </th>
              <th scope="col" className="px-20 py-3">
                Tender Description
              </th>
              <th scope="col" className="px-4 py-3">
                Closing Date
              </th>
              <th scope="col" className="px-4 py-3">
                Location
              </th>
              <th scope="col" className="px-4 py-3">
                Tender Document
              </th>
              <th scope="col" className="px-4 py-3">
                Tender Category
              </th>
              <th scope="col" className="px-4 py-3">
                Tender Status
              </th>
              <th scope="col" className="px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.length === 0 ? (
              <tr>
                <td
                  colSpan={12}
                  className="px-4 py-3 text-center text-gray-400"
                >
                  No tenders found.
                </td>
              </tr>
            ) : (
              filteredTenders.map((tender, index) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {tender.institutionName}
                  </td>
                  <td className="px-4 py-3">{tender.tender_number}</td>
                  <td className="px-4 py-3">{tender.description}</td>
                  <td className="px-4 py-3">{tender.closing_date}</td>
                  <td className="px-4 py-3">{tender.location}</td>
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
                            onClick={() => handleApprove(tender.id)}
                            className="w-full text-left px-4 py-2 hover:bg-green-100"
                          >
                            ✅ Approve
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleDelete(tender.id)}
                            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-100"
                          >
                            ❌ Delete
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
        <TableWithPagination />
      </div>
    </div>
  );
}
