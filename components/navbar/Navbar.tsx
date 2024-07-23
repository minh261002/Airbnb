import React from 'react'
import Logo from './Logo'
import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import DarkMode from './DarkMode'

const Navbar = () => {
    return (
        <nav className="border-b">
            <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 gap-4">
                <Logo />

                <div className="flex-grow max-w-md">
                    <div className="flex items-center rounded-full border border-gray-300 bg-white dark:bg-black shadow-sm p-2">
                        <NavSearch />
                        <button className="flex items-center rounded-full bg-primary py-2 px-4 text-white hover:bg-blue-700 transition decoration-300 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.414l-4.386-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 items-center">
                    <DarkMode />
                    <LinksDropdown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
