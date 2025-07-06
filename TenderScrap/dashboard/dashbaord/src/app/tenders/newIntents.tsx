// Corrected tender dashboard React component
"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";
import TableWithPagination from "../dashboard/TableWithPagination";
import Link from "next/link";

const colorMap = {
  blue: { border: "border-blue-900", bg: "bg-blue-900" },
  yellow: { border: "border-red-700", bg: "bg-red-700" },
  green: { border: "border-green-800", bg: "bg-green-800" },
};

const Card = ({ color, title, subtitle, footer, link }) => {
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

const NewIntents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [checkedFilters, setCheckedFilters] = useState([]);
  const [approvedTenders, setApprovedTenders] = useState([]);
  const [deletedTenders, setDeletedTenders] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

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
      tender_document_url: "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
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
      tender_document_url: "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
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
      tender_document_url: "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
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
      tender_document_url: "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
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
      description: "REQUEST TO SOURCE A SERVICE PROVIDER FOR WAPP MACHINE REPAIR",
      published_date: "2025-06-24",
      closing_date: "2025-07-07",
      briefing_date: "2025-06-26",
      location: "Bloemfontein",
      tender_document_url: "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
      tender_category: "Goods & Services",
      tender_type: "RFQ",
      tender_status: "Open",
      contact_person: "Naomi Jordaan",
      contact_email: "Naomi.Jordaan@transnet.net",
    },
  ]);

  const [filteredTenders, setFilteredTenders] = useState(tenders);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredTenders(tenders);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredTenders(
        tenders.filter((t) =>
          [
            t.institutionName,
            t.tender_number,
            t.description,
            t.tender_category,
            t.location,
            t.contact_person,
            t.contact_email,
            t.tender_status,
          ]
            .join(" ")
            .toLowerCase()
            .includes(term)
        )
      );
    }
  }, [searchTerm, tenders]);

  const handleFilterChange = (filterId) => {
    let updated = [...checkedFilters];
    if (updated.includes(filterId)) {
      updated = updated.filter((id) => id !== filterId);
    } else {
      updated.push(filterId);
    }
    setCheckedFilters(updated);
    setFilteredTenders(tenders.filter((t) => updated.includes(t.id)));
  };

  const handleRefresh = () => {
    setCheckedFilters([]);
    setFilteredTenders(tenders);
  };

  const handleDropdownToggle = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const handleApprove = (id) => {
    const approved = tenders.find((t) => t.id === id);
    if (approved) {
      setApprovedTenders((prev) => [...prev, approved]);
      setTenders((prev) => prev.filter((t) => t.id !== id));
      setOpenDropdown(null);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tender?")) {
      const deleted = tenders.find((t) => t.id === id);
      if (deleted) {
        setDeletedTenders((prev) => [...prev, deleted]);
        setTenders((prev) => prev.filter((t) => t.id !== id));
        setOpenDropdown(null);
      }
    }
  };

  return <div className="p-6">{/* ... your UI remains unchanged */}</div>;
};

export default NewIntents;
