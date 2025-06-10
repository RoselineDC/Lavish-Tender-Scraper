import Link from 'next/link'
import Image from 'next/image'

const navIcons = [
    { src: "/assets/icons/search.svg", alt: "search" },
    { src: "/assets/icons/black-heart.svg", alt: "heart" },   
    { src: "/assets/icons/user.svg", alt: "user" },  

   
]

const Navbar = () => {
    return (
        <header className="w-full">
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1'>
                    <p className='nav-logo'>    TENDER DASH
                       <span className='text-primary'></span> 
                    </p>
               
                </Link>
        </nav>
        </header >
    )
}

// saved 

export default Navbar