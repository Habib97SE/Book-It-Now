"use client";

import { FaBuilding, FaEnvelope, FaHeadphones } from "react-icons/fa";

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
            { name: "Lustgårdsgatan 19, Stockholm", url: "#" },
            { name: "324983748", url: "#" },
            { name: "habib@appliedtechnology.se", url: "#" },
        ]
    }
]

function Footer() {

    const renderLinks = links.map((link, index) => {
        return (
            <nav key={index}>
                <h6 className="footer-title">{link.title}</h6>
                <ul>
                    {link.links.map((item, index) => {
                        return (
                            <li key={index} className="link link-hover">{item.name}</li>
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
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>

    );
}

export default Footer;