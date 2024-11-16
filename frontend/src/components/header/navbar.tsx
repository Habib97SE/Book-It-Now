import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function NavBar() {

    const ProfileMenu = () => {
        return (
            <>
                <SignedIn>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                            Profile
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow-lg">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Settings</a></li>
                            <SignOutButton>
                                <li><a href="#">Sign Out</a></li>
                            </SignOutButton>
                        </ul>
                    </div>
                </SignedIn>
                <SignedOut>

                    <Link href="/sign-in" className="mx-3 text-xl text-white">Login</Link>
                    {/* Dropdown menu for register personal and provider acocunt */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-primaryColor hover:bg-primaryColorHover">
                            Register
                            <MdKeyboardArrowDown />
                        </div>
                        <ul tabIndex={0} className="menu dropdown-content rounded-box w-52 p-2 shadow-lg bg-white text-black">
                            <li className="hover:bg-gray-50"><a href="/sign-up">Create account for booking</a></li>
                            <li className="hover:bg-gray-50"><a href="/register/provider">Create account as service provider</a></li>
                        </ul>
                    </div>
                </SignedOut>
            </>
        );
    }

    return (
        <div className="sticky top-0 w-full z-50 bg-black/70 backdrop-blur-md">
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
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            <li><a href="#">Item 1</a></li>
                            <li>
                                <a href="#">Parent</a>
                                <ul className="p-2">
                                    <li className="w-full" ><a href="#">Submenu 1</a></li>
                                    <li><a href="#">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Item 3</a></li>
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
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a href="#">Submenu 1</a></li>
                                    <li><a href="#">Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a href="#">Item 3</a></li>
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
