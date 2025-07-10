"use client";

import { useState, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
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
  tender_status: "Open" | "Closed" | "Approved";
  contact_person: string;
  contact_email: string;
  rowKey?: string;
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

  // ✅ FETCH tenders from backend
  const [tenders, setTenders] = useState<TenderType[]>([]);

  // const [filteredTenders, setFilteredTenders] = useState<TenderType[]>([]);
  const [selected, setSelected] = useState({
    institutionName: filters.institutionName[0],
    tender_category: filters.tender_category[0],
    published_date_filter: filters.published_date_filter[0],
  });

  const applyFilters = (filters: string[]) => {
    if (filters.length === 0) {
      setFilteredTenders(tenders);
      return;
    }

    const filtered = tenders.filter((tender) =>
      filters.includes(tender.tender_category)
    );
    setFilteredTenders(filtered);
  };

  const handleChange = (key: string, value: string) => {
    setSelected({ ...selected, [key]: value });
  };

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const handleFilterChange = (category: string) => {
    let updatedFilters = [...checkedFilters];

    if (updatedFilters.includes(category)) {
      updatedFilters = updatedFilters.filter((c) => c !== category);
    } else {
      updatedFilters.push(category);
    }

    setCheckedFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const handleRefresh = async () => {
    console.log("Refresh button clicked"); // Check button works

    try {
      setCheckedFilters([]);
      setSearchTerm("");

      // Trigger scraper
      const res = await fetch("http://localhost:8000/refresh-tenders", {
        method: "POST",
      });
      if (!res.ok) throw new Error("Failed to trigger scraper");

      console.log("Scraper triggered successfully");

      await new Promise((resolve) => setTimeout(resolve, 10000)); // wait 10s

      const tendersRes = await fetch("http://localhost:8000/tenders");
      const data = await tendersRes.json();

      console.log("Fetched tenders from backend:", data); // See what data is fetched

      if (!Array.isArray(data)) throw new Error("Expected array of tenders");

      setApprovedTenders(data);
      setFilteredTenders(data);
    } catch (err) {
      console.error("Error refreshing tenders:", err);
    }
  };

  const [approvedTenders, setApprovedTenders] = useState<TenderType[]>([]);
  const [deletedTenders, setDeletedTenders] = useState<TenderType[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };
  const handleApprove = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:8000/tenders/${id}/approve`,
        {
          method: "PATCH",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to approve tender");
      }

      const tenderToApprove = tenders.find((tender) => tender.id === id);
      if (tenderToApprove) {
        const updatedTender: TenderType = {
          ...tenderToApprove,
          tender_status: "Approved", // now a valid value
        };

        setApprovedTenders((prev: TenderType[]) => [...prev, updatedTender]);
        setTenders((prev: TenderType[]) => prev.filter((t) => t.id !== id));
      }

      setOpenDropdown(null);
      console.log("Approved tender ID:", id);
    } catch (error) {
      console.error("Error approving tender:", error);
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
            (t.institutionName?.toLowerCase() || "").includes(term) ||
            (t.tender_number?.toLowerCase() || "").includes(term) ||
            (t.description?.toLowerCase() || "").includes(term) ||
            (t.tender_category?.toLowerCase() || "").includes(term) ||
            (t.location?.toLowerCase() || "").includes(term) ||
            (t.contact_person?.toLowerCase() || "").includes(term) ||
            (t.contact_email?.toLowerCase() || "").includes(term) ||
            (t.tender_status?.toLowerCase() || "").includes(term)
        )
      );
    }
  }, [searchTerm, tenders]);
  // DISPLAY CLOSSING EARLY FIRTS
  const [closingDateSortAsc, setClosingDateSortAsc] = useState(true);

  // const sortedTenders = [...filteredTenders].sort((a, b) => {
  //   const dateA = new Date(a.closing_date);
  //   const dateB = new Date(b.closing_date);
  //   return closingDateSortAsc
  //     ? dateA.getTime() - dateB.getTime()
  //     : dateB.getTime() - dateA.getTime();
  // });
  // BY PUBLISHED DAT
  const sortedTenders = [...filteredTenders].sort((a, b) => {
  const parseDate = (dateStr: string) => new Date(dateStr.replace(" ", "T"));

  const dateA = parseDate(a.published_date);
  const dateB = parseDate(b.published_date);

  return dateB.getTime() - dateA.getTime(); // latest first
});


  return (
    <div className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500 hover:shadow-lg transition">
      {/* ... Search & Filter UI (unchanged) ... */}
      {/* [ KEEP all your search input, dropdown button, checkboxes etc here ] */}
      {/* ... copy-paste your full existing JSX UI here ... */}
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
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              id="refreshButton"
              onClick={handleRefresh}
              className=" md:w-auto flex items-center justify-center py-2 px-4 text-sm font-bold text-white focus:outline-none bg-green-500 rounded-lg border hover:bg-green-900 hover:text-primary-700"
              type="button"
              title="Refresh the table"
            >
              <RefreshCcw className="mr-2" />
              Refresh
            </button>

            <div className="relative inline-block text-left w-full md:w-auto">
              <button
                id="filterDropdownButton"
                onClick={toggleDropdown}
                className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <TfiFilter className="mr-2" />
                Filter
                <svg
                  className="-mr-1 ml-1.5 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
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
                <div
                  id="filterDropdown"
                  className="absolute right-0 z-10 mt-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-green-700 "
                >
                  <h6 className="mb-3 text-sm font-medium text-white dark:text-white p-2 bg-green-900 rounded-lg border hover:bg-green-900 hover:text-primary-700">
                    CATEGORY
                  </h6>
                  <ul className="space-y-2 text-sm">
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
                          className="ml-2 text-sm font-medium text-gray-900"
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
      </div>

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
                published Date
              </th>
              <th
                scope="col"
                className="px-4 py-3 cursor-pointer"
                onClick={() => setClosingDateSortAsc(!closingDateSortAsc)}
              >
                Closing Date {closingDateSortAsc ? "↑" : "↓"}
              </th>
              {/* <th
                scope="col"
                className="px-4 py-3 cursor-pointer"
                onClick={() => setClosingDateSortAsc(!closingDateSortAsc)}
              >
                Closing Date {closingDateSortAsc ? "↑" : "↓"}
              </th> */}
             
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
              filteredTenders.map((tender: { institutionName: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tender_number: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; published_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; closing_date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tender_document_url: string | undefined; tender_category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; tender_status: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; id: number; }, index: Key | null | undefined) => (
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {tender.institutionName}
                  </td>
                  <td className="px-4 py-3">{tender.tender_number}</td>
                  <td className="px-4 py-3">{tender.description}</td>
                  <td className="px-4 py-3">{tender.published_date}</td>
                    
                 
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
