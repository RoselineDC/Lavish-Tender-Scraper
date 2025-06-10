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
        <div>
            v className=''

        </div>
    )

}