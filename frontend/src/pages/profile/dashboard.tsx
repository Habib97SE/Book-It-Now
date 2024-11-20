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

function DashboardPage() {

    const { user } = useUser();

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
                            <div className="flex flex-row justify-center items-center my-5 bg-white">

                            </div>
                        </div>
                    </div>
                    <div className="p-2 mt-2 rounded-lg cursor-pointer bg-white">
                        <div>
                            {/* A list of bookings */}
                            <h1>
                                <span className="text-4xl text-center font-bold text-black">My Favorites</span>
                            </h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;