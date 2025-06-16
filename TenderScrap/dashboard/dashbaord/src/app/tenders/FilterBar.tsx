"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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
  const [selected, setSelected] = useState({
    institutionName: filters.institutionName[0],
    tender_category: filters.tender_category[0],
    published_date_filter: filters.published_date_filter[0],
  });

  const handleChange = (key: string, value: string) => {
    setSelected({ ...selected, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center px-4 py-2 bg-white border rounded-md shadow-sm">
      {/* Actions Button */}
      <button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-100 text-sm font-medium">
        <FaChevronDown className="text-xs" />
        Actions
      </button>

      {/* Dropdowns */}
      {Object.entries(filters).map(([key, options]) => (
        <select
          key={key}
          value={selected[key as keyof typeof selected]}
          onChange={(e) => handleChange(key, e.target.value)}
          className="text-sm text-gray-700 border-b outline-none bg-transparent appearance-none pr-6"
        >
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
      ))}
    </div>
  );
}
