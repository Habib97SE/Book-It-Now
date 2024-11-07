import React from 'react';
import { FaLocationArrow, FaSearch } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section
            className="hero bg-cover bg-center"
            style={{
                minHeight: "50vh",
                backgroundImage: "url('https://app.truelysell.com/assets/img/banner.jpg')"
            }}
        >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="container mx-auto px-4 py-12 text-center text-white">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">World's Largest Marketplace!!!!</h1>
                    <p className="mb-8 text-lg">Search From 100 Awesome Verified Ads!</p>

                    {/* Search Form */}
                    <form
                        action="https://app.truelysell.com/search"
                        id="search_service"
                        className="flex flex-col md:flex-row items-center gap-4 bg-white rounded-lg shadow-lg w-full"
                        method="post"
                    >

                        <div className="flex items-center w-full md:w-2/5 border-b ">
                            <label className="input  flex items-center gap-2 bg-white">
                                <FaSearch className="text-primaryColor" />
                                <input type="text" className="grow bg-white text-black" placeholder="What are you looking for?" />
                            </label>
                        </div>

                        <div className="flex items-center w-full md:w-2/5 border-b ">
                            <label className="input flex items-center gap-1 bg-white">
                                <FaLocationArrow className="text-primaryColor" />
                                <input type="text" className="grow bg-white text-black" placeholder="Your location" />
                            </label>
                        </div>

                        <div className="w-full md:w-1/5">
                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-primaryColor text-white text-xl outline-none border-none py-2 rounded-lg hover:bg-primaryColorHover"
                            >
                                Search
                            </button>
                        </div>
                    </form>


                </div>
            </div>
        </section>
    );
};

export default HeroSection;
