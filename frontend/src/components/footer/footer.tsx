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
            { name: <span><FaBuilding /> Lustgardsgatan 19, Stockholm</span>, url: "#" },
            { name: <span><FaHeadphones /> 340958</span>, url: "#" },
            { name: <span><FaEnvelope /> habib@appliedtechnology.se</span>, url: "#" },
        ]
    }
]

function Footer() {

    const renderLinks = links.map((link, index) => {
        return (
            <nav key={index}>
                <h6 className="footer-title">{link.title}</h6>
                <ul>
                    {link.links.map((item, secondIndex) => {
                        return (
                            <li key={secondIndex} className="link link-hover"><FaAngleDoubleRight className="text-primaryColor" /> {item.name}</li>
                        );
                    })}
                </ul>
            </nav>
        );
    })

    return (

        <footer className="footer p-10 bg-white text-gray-600">
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

    );
}

export default Footer;