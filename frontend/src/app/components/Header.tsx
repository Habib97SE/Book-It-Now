"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <a className="flex items-center">
                    <img
                        src="https://app.truelysell.com/assets/img/logo.svg"
                        alt="Logo"
                        className="h-8 w-auto"
                    />
                </a>


                {/* Mobile Menu Toggle */}
                <Button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden focus:outline-none"
                    variant="ghost"
                >
                    <span className="material-icons">menu</span>
                </Button>

                {/* Navbar Links */}
                <nav
                    className={`lg:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <a className="text-gray-800 hover:text-gray-600 sm:w-full">Categories</a>


                    <a className="text-gray-800 hover:text-gray-600">About Us</a>


                    <a className="text-gray-800 hover:text-gray-600">Contact</a>

                    <a className="text-gray-800 hover:text-gray-600">Login</a>

                </nav>

                {/* Dropdown for Language & Currency */}
                <div className="hidden lg:flex items-center space-x-4">
                    {/* Language Dropdown */}
                    <div className="relative">
                        <Button variant="ghost" className="flex items-center">
                            <img
                                src="https://app.truelysell.com/assets/img/flags/gb.svg"
                                alt="English"
                                className="h-4 w-4 mr-2"
                            />
                            English
                        </Button>
                        {/* Add dropdown menu here */}
                    </div>

                    {/* Currency Dropdown */}
                    <select
                        className="border bg-gray-100 p-1 rounded"
                        defaultValue="USD"
                    >
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
