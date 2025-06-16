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
    <>
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
    {/* Start coding here */}
    <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
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
                required=""
              />
            </div>
          </form>
        </div>
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          <button
            type="button"
            className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              className="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add product
          </button>
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <button
              id="actionsDropdownButton"
              data-dropdown-toggle="actionsDropdown"
              className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="-ml-1 mr-1.5 w-5 h-5"
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
              Actions
            </button>
            <div
              id="actionsDropdown"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="actionsDropdownButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mass Edit
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Delete all
                </a>
              </div>
            </div>
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="h-4 w-4 mr-2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
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
            <div
              id="filterDropdown"
              className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
            >
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Choose brand
              </h6>
              <ul
                className="space-y-2 text-sm"
                aria-labelledby="filterDropdownButton"
              >
                <li className="flex items-center">
                  <input
                    id="apple"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="apple"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Apple (56)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="fitbit"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="fitbit"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Microsoft (16)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="razor"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="razor"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Razor (49)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="nikon"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="nikon"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    Nikon (12)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="benq"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="benq"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                  >
                    BenQ (74)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-3">
                Product name
              </th>
              <th scope="col" className="px-4 py-3">
                Category
              </th>
              <th scope="col" className="px-4 py-3">
                Brand
              </th>
              <th scope="col" className="px-4 py-3">
                Description
              </th>
              <th scope="col" className="px-4 py-3">
                Price
              </th>
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac 27"
              </th>
              <td className="px-4 py-3">PC</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">300</td>
              <td className="px-4 py-3">$2999</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="apple-imac-27-dropdown-button"
                  data-dropdown-toggle="apple-imac-27-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="apple-imac-27-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="apple-imac-27-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac 20"
              </th>
              <td className="px-4 py-3">PC</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">200</td>
              <td className="px-4 py-3">$1499</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="apple-imac-20-dropdown-button"
                  data-dropdown-toggle="apple-imac-20-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="apple-imac-20-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="apple-imac-20-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iPhone 14
              </th>
              <td className="px-4 py-3">Phone</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">1237</td>
              <td className="px-4 py-3">$999</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="apple-iphone-14-dropdown-button"
                  data-dropdown-toggle="apple-iphone-14-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="apple-iphone-14-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="apple-iphone-14-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iPad Air
              </th>
              <td className="px-4 py-3">Tablet</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">4578</td>
              <td className="px-4 py-3">$1199</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="apple-ipad-air-dropdown-button"
                  data-dropdown-toggle="apple-ipad-air-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="apple-ipad-air-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="apple-ipad-air-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Xbox Series S
              </th>
              <td className="px-4 py-3">Gaming/Console</td>
              <td className="px-4 py-3">Microsoft</td>
              <td className="px-4 py-3">56</td>
              <td className="px-4 py-3">$299</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="xbox-series-s-dropdown-button"
                  data-dropdown-toggle="xbox-series-s-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="xbox-series-s-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="xbox-series-s-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                PlayStation 5
              </th>
              <td className="px-4 py-3">Gaming/Console</td>
              <td className="px-4 py-3">Sony</td>
              <td className="px-4 py-3">78</td>
              <td className="px-4 py-3">$799</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="playstation-5-dropdown-button"
                  data-dropdown-toggle="playstation-5-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="playstation-5-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="playstation-5-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Xbox Series X
              </th>
              <td className="px-4 py-3">Gaming/Console</td>
              <td className="px-4 py-3">Microsoft</td>
              <td className="px-4 py-3">200</td>
              <td className="px-4 py-3">$699</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="xbox-series-x-dropdown-button"
                  data-dropdown-toggle="xbox-series-x-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="xbox-series-x-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="xbox-series-x-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch SE
              </th>
              <td className="px-4 py-3">Watch</td>
              <td className="px-4 py-3">Apple</td>
              <td className="px-4 py-3">657</td>
              <td className="px-4 py-3">$399</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="apple-watch-se-dropdown-button"
                  data-dropdown-toggle="apple-watch-se-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="apple-watch-se-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="apple-watch-se-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                NIKON D850
              </th>
              <td className="px-4 py-3">Photo</td>
              <td className="px-4 py-3">Nikon</td>
              <td className="px-4 py-3">465</td>
              <td className="px-4 py-3">$599</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="nikon-d850-dropdown-button"
                  data-dropdown-toggle="nikon-d850-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="nikon-d850-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="nikon-d850-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Monitor BenQ EX2710Q
              </th>
              <td className="px-4 py-3">TV/Monitor</td>
              <td className="px-4 py-3">BenQ</td>
              <td className="px-4 py-3">354</td>
              <td className="px-4 py-3">$499</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id="benq-ex2710q-dropdown-button"
                  data-dropdown-toggle="benq-ex2710q-dropdown"
                  className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
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
                <div
                  id="benq-ex2710q-dropdown"
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="benq-ex2710q-dropdown-button"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Show
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete
                    </a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
