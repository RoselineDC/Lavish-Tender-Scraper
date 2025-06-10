import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// create dropdown
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//handle drawer toggle
const handleDrawerToggle = () => {
  setIsDrawerOpen(!isDrawerOpen);
};
// create Navbar component
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <ul className="absolute right-0 flex flex-row space-x-6">
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Tenders</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Transnet</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">CSIR</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">e</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl hover:text-blue-900 hover:font-semibold">
            <Link href="/">Home</Link>
          </li>
          {/* Add other navigation links */}
        </ul>
      </nav>
    </div>
  );
};
