function NavBar() {
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
                                    <li><a href="#">Submenu 1</a></li>
                                    <li><a href="#">Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <span className="text-primaryColor">Book It</span> Now.
                    </a>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#">Item 1</a></li>
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
                    <a href="#" className="mx-3 text-xl text-white">Login</a>
                    <a href="#" className="btn bg-primaryColor hover:bg-primaryColorHover text-white text-xl">Register</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
