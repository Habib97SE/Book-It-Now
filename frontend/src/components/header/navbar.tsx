"use client";
import { SignedIn, SignedOut, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";
import { FiBook, FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessagesSquare } from "react-icons/lu";
import { MdKeyboardArrowDown, MdOutlineSpaceDashboard } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";

function NavBar() {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0); // Change threshold as needed
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ProfileMenu = () => {
        const { user, isSignedIn } = useUser();

        return (
            <>
                <SignedIn>
                    <div className="dropdown dropdown-end text-white">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "h-10 w-10 rounded-full",
                                    },
                                }}
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 text-black rounded-box w-52 p-2 shadow-lg"
                        >
                            <li className="border-b flex flex-row hover:bg-none">
                                <span className="hover:bg-none">
                                    Hi <span className="font-bold">{isSignedIn && user?.fullName}</span>
                                </span>
                            </li>
                            <li>
                                <Link href="/profile/dashboard" className="hover:text-primaryColor hover:bg-lightPink">
                                    <MdOutlineSpaceDashboard /> Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/my-bookings" className="hover:text-primaryColor hover:bg-lightPink">
                                    <FiBook /> My Bookings
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primaryColor hover:bg-lightPink">
                                    <FiHeart /> My Favorites
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primaryColor hover:bg-lightPink">
                                    <IoSettingsOutline /> Profile Settings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primaryColor hover:bg-lightPink">
                                    <CiLock /> Change Password
                                </a>
                            </li>
                            <SignOutButton>
                                <li className="py-2">
                                    <a href="#" className="bg-gray-300">
                                        <PiSignOutFill /> Sign Out
                                    </a>
                                </li>
                            </SignOutButton>
                        </ul>
                    </div>
                </SignedIn>
                <SignedOut>
                    <Link href="/sign-in" className="mx-3 text-xl text-white">
                        Login
                    </Link>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-primaryColor hover:bg-primaryColorHover">
                            Register
                            <MdKeyboardArrowDown />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content rounded-box w-52 p-2 shadow-lg bg-white text-black"
                        >
                            <li className="hover:bg-gray-50">
                                <a href="/sign-up">Create account for booking</a>
                            </li>
                            <li className="hover:bg-gray-50">
                                <a href="/register/provider">Create account as service provider</a>
                            </li>
                        </ul>
                    </div>
                </SignedOut>
            </>
        );
    };


    return (
        <div
            className={`sticky text-white top-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black'
                }`}
        >
            <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                        >
                            <li><Link href="/barbers">Barbers</Link></li>
                            <li><Link href="/about">About us</Link></li>
                            <li><Link href={"/contact"}>Contact us</Link></li>
                        </ul>
                    </div>
                    <Link href={"/"} className="text-xl">
                        <span className="text-primaryColor">Book It</span> Now.
                    </Link>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href="/barbers">Barbers</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href={"/contact"}>Contact</Link></li>
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <ProfileMenu />
                </div>
            </div>
        </div>
    );
}

export default NavBar;
