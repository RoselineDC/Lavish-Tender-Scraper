import Link from 'next/link';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


// create dropdown
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 //handle drawer toggle
const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
    };
// create Navbar component
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Tender Dashboard
                </Link>
                <button
                    onClick={handleDrawerToggle}
                    className="text-white md:hidden"
                >
                    <FontAwesomeIcon icon={isDrawerOpen ? faXmark : faBars} />
                </button>
            </div>
            {isDrawerOpen && (
                <div className="md:hidden bg-gray-700 p-4">
                    <ul>
                        <li className="py-2">
                            <Link href="/tenders">Tenders</Link>
                        </li>
                        <li className="py-2">
                            <Link href="/about">About</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};