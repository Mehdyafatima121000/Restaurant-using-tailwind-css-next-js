"use client";
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuDropdownOpen, setMenuDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isContactDropdownOpen, setContactDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50); // Adjust the threshold as needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full h-16 flex justify-between items-center bg-orange-950 shadow-lg z-50">
            <nav aria-label="Main Navigation">
                <ul className="flex space-x-4">
                    <li className="relative">
                        <div
                            className="text-white hover:text-red-500 rounded-full py-2 px-3 transition-colors duration-300 cursor-pointer"
                            onMouseEnter={() => setMenuDropdownOpen(true)}
                            onMouseLeave={() => setMenuDropdownOpen(false)}
                        >
                            Home
                        </div>
                        {isMenuDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-orange-500 shadow-lg rounded">
                                <h1>Welcome To Our Restaurant</h1>
                            </ul>
                        )}
                    </li>
                    <li className="relative">
                        <div
                            className="text-white hover:text-red-500 rounded-full py-2 px-3 transition-colors duration-300 cursor-pointer"
                            onMouseEnter={() => setMenuDropdownOpen(true)}
                            onMouseLeave={() => setMenuDropdownOpen(false)}
                        >
                            Menu
                        </div>
                        {isMenuDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-orange-500 shadow-lg rounded">
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Handi Biryani</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Loaded Cheese Burger</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Pasta Chicken Tikka</li>
                            </ul>
                        )}
                    </li>
                    <li className="relative">
                        <div
                            className="text-white hover:text-red-500 rounded-full py-2 px-3 transition-colors duration-300 cursor-pointer"
                            onMouseEnter={() => setServicesDropdownOpen(true)}
                            onMouseLeave={() => setServicesDropdownOpen(false)}
                        >
                            Services
                        </div>
                        {isServicesDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-orange-500 shadow-lg rounded">
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Outdoor seating</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Serves vegan dishes</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Good for watching sports</li>
                            </ul>
                        )}
                    </li>
                    <li className="relative">
                        <div
                            className="text-white hover:text-red-500 rounded-full py-2 px-3 transition-colors duration-300 cursor-pointer"
                            onMouseEnter={() => setContactDropdownOpen(true)}
                            onMouseLeave={() => setContactDropdownOpen(false)}
                        >
                            Contact
                        </div>
                        {isContactDropdownOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-orange-500 shadow-lg rounded">
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Call: +92 70-473783837</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Email: realmisspieces5@gmail.com</li>
                                <li className="text-black hover:text-red-500 hover:bg-gray-200 rounded py-2 px-3 transition-colors duration-300">Address: Food City, Karachi 786</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>

            {isScrolled && (
                <div className="mt-16 p-4 bg-orange-500 text-black rounded">
                    <h2>Welcome to Our Restaurant</h2>
                    <p>Discover our delicious menu filled with dishes like Handi Biryani and Loaded Cheese Burgers. Enjoy outdoor seating and a cozy atmosphere!</p>
                </div>
            )}
        </header>
    );
}
