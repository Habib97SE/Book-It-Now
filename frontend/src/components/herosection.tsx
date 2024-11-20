import React from 'react';
import { FaLocationArrow, FaSearch } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const HeroSection = () => {
    return (
        <section className="hero bg-cover bg-center herosection-image-one">
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="container mx-auto px-4 py-12 text-center text-white">
                <div className="w-10/12 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Book your next appointment</h1>
                    <p className="mb-8 text-lg">Search From 100 Awesome Verified Ads!</p>

                    <form
                        id="search_service"
                        className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg w-full"
                    >

                        <div className="flex items-center w-full md:w-2/5 border-b ">
                            <label className="input gap-1 w-full flex items-center bg-white">
                                <FaSearch className="text-primaryColor" />
                                <input type="text" className="grow bg-white text-black" placeholder="What are you looking for?" spellCheck="false" />
                            </label>
                        </div>

                        <div className="flex items-center w-full md:w-2/5 border-b ">
                            <label className="input gap-1 w-full flex items-center bg-white">
                                <FaLocationArrow className="text-primaryColor" />
                                <input type="text" className="grow bg-white text-black" placeholder="Your location" spellCheck="false" />
                            </label>
                        </div>

                        <div className="w-full md:w-1/5">
                            <button
                                type="submit"
                                className="btn btn-primary w-full bg-primaryColor text-white text-xl outline-none border-nones hover:bg-primaryColorHover"
                            >
                                Search
                            </button>
                        </div>
                    </form>

                    <div className='my-3 flex flex-row justify-center'>
                        <span
                            className='flex flex-row items-center text-white text-lg'
                        >
                            <GoDotFill className='text-orange-500 ' />
                            <strong>Popular Searches:</strong>
                        </span>
                        <button className='border border-dashed rounded-full px-3 py-2 mx-2 hover:border hover:border-solid hover:border-gray-100 hover:text-white hover:bg-black'>
                            Haircut
                        </button>
                        <button className='border border-dashed rounded-full px-3 py-2 mx-2 hover:border hover:border-solid hover:border-white hover:text-white hover:bg-black'>
                            Nail Art
                        </button>
                        <button className='border border-dashed rounded-full px-3 py-2 mx-2 hover:border hover:border-solid hover:border-white hover:text-white hover:bg-black'>
                            Massage
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
