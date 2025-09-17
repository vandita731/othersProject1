import React from 'react'
import { Link, NavLink } from 'react-router-dom';




export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <div className="flex flex-col items-center justify-center bg-[#0d47a1]">
                <br />
                    <h1 className="text-3xl font-bold text-white">NextGen Data Innovations Pvt. Ltd.</h1>
                    <br />
                </div>
            <nav className="bg-white border-gray-200 px-4 lg:px-3 py-1">
                
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo_web.jpg"
                            className="mr-3 h-15"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-[#0d47a1]" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0d47a1] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-[#0d47a1]" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0d47a1] lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                     <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-[#0d47a1]" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0d47a1] lg:p-0`
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-[#0d47a1]" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#0d47a1] lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                   
                </div>
            </nav>
        </header>
    );
}

