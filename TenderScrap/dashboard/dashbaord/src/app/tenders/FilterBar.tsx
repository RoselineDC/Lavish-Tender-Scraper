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
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-1/2">
        <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 
                    4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                />
                </svg>
            </div>
            <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
                required
            />
            </div>
        </form>
        </div>
    </div>
    

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
