"use client";

import { FaAngleDoubleRight, FaBuilding, FaEnvelope, FaHeadphones } from "react-icons/fa";

const links = [
    {
        title: "Categories",
        links: [
            { name: "Car wash", url: "#" },
            { name: "Carpentry", url: "#" },
            { name: "Cleaning", url: "#" },
            { name: "Computer", url: "#" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { name: "About us", url: "#" },
            { name: "Contact us", url: "#" },
            { name: "FAQ", url: "#" },
            { name: "Blog", url: "#" },
        ],
    },
    {
        title: "Contact us",
        links: [
            { name: <span className="flex flex-row items-center"><FaBuilding /> Lustgardsgatan 19, Stockholm</span>, url: "#" },
            { name: <span className="flex flex-row items-center"><FaHeadphones /> 340958</span>, url: "#" },
            { name: <span className="flex flex-row items-center"><FaEnvelope /> habib@appliedtechnology.se</span>, url: "#" },
        ]
    }
]

function Footer() {

    const renderLinks = links.map((link, index) => {
        return (
            <nav key={index} >
                <div className="relative inline-block group">
                    <h6 className="footer-title">{link.title}</h6>
                    {/* Animated bottom border */}
                    <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-primaryColor transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
                </div>

                <ul>
                    {link.links.map((item, secondIndex) => (
                        <li key={secondIndex} className="link link-hover flex flex-row items-center transition-transform duration-300 hover:translate-x-2 leading-8">
                            <FaAngleDoubleRight className="text-primaryColor mr-1" />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>

        );
    })

    return (

        <div>
            <footer className="footer p-10 bg-white text-gray-600 loading-3">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {renderLinks}
                </div>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            Enter your email address
                        </label>
                        <div className="join bg-white">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                spellCheck="false"
                                className="input input-bordered join-item text-black bg-white" />
                            <button className="btn btn-primary join-item bg-primaryColor hover:bg-primaryColorHover text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

            </footer>
            <div
                className="text-center p-4 bg-gray-100 text-gray-500 text-sm"
            >
                <p>
                    &copy; 2024 Applied Technology. All rights reserved.
                </p>
            </div>
        </div>

    );
}

export default Footer;