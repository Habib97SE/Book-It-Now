import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { CiLock } from 'react-icons/ci';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiBook, FiHeart } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

function ProfileSidebar() {

    const { user } = useUser();

    const handleMemberSince = (): string => {
        // Return the year 
        const date: Date = new Date(user?.createdAt);
        console.log(date.getFullYear());
        return date.getFullYear().toString();
    }

    return (
        <div className="col-span-1">
            <div className="p-2 rounded-lg cursor-pointer text-center">
                <div className="card bg-gray-100 text-black rounded-box w-8/12 p-2 shadow-lg ">

                    <ul tabIndex={0} className="   leading-10 text-center">
                        <div className="flex flex-row items-center border-b-2 border-gray-100">
                            <Image
                                src={user?.imageUrl}
                                alt="profile"
                                className=" rounded-full"
                                width={40}
                                height={40}
                            />
                            <div className="ml-2">
                                <h1 className="text-lg font-bold">John Doe</h1>
                                <span className="text-gray-500 text-sm">{() => { handleMemberSince() }}</span>
                            </div>
                        </div>
                        <li className="my-5"><Link href="/profile/dashboard" className="hover:text-primaryColor flex flex-row items-center text-lg"><MdOutlineSpaceDashboard className="mr-4" /> Dashboard</Link></li>
                        <li className="my-5"><a href="/profile/my-bookings" className="hover:text-primaryColor flex flex-row items-center text-lg "><FiBook className="mr-4" />My Bookings</a></li>
                        <li className="my-5"><a href="/profile/my-favorites" className="hover:text-primaryColor flex flex-row items-center text-lg "><FiHeart className="mr-4" />My Favorites</a></li>
                        <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><IoSettingsOutline className="mr-4" />Profile Settings</a></li>
                        <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><CiLock className="mr-4" />Change Password</a></li>
                        <li className="my-5"><a href="#" className="hover:text-primaryColor flex flex-row items-center text-lg "><FaRegTrashAlt className="mr-4" />Delete account</a></li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export { ProfileSidebar };