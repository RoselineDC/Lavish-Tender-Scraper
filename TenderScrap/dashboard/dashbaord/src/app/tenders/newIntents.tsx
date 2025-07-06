"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { FcRefresh } from "react-icons/fc";
import { RefreshCcw } from "lucide-react";
import { TfiFilter } from "react-icons/tfi";
import { mock } from "node:test";
import TableWithPagination from "../dashboard/TableWithPagination";
import Link from "next/link";


// IMPORT SEARCH FROM DASHBOARD

// IMPORT FILTER BAR
import FilterBar from "@/app/tenders/FilterBar"; 

// Tailwind-compatible color map
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
    <div
      className={`bg-white rounded-xl shadow-md p-4 border-t-4 ${borderClass} hover:shadow-lg transition`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div
        className={`mt-2 text-xs ${bgClass} text-white rounded p-1 text-center`}
      >
        {footer}
      </div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};
export interface TenderType {
  id: number;
  institutionName: string;
  tender_number: string;
  description: string;
  published_date: string;      // ISO date string; use Date if you prefer
  closing_date: string;
  briefing_date: string;
  location: string;
  tender_document_url: string;
  tender_category: string;     // e.g. "Goods", "Engineering"
  tender_type: string;         // e.g. "Open", "RFQ", "RFP"
  tender_status: "Open" | "Closed";
  contact_person: string;
  contact_email: string;
  rowKey?: string;             // optional because it isn’t in every record
}


const NewIntents = () => {
   const [searchTerm, setSearchTerm] = useState("");
  
    const [showDropdown, setShowDropdown] = useState(false);
    const [checkedFilters, setCheckedFilters] = useState<number[]>([]);
  
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
        id: 1,
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
        id: 2,
        institutionName: "Transnet",
        tender_number: "12345",
        description: "Supply of Rail Components",
        published_date: "2025-06-10",
        closing_date: "2025-07-10",
        briefing_date: "2025-06-15",
        location: "cape town",
        tender_document_url:
          "https://transnetetenders.azurewebsites.net/Home/TenderDetails?Id=10013",
        tender_category: "Engineering",
        tender_type: "Open",
        tender_status: "Open",
        contact_person: "Jane Smith",
        contact_email: "jane@example.com",
      },
      {
        id: 4,
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
        contact_person: "Naomi Jordaan    Transnet Engineering   BFN",
        contact_email: "Naomi.Jordaan@transnet.net",
        rowKey: "99459",
      },
  
      // Add more tenders as needed
    ]);
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
    // const tenderDocumentUrl = `https://publishedetenders.blob.core.windows.net/publishedetenderscontainer/${rowKey}`;
    const [filteredTenders, setFilteredTenders] = useState(tenders);
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
  
    // filter tenders based on search term
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
  
    // HANDLE APPROVE delete
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
    const confirmed = window.confirm("Are you sure you want to delete this tender?");
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
  
    // Update filteredTenders whenever searchTerm or tenders change
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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TRANSNET TENDERS</h1>
      <div className="grid grid-cols-3 gap-4">
        <Card
          color="yellow"
          title="TRANSNET"
          subtitle="Transnet Tenders Report"
          footer="Active and Closed Tenders"
          link="/tenders"
        />
        <Card
          color="blue"
          title="CSIR"
          subtitle="CSIR Tenders Report"
          footer="Active and Closed Tenders"
          link="/documents"
        />
        <Card
          color="green"
          title="DOCUMENTS"
          subtitle="Documents Report"
          footer="Pending and Paid Documents"
          link="/documents"
        />
      </div>
      <div className="bg-white rounded-xl p-4 shadow-md  border-t-4 border-green-500 hover:shadow-lg transition ">
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
                    INSTITUTION
                  </h6>
                  <ul className="space-y-2 text-sm">
                    {tenders.map((tender) => (
                      <li key={tender.id} className="flex items-center">
                        <input
                          id={`filter-${tender.id}`}
                          type="checkbox"
                          checked={checkedFilters.includes(tender.id)}
                          onChange={() => handleFilterChange(tender.id)}
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          htmlFor={`filter-${tender.id}`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                        >
                          {tender.institutionName} ({tender.id})
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
              {/* <th scope="col" className="px-4 py-3">
                Actions
              </th> */}
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
                  {/* <td className="px-4 py-3 flex items-center justify-end relative">
                    <button
                      id={`tender-actions-dropdown-button-${index}`}
                      data-dropdown-toggle={`tender-actions-dropdown-${index}`}
                      onClick={() => handleDropdownToggle(index)} // optional toggle logic
                      className="inline-flex items-center p-0.5 text-sm font-medium text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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

                    {/* Dropdown Menu */
                    <div
                      id={`tender-actions-dropdown-${index}`}
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
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* <tr className="border-b dark:border-gray-700"> */}

        
       <TableWithPagination />
      </div>
    </div>
      
    </div>
  );
};

export default NewIntents;
