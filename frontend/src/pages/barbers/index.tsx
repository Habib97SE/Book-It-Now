import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Head from "next/head";
import { Pagination } from "@/components/pagination";

interface Barber {
    id: number;
    name: string;
    image: string;
    location: string;
    phone: string;
    rating: number;
    price: number;
}


const barbersData = [
    {
        id: 1,
        name: "Barber 1",
        image: "https://app.truelysell.com/uploads/services/se_full_1631787687service-11.jpg",
        location: "stokholm",
        phone: "xxxxxxxx74",
        rating: 5,
        price: 132.00
    },
    {
        id: 2,
        name: "Barber 2",
        image: "https://app.truelysell.com/uploads/services/se_full_1631787687service-11.jpg",
        location: "stockholm",
        phone: "xxxxxxxx74",
        rating: 5,
        price: 232.00
    },
    {
        id: 3,
        name: "Barber 3",
        image: "https://app.truelysell.com/uploads/services/se_full_1631787687service-11.jpg",
        location: "gothenburg",
        phone: "xxxxxxxx74",
        rating: 5,
        price: 332.00
    },
    {
        id: 4,
        name: "Barber 4",
        image: "https://app.truelysell.com/uploads/services/se_full_1631787687service-11.jpg",
        location: "malmo",
        phone: "xxxxxxxx74",
        rating: 5,
        price: 432.00
    },
    {
        id: 5,
        name: "Barber 5",
        image: "https://app.truelysell.com/uploads/services/se_full_1631787687service-11.jpg",
        location: "uppsala",
        phone: "xxxxxxxx74",
        rating: 5,
        price: 532.00
    }
]

function BarbersPage() {

    const [page, setPage] = useState(1);

    const [data, setData] = useState(barbersData);

    const handleSort = (e: any) => {
        const sortBy = e.target.value;

        // Sort by price
        if (sortBy === "Price Low to High") {
            setData(barbersData.sort((a, b) => a.price - b.price));
            return;
        }
        if (sortBy === "Price High to Low") {
            setData(barbersData.sort((a, b) => b.price - a.price));
            return;
        }

        // Sort by newest
        if (sortBy === "Newest") {
            setData(barbersData.sort((a, b) => a.id - b.id));
            return;
        }

        // Sort by default

        setData(barbersData);
        return;




    }


    return (
        <>
            <Head>
                <title>Barbers</title>
            </Head>
            <div className="bg-gray-100 min-h-screen">
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
                                                className="select select-bordered w-full bg-white text-black"
                                                onChange={(e) => {
                                                    const location = e.target.value;
                                                    setData(barbersData.filter((barber) => barber.location === location));
                                                }}
                                            >
                                                <option>Choose a location</option>
                                                <option value={"stockholm"}>Stockholm</option>
                                                <option value={"gothenburg"}>Gothenburg</option>
                                                <option value={"malmo"}>Malmö</option>
                                                <option value={"uppsala"}>Uppsala</option>
                                            </select>
                                        </div>



                                        <div className="form-control mb-4 bg-white text-blackx">
                                            <label className="label">
                                                <span className="label-text">Price Range</span>
                                            </label>
                                            <div className="flex items-center justify-between mb-2">
                                                <span>0 SEK</span>
                                                <span>500 SEK</span>
                                            </div>
                                            <input type="range" className="range range-primary w-full" min="5" max="500" />
                                        </div>
                                        <button className="btn btn-secondary  w-full">Search</button>
                                    </form>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="w-full lg:w-3/4">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="text-lg font-semibold">
                                    {barbersData.length} Barbers Found
                                </h4>
                            </div>

                            {/* Services List */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="dataList">
                                {data.map((barber: Barber) => {
                                    return (
                                        <div key={barber.id} className="card bg-white shadow-lg m-2">
                                            <div className="card-body p-0">
                                                <figure className="relative">
                                                    <Image
                                                        src={barber.image}
                                                        alt="Service Image"
                                                        width={500}
                                                        height={300}
                                                        className="object-cover w-full"
                                                    />
                                                    <div className="absolute top-4 left-4 badge badge-secondary py-2 px-3 capitalize">

                                                        {barber.location}

                                                    </div>
                                                    <div className="absolute top-4 right-4">
                                                        <button className="btn btn-circle btn-sm btn-outline">
                                                            <i className="feather-heart" />
                                                        </button>
                                                    </div>
                                                </figure>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-lg">
                                                        <a href="#">{barber.name}</a>
                                                    </h3>
                                                    <p className="text-gray-600 text-sm">
                                                        <i className="fas fa-phone mr-1"></i> <span>{barber.phone}</span>
                                                        <br />
                                                    </p>
                                                    <div className="flex items-center justify-between mt-4 text-black">
                                                        <div className="rating flex flex-row items-center justify-center">
                                                            <FaStar className="text-yellow-500" />
                                                            <FaStar className="text-yellow-500" />
                                                            <FaStar className="text-yellow-500" />
                                                            <FaStar className="text-yellow-500" />
                                                            <FaStar className="text-yellow-500" />
                                                            <span className="ml-2">(5)</span>
                                                        </div>
                                                        <h6 className="font-semibold">{barber.price} SEK</h6>
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