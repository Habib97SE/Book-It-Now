import Link from "next/link";
import { CiLock } from "react-icons/ci";
import { FiBook, FiHeart } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiFileDashedBold } from "react-icons/pi";
import Image from "next/image";
import { FaRecycle, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import Head from "next/head";

function DashboardPage() {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Dashboard</h1>
            <div className="grid grid-cols-3 gap-3 mx-4">
                <div className="col-span-1">
                    <div className="p-2 rounded-lg cursor-pointer ">
                        <div className="card">

                            <ul tabIndex={0} className=" bg-gray-100 text-black rounded-box w-8/12 p-2 shadow-lg leading-10">
                                <div className="flex flex-row items-center border-b-2 border-gray-100">
                                    <Image
                                        src="https://app.truelysell.com/uploads/profile_img/1631796006.jpg"
                                        alt="profile"
                                        className=" rounded-full"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="ml-2">
                                        <h1 className="text-lg font-bold">John Doe</h1>
                                        <span className="text-gray-500 text-sm">Member since 2021</span>
                                    </div>
                                </div>
                                <li className="my-5"><Link href="/profile/dashboard" className="hover:text-primaryColor flex flex-row items-center text-lg"><MdOutlineSpaceDashboard className="mr-4" /> Dashboard</Link></li>
                                <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><FiBook className="mr-4" />My Bookings</a></li>
                                <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><FiHeart className="mr-4" />My Favorites</a></li>
                                <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><IoSettingsOutline className="mr-4" />Profile Settings</a></li>
                                <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><CiLock className="mr-4" />Change Password</a></li>
                                <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><FaRegTrashAlt className="mr-4" />Delete account</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="p-2 rounded-lg cursor-pointer">
                        <span>10:00 <br /> 11:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;