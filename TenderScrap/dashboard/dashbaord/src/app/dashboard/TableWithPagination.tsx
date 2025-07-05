"use client";

import { SetStateAction, useState } from "react";

const TableWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Example data
  const data = Array.from({ length: 1000 }, (_, i) => `Row ${i + 1}`);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageClick = (page: SetStateAction<) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4">
      {/* TABLE */}
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td className="p-2 border">{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td className="p-2 border">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <nav
        className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 mt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, data.length)}
          </span>{" "}
          of <span className="font-semibold text-gray-900">{data.length}</span>
        </span>

        <ul className="inline-flex items-stretch -space-x-px text-sm">
          {/* Previous */}
          <li>
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 border rounded-l-lg bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>
          </li>

          {/* Pages */}
          {[...Array(5)].map((_, idx) => {
            const page = idx + 1;
            return (
              <li key={page}>
                <button
                  onClick={() => handlePageClick(page)}
                  className={`px-3 py-2 border ${
                    page === currentPage
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              </li>
            );
          })}

          {/* Next */}
          <li>
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border rounded-r-lg bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TableWithPagination;
