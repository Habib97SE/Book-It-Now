"use client";
import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FiBook, FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiFileDashedBold } from "react-icons/pi";
import Image from "next/image";
import { FaRecycle, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import Head from "next/head";

import { useUser } from "@clerk/nextjs";
import ServiceCard from "@/components/service-card";
import { ProfileSidebar } from "@/components/profile/sidebar";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { getBookingsByUserId } from "@/models/booking-model";
import useSWR from "swr";
import { BookingCard } from "@/components/booking-card";
import { BookingCardDashboard } from "@/components/profile/booking-card-dashboard";

function DashboardPage() {

    const { user } = useUser();

    const { data: bookingsData, error: bookingsError, isLoading: bookingsLoading } = useSWR(user?.id, getBookingsByUserId);

    if (bookingsError) return <div>Error: {bookingsError.message}</div>;


    function showToast(message: string, type: "success" | "error" | "info" | "warning") {
        console.log(message, type);
    }

    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10">
                <h1 className="text-2xl font-semibold text-black">Barbers</h1>
                <BreadCrumbs items={[
                    {
                        title: "Home",
                        url: "/"
                    },
                    {
                        title: "Dashboard",
                        url: "/profile/dashboard"
                    }
                ]} />
            </header>
            <div className="grid grid-cols-3 gap-3 mx-4 my-3">
                <ProfileSidebar />
                <div className="col-span-2">
                    <div className="p-2 rounded-lg cursor-pointer bg-white">
                        <div>
                            {/* A list of bookings */}
                            <h1>
                                <span className="text-4xl text-center font-bold text-black">My Bookings</span>
                            </h1>
                            <div className="flex flex-row justify-start">
                                {bookingsData?.slice(0, 2).map((booking) => (
                                    <BookingCardDashboard
                                        key={booking.id}
                                        item={booking}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-row justify-center items-center my-5 bg-white">
                                {/* Show 3 skeleton for loading  */}
                                {bookingsLoading && (
                                    <>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="skeleton h-4 w-20"></div>
                                                    <div className="skeleton h-4 w-28"></div>
                                                </div>
                                            </div>
                                            <div className="skeleton h-32 w-full"></div>
                                        </div>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="skeleton h-4 w-20"></div>
                                                    <div className="skeleton h-4 w-28"></div>
                                                </div>
                                            </div>
                                            <div className="skeleton h-32 w-full"></div>
                                        </div>
                                        <div className="flex w-52 flex-col gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="skeleton h-4 w-20"></div>
                                                    <div className="skeleton h-4 w-28"></div>
                                                </div>
                                            </div>
                                            <div className="skeleton h-32 w-full"></div>
                                        </div>
                                    </>
                                )}
                                {/* Show booking cards */}




                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2 rounded-lg cursor-pointer bg-white">


                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;