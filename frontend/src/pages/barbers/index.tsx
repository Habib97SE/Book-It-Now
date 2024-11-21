import { useEffect, useState } from "react";

import Image from "next/image";
import { FaHeart, FaStar } from "react-icons/fa";
import Head from "next/head";
import { Pagination } from "@/components/pagination";
import { GoDotFill } from "react-icons/go";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import Link from "next/link";
import { Provider } from "@/app/types/provider-types";
import useSWR from "swr";
import { getProviders } from "@/models/provider-model";

function BarbersPage() {

    const [page, setPage] = useState(1);



    const handleSort = (e: any) => {
        console.log(e.target.value);

    }

    const [priceRange, setPriceRange] = useState(1000);

    const onPriceChange = (min: number, max: number) => {
        console.log(min, max);

    }

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        const newValue = parseInt(event.target.value, 10);
        setPriceRange(newValue);
        onPriceChange(0, newValue); // Update parent component or trigger API call
    };



    const { data, error, isLoading } = useSWR("data", getProviders);

    if (error) return <div>Failed to load</div>

    if (isLoading) return <div>Loading...</div>


    return (
        <>
            <Head>
                <title>Barbers</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">

                {/* Page Header */}
                <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10">
                    <h1 className="text-2xl font-semibold text-black">Barbers</h1>
                    <BreadCrumbs items={[
                        {
                            title: "Home",
                            url: "/"
                        },
                        {
                            title: "Barbers",
                            url: "/barbers"
                        }
                    ]} />
                </header>


                <div className="container mx-auto px-4 py-10">
                    <div className="flex flex-wrap">


                        {/* Filter Sidebar */}
                        <aside className="w-full lg:w-1/4 mb-8 lg:mb-0">
                            <div className="card bg-white shadow-lg">
                                <div className="card-body">
                                    <h4 className="card-title text-lg font-semibold mb-4">Search Filter</h4>
                                    <form id="search_form">
                                        <div className="form-control mb-4">
                                            <label className="label">
                                                <span className="label-text">Keyword</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="common_search"
                                                placeholder="What are you looking for?"
                                                className="input input-bordered w-full bg-white text-black"
                                            />
                                        </div>
                                        <div className="form-control mb-4">
                                            <label className="label">
                                                <span className="label-text">Sort By</span>
                                            </label>
                                            <select id="sort_by" className="select select-bordered w-full bg-white text-black">
                                                <option>Sort By</option>
                                                <option>Price Low to High</option>
                                                <option>Price High to Low</option>
                                                <option>Newest</option>
                                            </select>
                                        </div>

                                        <div className="form-control mb-4">
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <select
                                                id="locations"
                                                className="select select-bordered w-full bg-white text-black">

                                                <option>Choose a location</option>
                                                <option value={"stockholm"}>Stockholm</option>
                                                <option value={"gothenburg"}>Gothenburg</option>
                                                <option value={"malmo"}>Malmö</option>
                                                <option value={"uppsala"}>Uppsala</option>
                                            </select>
                                        </div>

                                        <div className="form-control mb-4 bg-white text-black">
                                            <label className="label">
                                                <span className="label-text">Price Range</span>
                                            </label>
                                            <div className="flex items-center justify-between mb-2">
                                                <span>0 SEK</span>
                                                <span>{priceRange} SEK</span>
                                            </div>
                                            <input
                                                type="range"
                                                className="range w-full bg-white text-primaryColor accent-primaryColor"
                                                min="0"
                                                max="1000"
                                                value={priceRange}
                                                onChange={handlePriceChange}
                                            />
                                        </div>



                                        <button className="btn btn-secondary w-full bg-primaryColor text-white text-lg hover:bg-primaryColorHover">Search</button>
                                    </form>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="w-full lg:w-3/4">


                            {/* Services List */}
                            <div className="m-3 grid grid-cols-3 gap-3" id="dataList">

                                {error && (
                                    <div className="alert alert-danger bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p>
                                            Failed to load barbers. Please try again later.
                                        </p>
                                    </div>
                                )}

                                {isLoading && (
                                    <div>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="skeleton h-32 w-full"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                        </div>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="skeleton h-32 w-full"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                        </div>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="skeleton h-32 w-full"></div>
                                            <div className="skeleton h-4 w-28"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                            <div className="skeleton h-4 w-full"></div>
                                        </div>
                                    </div>

                                )}


                                {data.length === 0 && (
                                    <div
                                        className="alert alert-danger bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center"
                                    >

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 shrink-0 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <p>
                                            No barbers found with the selected criteria. Please try again with different filters.
                                        </p>

                                    </div>
                                )}



                                {data.map((barber: Provider) => {

                                    return (
                                        <div key={barber.id} className="card bg-white shadow-lg m-2 w-full">
                                            <div className="card-body p-0">
                                                <figure className="relative p-5">
                                                    <Image
                                                        src={barber.logo}

                                                        alt="Service Image"
                                                        width={500}
                                                        height={300}
                                                        className="object-cover w-full rounded-lg"
                                                    />
                                                    <div className="absolute top-6 left-6 badge badge-secondary py-4 px-5 capitalize text-black bg-gray-100 border-gray-100">
                                                        {barber.city}

                                                    </div>
                                                    <div className="absolute top-6 right-6">
                                                        <button
                                                            className="btn btn-circle btn-sm btn-outline"

                                                        >
                                                            <FaHeart />

                                                        </button>
                                                    </div>
                                                </figure>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-lg">
                                                        <Link className="hover:text-primaryColorHover" href={`/barbers/${barber.id}`}>{barber.name}</Link>
                                                    </h3>
                                                    <p className="text-gray-600 text-sm">
                                                        <i className="fas fa-phone mr-1"></i> <span>{barber.phone}</span>
                                                        <br />
                                                    </p>
                                                    <div className="flex items-center justify-between mt-4 text-black">
                                                        <div className="rating flex flex-row items-center justify-center">

                                                            {Array.from({ length: 5 }, (_, index) => {
                                                                const starIndex = index + 1; // Star indices start from 1
                                                                return (
                                                                    <FaStar
                                                                        key={starIndex}
                                                                        className="text-yellow-400"
                                                                    />
                                                                );
                                                            })}

                                                            <span className="ml-2">(5)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Pagination */}
                            <Pagination page={page} setPage={setPage} totalPage={12} />
                        </main>

                    </div>
                </div>
            </div>
        </>

    );
}

export default BarbersPage;