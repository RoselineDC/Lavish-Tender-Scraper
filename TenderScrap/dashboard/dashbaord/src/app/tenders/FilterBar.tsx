"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { FcRefresh } from "react-icons/fc";
import { RefreshCcw } from 'lucide-react'; 
import { TfiFilter } from "react-icons/tfi";
import Refresh from "./Refresh";
import { mock } from "node:test";

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

  // store tender
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
      tender_document_url: "http://example.com/doc.pdf",
      tender_category: "Supplies",
      tender_type: "Open",
      tender_status: "Open",
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
        "https://www.transnet.net/tenders/rail-components.pdf",
      tender_category: "Engineering",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "Jane Smith",
      contact_email: "jane@example.com",
    },
    {
      id: 1,
      institutionName: "Dept of Education",
      tender_number: "3dw",
      description: "Supply of documentation",
      published_date: "2025-06-01",
      closing_date: "2025-06-30",
      briefing_date: "2025-06-10",
      location: "Durban",
      tender_document_url: "http://example.com/doc.pdf",
      tender_category: "Supplies",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "John Doe",
      contact_email: "john@example.com",
    },
    {
      id: 2,
      institutionName: "Transnet",
      tender_number: "12345",
      description: "Supply of Rail Components",
      published_date: "2025-06-10",
      closing_date: "2025-07-10",
      briefing_date: "2025-06-15",
      location: "cape town",
      tender_document_url:
        "https://www.transnet.net/tenders/rail-components.pdf",
      tender_category: "Engineering",
      tender_type: "Open",
      tender_status: "Open",
      contact_person: "Jane Smith",
      contact_email: "jane@example.com",
    },

    // Add more tenders as needed
  ]);

  const [selected, setSelected] = useState({
    institutionName: filters.institutionName[0],
    tender_category: filters.tender_category[0],
    published_date_filter: filters.published_date_filter[0],
  });

  const handleChange = (key: string, value: string) => {
    setSelected({ ...selected, [key]: value });
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // filter tenders based on search term
  const filteredTenders = tenders.filter((tender) =>
    `${tender.institutionName} ${tender.tender_number} ${tender.description} ${tender.tender_category} ${tender.location} ${tender.contact_person} ${tender.contact_email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  //handle refresh 
  const handleRefresh = () => {
    setTenders([...tenders]);
  }

  return (
          <div className="bg-white rounded-xl p-4 shadow-md  border-t-4 border-green-500 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
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
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required={true}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <button
                    id="refreshButton"
                    onClick={handleRefresh}
                    className=" md:w-auto flex items-center justify-center py-2 px-4 text-sm font-bold text-white "
                    title="Refresh the table"
                  >
                    <RefreshCcw className="mr-2" />
        Refresh
                    <Refresh />
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
                        className="absolute right-0 z-10 mt-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                      >
                        <h6 className="mb-3 text-sm font-medium text-white dark:text-white bg-gray-500 p-2">
                          Date Collected
                        </h6>
                        <ul className="space-y-2 text-sm">
                          {[
                            { id: "Today", label: "Today", count: 56 },
                            { id: "3 days ago", label: "3 days ago", count: 16 },
                            { id: "last week", label: "last week", count: 49 },
                          
                          ].map((brand) => (
                            <li key={brand.id} className="flex items-center">
                              <input
                                id={brand.id}
                                type="checkbox"
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                              />
                              <label
                                htmlFor={brand.id}
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                              >
                                {brand.label} ({brand.count})
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
                    <th scope="col" className="px-4 py-3">
                      Institution Name
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Tender Number
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Tender Description
                    </th>
                    {/* <th scope="col" className="px-4 py-3">
                      Published Date
                    </th> */}
                    <th scope="col" className="px-4 py-3">
                      Closing Date
                    </th>
                    {/* <th scope="col" className="px-4 py-3">
                      Briefing Date
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
                    {/* <th scope="col" className="px-4 py-3">
                      Tender Type
                    </th> */}
                    <th scope="col" className="px-4 py-3">
                      Tender Status
                    </th>
                    {/* <th scope="col" className="px-4 py-3">
                      Contact Person
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Contact Email
                    </th> */}
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
                        {/* <td className="px-4 py-3">{tender.published_date}</td> */}
                        {/* <td className="px-4 py-3">{tender.briefing_date}</td> */}
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
                        {/* <td className="px-4 py-3">{tender.tender_type}</td> */}
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
                        {/* <td className="px-4 py-3">
                        <div className="text-sm">
                          <p className="font-medium">{tender.contact_person}</p>
                          <p className="text-xs text-blue-600">{tender.contact_email}</p>
                        </div>
                      </td> */}
                        <td className="px-4 py-3 flex items-center justify-end">
                          <button
                            id={`tender-actions-dropdown-button-${index}`}
                            data-dropdown-toggle={`tender-actions-dropdown-${index}`}
                            className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              {/* <tr className="border-b dark:border-gray-700"> */}

              <nav
                className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Table navigation"
              >
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span className="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                <ul className="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      
      
   
  );
}
// pagination
// refresh function
// approve / decline functionl
