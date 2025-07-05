"use client";

import { useEffect, useState } from "react";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";

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
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [tenders, setTenders] = useState([
    {
      id: 1,
      institutionName: "Dept of Education",
      tender_number: "DOE123",
      description: "Supply of Stationery",
      published_date: "2025-06-01",
      closing_date: "2025-06-30",
      briefing_date: "2025-06-10",
      location: "Pretoria",
      tender_document_url:
        "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Supplies",
      tender_type: "Open",
      tender_status: "Closed",
      contact_person: "John Doe",
      contact_email: "john@example.com",
    },
    {
      id: 2,
      institutionName: "Transnet",
      tender_number: "TN1234",
      description: "Supply of Rail Components",
      published_date: "2025-06-10",
      closing_date: "2025-07-10",
      briefing_date: "2025-06-15",
      location: "Johannesburg",
      tender_document_url:
        "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Engineering",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "Jane Smith",
      contact_email: "jane@example.com",
    },
    {
      id: 3,
      institutionName: "Dept of Education",
      tender_number: "3dw",
      description: "Supply of documentation",
      published_date: "2025-06-01",
      closing_date: "2025-06-30",
      briefing_date: "2025-06-10",
      location: "Durban",
      tender_document_url:
        "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Supplies",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "John Doe",
      contact_email: "john@example.com",
    },
    {
      id: 4,
      institutionName: "Transnet",
      tender_number: "12345",
      description: "Supply of Rail Components",
      published_date: "2025-06-10",
      closing_date: "2025-07-10",
      briefing_date: "2025-06-15",
      location: "Cape Town",
      tender_document_url:
        "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Engineering",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "Jane Smith",
      contact_email: "jane@example.com",
    },
    {
      id: 5,
      institutionName: "TE",
      tender_number: "TE/2025/06/0019/99459/RFQ",
      description:
        "REQUEST FOR AUTHORITY TO OBTAIN BIDS VIA THE OPEN BID PROCESS: REQUEST TO SOURCE A SERVICE PROVIDER WITH ASSESSING, FAULTFINDING, STRIP AND QUOTE AND REPAIRING OF THE KATCHER WAPP MACHINE IN THE LOCOMOTIVE BUSINESS, BLOEMFONTEIN",
      published_date: "2025-06-24",
      closing_date: "2025-07-07",
      briefing_date: "2025-06-26",
      location: "LOCOMOTIVES BLOEMFONTEIN",
      tender_document_url:
        "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Goods & Services",
      tender_type: "RFQ",
      tender_status: "Open",
      contact_person: "Naomi Jordaan",
      contact_email: "Naomi.Jordaan@transnet.net",
    },
  ]);

  const [filteredTenders, setFilteredTenders] = useState(tenders);

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
            t.description.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm, tenders]);

  const applyFilters = (filters: number[]) => {
    if (filters.length === 0) {
      setFilteredTenders(tenders);
    } else {
      setFilteredTenders(tenders.filter((t) => filters.includes(t.id)));
    }
  };

  const handleFilterChange = (id: number) => {
    const updated = checkedFilters.includes(id)
      ? checkedFilters.filter((fid) => fid !== id)
      : [...checkedFilters, id];
    setCheckedFilters(updated);
    applyFilters(updated);
  };

  const handleRefresh = () => {
    setCheckedFilters([]);
    setSearchTerm("");
    setFilteredTenders(tenders);
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const handleApprove = (id: number) => {
    setTenders((prev) =>
      prev.map((t) => (t.id === id ? { ...t, tender_status: "Approved" } : t))
    );
    setFilteredTenders((prev) =>
      prev.map((t) => (t.id === id ? { ...t, tender_status: "Approved" } : t))
    );
    setOpenDropdown(null);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this tender?")) {
      setTenders((prev) => prev.filter((t) => t.id !== id));
      setFilteredTenders((prev) => prev.filter((t) => t.id !== id));
      setOpenDropdown(null);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-4 items-center">
        <input
          type="text"
          className="border px-3 py-1 rounded w-64"
          placeholder="Search tenders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleRefresh} className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded">
          <RefreshCcw size={16} /> Refresh
        </button>
        <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center gap-1 border px-3 py-1 rounded">
          <TfiFilter /> Filters
        </button>
      </div>

      {showDropdown && (
        <div className="mb-4 border p-2 rounded bg-gray-100">
          <strong>Institution Filters</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {tenders.map((tender) => (
              <label key={tender.id} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={checkedFilters.includes(tender.id)}
                  onChange={() => handleFilterChange(tender.id)}
                />
                {tender.institutionName} ({tender.id})
              </label>
            ))}
          </div>
        </div>
      )}

      <table className="min-w-full border text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-3 py-2">Institution</th>
            <th className="border px-3 py-2">Tender #</th>
            <th className="border px-3 py-2">Description</th>
            <th className="border px-3 py-2">Closing</th>
            <th className="border px-3 py-2">Location</th>
            <th className="border px-3 py-2">Doc</th>
            <th className="border px-3 py-2">Category</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTenders.length === 0 ? (
            <tr>
              <td colSpan={9} className="text-center py-4">
                No tenders found.
              </td>
            </tr>
          ) : (
            filteredTenders.map((tender, index) => (
              <tr key={tender.id} className="border-t">
                <td className="border px-3 py-2">{tender.institutionName}</td>
                <td className="border px-3 py-2">{tender.tender_number}</td>
                <td className="border px-3 py-2">{tender.description}</td>
                <td className="border px-3 py-2">{tender.closing_date}</td>
                <td className="border px-3 py-2">{tender.location}</td>
                <td className="border px-3 py-2">
                  <a href={tender.tender_document_url} className="text-blue-600 hover:underline" target="_blank">
                    View
                  </a>
                </td>
                <td className="border px-3 py-2">{tender.tender_category}</td>
                <td className="border px-3 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    tender.tender_status === "Open"
                      ? "bg-green-100 text-green-800"
                      : tender.tender_status === "Approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {tender.tender_status}
                  </span>
                </td>
                <td className="border px-3 py-2 relative">
                  <button
                    onClick={() => handleDropdownToggle(index)}
                    className="text-gray-600 hover:text-black"
                  >
                    ⋮
                  </button>
                  {openDropdown === index && (
                    <div className="absolute right-0 mt-1 bg-white border rounded shadow text-sm">
                      <button
                        onClick={() => handleApprove(tender.id)}
                        className="block w-full px-4 py-2 hover:bg-green-100 text-left"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDelete(tender.id)}
                        className="block w-full px-4 py-2 hover:bg-red-100 text-left text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