</section>
<section className="jCHKuJ3G7rklx_LiAfbf zlFmyfujKXCLCPyPEOIS _Masco_7wTrd3Tc0qjp9 hao1XUiLwm82uRmdZ0qR">
  <div className="RV8RoaI_SlEMC5CEQ3ms _6pYhw7LeGpRBmzb5z1I veFXkDzfJN473U3ycrV8 WCuT1fik3CBnD3pdfvW6">
    {/* Start coding here */}
    <div className="yjGyQxv8jnYk9_MGMqLN _cpMMPjFQqjJu4i0Puod QYPW4nl6nHaIbrtaXf4h Z_eHUjNDQejPt5Nblzcx lpxrkHwpsT01ba8JsNfF Odj8n83y7sKz4V0UfIxN">
      <div className="kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR df5l6rJbzHKk__BrH8tK neyUwteEn7DOg9pBSJJE _T15kfOPGkvwZnqhqKce __Iv72FadFpzwcpFl5_5 GHTkY6_vcDBrE7v2PrzJ oMWvLBjtaY1vTdo7u3vN iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy">
        <div className="jCISvWkW5oStPH6Wrb_H kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck">
          <h5 className="a0Ed69aMSu0vgf4oysz0 LYMps1kO2vF8HBymW3az">
            Flowbite Products
          </h5>
          <div className="rZZ58B08lxezTX7iNgGT _A6LflweZRUwrcL6M2Tk">
            6,560 results
          </div>
          <div data-tooltip-target="results-tooltip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph rZZ58B08lxezTX7iNgGT"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="BWabIWdbZ5qWNbPXxuBc">More info</span>
          </div>
          <div
            id="results-tooltip"
            role="tooltip"
            className="iZ8W30HPRQAuO6al90LU _v8hjA9ct_v6OhSQD7fC ADhvqXKjAizJqFADNpvd MQMN74ivNmI6x68DZajA zhRMeqbg7JsftloqW_W6 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk wP9HMsqy6b96l2HBRbgb M4SAv60iaayh2_Cd_QyF KB__y25H2tVACg2mjb4C J_ldU2ISOuzV8yupuBpE _Qk4_E9_iLqcHsRZZ4ge ltPMSn_g3PKyqeS8vmZk Usqns9w__onp5CWoXDJ0 _t2wg7hRcyKsNN8CSSeU AtHBVur__RVIv6BHiI4a p3NM1OB16vfk_yD2siUB"
            data-popper-placement="bottom"
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              margin: 0,
              transform: "translate(177px, 44px)"
            }}
          >
            Showing 1-10 of 6,560 results
            <div
              className="POMYoNHqN8pOsNYFYFHr"
              data-popper-arrow=""
              style={{
                position: "absolute",
                left: 0,
                transform: "translate(107px, 0px)"
              }}
            />
          </div>
        </div>
        <div className="jCISvWkW5oStPH6Wrb_H kqgYncRJQ7spwKfig6It mEW8N_IWWgcKyai2WgEV neyUwteEn7DOg9pBSJJE dUL_Hau4P0N4IUPoUXEX B1cgbA6Bb4LQo0qFJKck">
          <button
            type="button"
            className="jCISvWkW5oStPH6Wrb_H v4BixjmUnwud_Hihloof kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei wP9HMsqy6b96l2HBRbgb bg-primary-700 hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL focus:ring-primary-300 _A6LflweZRUwrcL6M2Tk _Qk4_E9_iLqcHsRZZ4ge MxG1ClE4KPrIvlL5_Q5x MQMN74ivNmI6x68DZajA zhRMeqbg7JsftloqW_W6 dark:bg-primary-600 dark:hover:bg-primary-700 qHIOIw8TObHgD3VvKa5x dark:focus:ring-primary-800"
          >
            <svg
              className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 _gmxfZ2BpOHxa6nWwqBB"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Add new product
          </button>
          <button
            type="button"
            className="jCISvWkW5oStPH6Wrb_H v4BixjmUnwud_Hihloof kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
          >
            <svg
              className="_gmxfZ2BpOHxa6nWwqBB hDwBtOhIf4ji_OJlxtQ5 Har7ksLdj_gpHuS5dC3P"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              stroke="currentColor"
              viewBox="0 0 12 13"
              aria-hidden="true"
            >
              <path d="M1 2V1h10v3H1V2Zm0 4h5v6H1V6Zm8 0h2v6H9V6Z" />
            </svg>
            Manage Columns
          </button>
        </div>
      </div>
      <div className="kqgYncRJQ7spwKfig6It _QPbmfdkSA0FyYKJjf12 df5l6rJbzHKk__BrH8tK __9yfFbPJuEYWBMy4kA9 _8xnBSvtrAxp8wF9yowC _T15kfOPGkvwZnqhqKce oMWvLBjtaY1vTdo7u3vN iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy">
        <div className="pwHzQSmcpCtRGfVoeOdG SZQeSiboYZ5XUz34Uale">
          <button
            id="actionsDropdownButton"
            data-dropdown-toggle="actionsDropdown"
            className="jCISvWkW5oStPH6Wrb_H v4BixjmUnwud_Hihloof kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei zhRMeqbg7JsftloqW_W6 veFXkDzfJN473U3ycrV8 MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
            type="button"
          >
            <svg
              className="wikskPDYEBn0nlvDss8h rd9r00vboqD3jj2DVT_m eUuXwBkW5W4__eatjSfd RRXFBumaW2SHdseZaWm6"
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
            Actions
          </button>
          <div
            id="actionsDropdown"
            className="_v8hjA9ct_v6OhSQD7fC I1YcaBmlNzBwJ5EiwKYF yjGyQxv8jnYk9_MGMqLN YPSoR6AXtPgkmylUmcbT FQJBolKGENZMnnBWg95Y _JhddqALGzNXF3JHzSyG lhxYQ_2y3sYNN3W1V_3q _t2wg7hRcyKsNN8CSSeU WoQqugRcWrYbmsWhxCUr j2x7_17hqRVmwte_tWFa"
            data-popper-placement="bottom"
            style={{
              position: "absolute",
              inset: "0px auto auto 0px",
              margin: 0,
              transform: "translate(117px, 157px)"
            }}
          >
            <ul
              className="e6xSuaqE4UvMawjVXuq_ MxG1ClE4KPrIvlL5_Q5x jJJfWn8GV_ODBSwRp2nH mEiJmUhVeO0zHYjQchDB"
              aria-labelledby="actionsDropdownButton"
            >
              <li>
                <a
                  href="#"
                  className="ttxtqsLWp2pFRX8yUvWd zhRMeqbg7JsftloqW_W6 veFXkDzfJN473U3ycrV8 DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 DTyjKhtXBNaebZa5L0l9"
                >
                  Mass Edit
                </a>
              </li>
            </ul>
            <div className="e6xSuaqE4UvMawjVXuq_">
              <a
                href="#"
                className="ttxtqsLWp2pFRX8yUvWd zhRMeqbg7JsftloqW_W6 veFXkDzfJN473U3ycrV8 MxG1ClE4KPrIvlL5_Q5x jJJfWn8GV_ODBSwRp2nH DpMPWwlSESiYA8EE1xKM xotVay0PVtR3gElm6ql5 mEiJmUhVeO0zHYjQchDB DTyjKhtXBNaebZa5L0l9"
              >
                Delete all
              </a>
            </div>
          </div>
        </div>
        <div className="i0EfZzmTLElZVOble53D _i9FbfrBNYoFTPUHnAds tczQgPamciYPsV_Bd0wD jCISvWkW5oStPH6Wrb_H jtAEAmTYcbMMu_bzudpA Nqfh9X2Rexp2qnMJ2IPa">
          <div className="jCISvWkW5oStPH6Wrb_H">
            <label htmlFor="brand" className="BWabIWdbZ5qWNbPXxuBc">
              Brand
            </label>
            <select
              id="brand"
              className="ttxtqsLWp2pFRX8yUvWd _gKcj49wZgnwx1LpcJi6 psGSaoX3vEaTuVjCVZ1M jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x K1PPCJwslha8GUIvV_Cr bHPiH67mBn1_jgR3TrvW cMZ6g1VlTxVbLLDgApBS DdH0nfuxX7trZkxwQjEs pxHuWvF853ck68OLN6ef rSfGuZzTLmhPzNHMO1jb eCx_6PNzncAD5yo7Qcic JeVit_1klYopnNwu_8oy qHIOIw8TObHgD3VvKa5x W83fbcqTDAidAC5iVTZ9 R9wivzcaVXAMWcTVd6_t peer"
            >
              <option selected="">Brand</option>
              <option value="purple">Samsung</option>
              <option value="primary">Apple</option>
              <option value="pink">Pink</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="jCISvWkW5oStPH6Wrb_H">
            <label htmlFor="price" className="BWabIWdbZ5qWNbPXxuBc">
              Price
            </label>
            <select
              id="price"
              className="ttxtqsLWp2pFRX8yUvWd _gKcj49wZgnwx1LpcJi6 psGSaoX3vEaTuVjCVZ1M jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x K1PPCJwslha8GUIvV_Cr bHPiH67mBn1_jgR3TrvW cMZ6g1VlTxVbLLDgApBS DdH0nfuxX7trZkxwQjEs pxHuWvF853ck68OLN6ef rSfGuZzTLmhPzNHMO1jb eCx_6PNzncAD5yo7Qcic JeVit_1klYopnNwu_8oy qHIOIw8TObHgD3VvKa5x W83fbcqTDAidAC5iVTZ9 R9wivzcaVXAMWcTVd6_t peer"
            >
              <option selected="">Price</option>
              <option value="below-100">$ 1-100</option>
              <option value="below-500">$ 101-500</option>
              <option value="below-1000">$ 501-1000</option>
              <option value="over-1000">$ 1001+</option>
            </select>
          </div>
          <div className="jCISvWkW5oStPH6Wrb_H">
            <label htmlFor="category" className="BWabIWdbZ5qWNbPXxuBc">
              Category
            </label>
            <select
              id="category"
              className="ttxtqsLWp2pFRX8yUvWd _gKcj49wZgnwx1LpcJi6 psGSaoX3vEaTuVjCVZ1M jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x K1PPCJwslha8GUIvV_Cr bHPiH67mBn1_jgR3TrvW cMZ6g1VlTxVbLLDgApBS DdH0nfuxX7trZkxwQjEs pxHuWvF853ck68OLN6ef rSfGuZzTLmhPzNHMO1jb eCx_6PNzncAD5yo7Qcic JeVit_1klYopnNwu_8oy qHIOIw8TObHgD3VvKa5x W83fbcqTDAidAC5iVTZ9 R9wivzcaVXAMWcTVd6_t peer"
            >
              <option selected="">Category</option>
              <option value="pc">PC</option>
              <option value="phone">Phone</option>
              <option value="tablet">Tablet</option>
              <option value="console">Gaming/Console</option>
            </select>
          </div>
          <div className="jCISvWkW5oStPH6Wrb_H">
            <label htmlFor="color" className="BWabIWdbZ5qWNbPXxuBc">
              Color
            </label>
            <select
              id="color"
              className="ttxtqsLWp2pFRX8yUvWd _gKcj49wZgnwx1LpcJi6 psGSaoX3vEaTuVjCVZ1M jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x K1PPCJwslha8GUIvV_Cr bHPiH67mBn1_jgR3TrvW cMZ6g1VlTxVbLLDgApBS DdH0nfuxX7trZkxwQjEs pxHuWvF853ck68OLN6ef rSfGuZzTLmhPzNHMO1jb eCx_6PNzncAD5yo7Qcic JeVit_1klYopnNwu_8oy qHIOIw8TObHgD3VvKa5x W83fbcqTDAidAC5iVTZ9 R9wivzcaVXAMWcTVd6_t peer"
            >
              <option selected="">Color</option>
              <option value="purple">Purple</option>
              <option value="primary">primary</option>
              <option value="pink">Pink</option>
              <option value="green">Green</option>
            </select>
          </div>
        </div>
      </div>
      <div className="m8Cxc_1gLSswmDjYzFl2">
        <table className="jCISvWkW5oStPH6Wrb_H MxG1ClE4KPrIvlL5_Q5x PJD8Rj8ZmfldJGExe8Fx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
          <thead className="XklWzT8y98pp042XEQp4 EwTRjGOFYqbTj4bWVQmN jCHKuJ3G7rklx_LiAfbf _t2wg7hRcyKsNN8CSSeU">
            <tr>
              <th scope="col" className="iHyrYta0Jcy0_7nMWLK7">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-all"
                    type="checkbox"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-all"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9"
              >
                <span className="BWabIWdbZ5qWNbPXxuBc">
                  Expand/Collapse Row
                </span>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 JhsRDlJqN07BrM2s3Hlk"
              >
                Product
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 cBGymN_xgxwSEKGPn8_s"
              >
                Category
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 Wy4wJeQDjccafEQZ8JCn"
              >
                Brand
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 Wy4wJeQDjccafEQZ8JCn"
              >
                Price
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 Wy4wJeQDjccafEQZ8JCn"
              >
                Stock
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _Yq7LA8h2Zt2sj9Q5VFi"
              >
                Total Sales
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
              <th
                scope="col"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 zexhGmIOcV_zsvZlKUcx"
              >
                Status
                <svg
                  className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph P_IkL3rPmLoJg_v9DE3m ADhvqXKjAizJqFADNpvd"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                  />
                </svg>
              </th>
            </tr>
          </thead>
          <tbody data-accordion="table-column">
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-0"
              data-accordion-target="#table-column-body-0"
              aria-expanded="false"
              aria-controls="table-column-body-0"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Apple iMac 27"
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">PC</td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Apple
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $2999
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                200
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                245
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="_uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H j2x7_17hqRVmwte_tWFa"
              id="table-column-body-0"
              aria-labelledby="table-column-header-0"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-1"
              data-accordion-target="#table-column-body-1"
              aria-expanded="false"
              aria-controls="table-column-body-1"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Apple iMac 20"
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">PC</td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Apple
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $1499
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                1237
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                2000
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-1"
              aria-labelledby="table-column-header-1"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-2"
              data-accordion-target="#table-column-body-2"
              aria-expanded="false"
              aria-controls="table-column-body-2"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Apple iPhone 14
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Phone
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Apple
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $999
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                300
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                466
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-2"
              aria-labelledby="table-column-header-2"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-3"
              data-accordion-target="#table-column-body-3"
              aria-expanded="false"
              aria-controls="table-column-body-3"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Apple iPad Air
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Tablet
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Apple
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $1199
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                4576
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                90
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-3"
              aria-labelledby="table-column-header-3"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-4"
              data-accordion-target="#table-column-body-4"
              aria-expanded="false"
              aria-controls="table-column-body-4"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Xbox Series S
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Gaming/Console
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Microsoft
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $299
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                56
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                3087
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-4"
              aria-labelledby="table-column-header-4"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-5"
              data-accordion-target="#table-column-body-5"
              aria-expanded="false"
              aria-controls="table-column-body-5"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                PlayStation 5
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Gaming/Console
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Sony
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $799
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                78
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                2999
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-5"
              aria-labelledby="table-column-header-5"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-6"
              data-accordion-target="#table-column-body-6"
              aria-expanded="false"
              aria-controls="table-column-body-6"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Xbox Series X
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Gaming/Console
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Microsoft
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $699
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                200
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                1870
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-6"
              aria-labelledby="table-column-header-6"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-7"
              data-accordion-target="#table-column-body-7"
              aria-expanded="false"
              aria-controls="table-column-body-7"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Apple Watch SE
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Watch
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Apple
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $399
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                657
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                5067
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-7"
              aria-labelledby="table-column-header-7"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-8"
              data-accordion-target="#table-column-body-8"
              aria-expanded="false"
              aria-controls="table-column-body-8"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onclick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                NIKON D850
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                Photo
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                Nikon
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $599
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                465
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                1870
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-8"
              aria-labelledby="table-column-header-8"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr
              className="umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy _s1HFAQPzDGxzspem6eZ _OovBxfPdK7Rjv2nh2Ot avTmsFU5TwHXQh07Ji35 VIuKUx4c9XwVneT1qxHx K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic"
              id="table-column-header-9"
              data-accordion-target="#table-column-body-9"
              aria-expanded="false"
              aria-controls="table-column-body-9"
            >
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 kbeH5ty3CtPKxXm5TXph">
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    onlick="event.stopPropagation()"
                    className="kbeH5ty3CtPKxXm5TXph eVNhx7m5tjSVbfYQzDdT text-primary-600 _iRPzRRWy2UNkvZFG8iO YPSoR6AXtPgkmylUmcbT T_tFENbpK8DMDNjQRyQa focus:ring-primary-500 dark:focus:ring-primary-600 apRlbPZRJ4JWA5RVdURT X3ifvK6lzvLzkZabaIQd _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk"
                  />
                  <label
                    htmlFor="checkbox-table-search-1"
                    className="BWabIWdbZ5qWNbPXxuBc"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <td className="_7ErNxHG5jDLGpANMK93 kbeH5ty3CtPKxXm5TXph">
                <svg
                  data-accordion-icon=""
                  className="nLhohPz5FpffXM9RSdFT _XD2a764x49B1E2F9f8X zujhCQXfQfsYXApYjSOW"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </td>
              <th
                scope="row"
                className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE"
              >
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                  alt="iMac Front Image"
                  className="_pwSRUXRHN5bHphyTRKz _fU_qFiBpx8XncfylZLc Cl7RaVW6jbggnJW_S87T"
                />
                Monitor BenQ EX2710Q
              </th>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9">
                TV/Monitor
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                BenQ
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                $499
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                354
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH b8ZffOVbGm2yi3A6gDUi a0Ed69aMSu0vgf4oysz0">
                76
              </td>
              <td className="veFXkDzfJN473U3ycrV8 _Masco_7wTrd3Tc0qjp9 b8ZffOVbGm2yi3A6gDUi">
                <div className="MlAkEYe7e8Wd4x5Bd_SH _sKOAvqwIF0JM69g2BaC t3ezsLlqjmKf1w_5H1kv XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _gmxfZ2BpOHxa6nWwqBB cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR YPSoR6AXtPgkmylUmcbT cThA4l_wrxDwg9_8SQV1 nmH3k4w9SbxbHQusBo55">
                  Active
                </div>
              </td>
            </tr>
            <tr
              className="j2x7_17hqRVmwte_tWFa _uoqSE9tPqjx_6qY1WDg m8Cxc_1gLSswmDjYzFl2 jCISvWkW5oStPH6Wrb_H"
              id="table-column-body-9"
              aria-labelledby="table-column-header-9"
            >
              <td
                className="iHyrYta0Jcy0_7nMWLK7 umaBek2qJLzF9vdDPtgc JeVit_1klYopnNwu_8oy"
                colSpan={9}
              >
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj _9OKVeTXzfSwD_NYO6_G">
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                      alt="iMac Front Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-side-image.png"
                      alt="iMac Side Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h Y34SQMYAJVIAdOFKA3gG _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge TjL0NNYpF0EOuxCmUBXu VfTNVuFHfUOV2VUUsLM5 LMBtGh5qwGL5U9o3XPr4 _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE _WclR59Ji8jwfmjPtOei">
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-back-image.png"
                      alt="iMac Back Image"
                      className="j34KztD3SBxL_tQWzosr _fU_qFiBpx8XncfylZLc"
                    />
                  </div>
                </div>
                <div>
                  <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                    Details
                  </h6>
                  <div className="osxEM2eQc4Pc_arzCZsv K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic _chPjFVKOPRcMolL9C9r">
                    Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7
                    processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4
                    memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB
                    SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard
                    - US.
                  </div>
                </div>
                <div className="i0EfZzmTLElZVOble53D SA4pRQ36tnue3ric1Gmk Ced8tRkG1VjcbmNVdBtj KgBTWt39fdiAC__YVNt8">
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR __9yfFbPJuEYWBMy4kA9 _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Product State
                    </h6>
                    <div className="bg-primary-100 text-primary-800 XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk cA4BPuqyV1eox6S0acvl AOldjxkjQirRFQcsh_FR jePiShCVli4AXI2UmtvL dark:bg-primary-200 dark:text-primary-800 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      New
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR _T15kfOPGkvwZnqhqKce">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Shipping
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_LEQ7KnyAAfYD56ApfaU c5fvORiJNDhWS_5erJz4 b7Lf_ucBvHbZEidPjF8t"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Worldwide
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Colors
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE rALiclNssVZsLNt7zOhR">
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT OdRE2_HDHVABHZ2LaLcH" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT pmr2X3IH7ZxBxTkUMLxi" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT bg-primary-600" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT du5Zz0GLfE_akhD0cIKd" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT askr1OY6wmid_Gd1pcQS" />
                      <div className="n8e6ORKgPTnY6zgs5HS7 _XD2a764x49B1E2F9f8X nLhohPz5FpffXM9RSdFT hwS__3dtYFaAFarvAWJv" />
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Brand
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Apple
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Sold by
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Ships from
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      Flowbite
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Dimensions (cm)
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      105 x 15 x 23
                    </div>
                  </div>
                  <div className="QYPW4nl6nHaIbrtaXf4h _7ErNxHG5jDLGpANMK93 _iRPzRRWy2UNkvZFG8iO _Qk4_E9_iLqcHsRZZ4ge _t2wg7hRcyKsNN8CSSeU">
                    <h6 className="rD4HtsUG_hahmbh2Kj09 osxEM2eQc4Pc_arzCZsv MxQqv3Z913orO6JQGGbH _A6LflweZRUwrcL6M2Tk g3OYBOqwXUEW4dRGogkH a0Ed69aMSu0vgf4oysz0">
                      Item weight
                    </h6>
                    <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
                      12kg
                    </div>
                  </div>
                </div>
                <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE B1cgbA6Bb4LQo0qFJKck KgBTWt39fdiAC__YVNt8">
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ g3OYBOqwXUEW4dRGogkH qHIOIw8TObHgD3VvKa5x yjGyQxv8jnYk9_MGMqLN _Qk4_E9_iLqcHsRZZ4ge PWreZZgitgAm_Nv4Noh9 pxHuWvF853ck68OLN6ef DpMPWwlSESiYA8EE1xKM hover:text-primary-700 m_8FxTcpOfmK___hAaJ6 _FONMPVaCsLFJJGDaaIL _bKyZ1er5YE_NnrwOCm9 __8kBLtrR_iuU2wW25Lp _cpMMPjFQqjJu4i0Puod eCx_6PNzncAD5yo7Qcic _BIVSYBXQUqEf_ltPrSk DTyjKhtXBNaebZa5L0l9 _OovBxfPdK7Rjv2nh2Ot"
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb _1RwobMSjw7fSSKQhqyp WdxnlHX2zjGU3Le1rfHH _FONMPVaCsLFJJGDaaIL BmbNHT2fTUPQcjxkS_AF _Qk4_E9_iLqcHsRZZ4ge ttPpYhajSb3UAVjwvT2R _vO7FE6umSgjOkex1_0q M5sqom8AcnqAX31nf13M"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="eVNhx7m5tjSVbfYQzDdT kbeH5ty3CtPKxXm5TXph b7Lf_ucBvHbZEidPjF8t"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        className="kqgYncRJQ7spwKfig6It BrSO24r_jx46AXZOyBJR df5l6rJbzHKk__BrH8tK _T15kfOPGkvwZnqhqKce __9yfFbPJuEYWBMy4kA9 _8xnBSvtrAxp8wF9yowC __Iv72FadFpzwcpFl5_5 GHTkY6_vcDBrE7v2PrzJ veFXkDzfJN473U3ycrV8 hkIVjIphcdkhq1U2r3yL f3MzTUUAX5Nwv2yQ2zXq"
        aria-label="Table navigation"
      >
        <div className="XklWzT8y98pp042XEQp4 kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE oCvhzqpqbvWnMRXdI6L7">
          <div>
            <div className="K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic RSigS__XSy90w_LER1Bw">
              Purchase price
            </div>
            <div className="a0Ed69aMSu0vgf4oysz0 _A6LflweZRUwrcL6M2Tk">
              $ 3,567,890
            </div>
          </div>
          <div>
            <div className="K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic RSigS__XSy90w_LER1Bw">
              Total selling price
            </div>
            <div className="a0Ed69aMSu0vgf4oysz0 _A6LflweZRUwrcL6M2Tk">
              $ 8,489,400
            </div>
          </div>
        </div>
        <div className="kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE ZLpoEVbvjZ2Wkm42QsPD">
          <button
            type="button"
            className="yT1GQH4LxzcERAjp6XzU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ text-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:text-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
          >
            Print barcodes
          </button>
          <button
            type="button"
            className="yT1GQH4LxzcERAjp6XzU kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE MxG1ClE4KPrIvlL5_Q5x _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ text-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:text-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:text-primary-500 dark:hover:text-primary-600 dark:focus:ring-primary-800"
          >
            Duplicate
          </button>
          <button
            type="button"
            className="zhRMeqbg7JsftloqW_W6 MQMN74ivNmI6x68DZajA kqgYncRJQ7spwKfig6It neyUwteEn7DOg9pBSJJE XklWzT8y98pp042XEQp4 _A6LflweZRUwrcL6M2Tk _F_1gdhzusC6tSOWHtx_ wP9HMsqy6b96l2HBRbgb bg-primary-700 _Qk4_E9_iLqcHsRZZ4ge hover:bg-primary-800 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Export CSV
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
</>


  );
}
