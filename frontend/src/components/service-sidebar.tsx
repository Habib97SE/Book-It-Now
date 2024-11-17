import { useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { FaCircle, FaEnvelope, FaPhoneAlt, FaBug, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const ServiceSidebar = () => {
    const { isSignedIn } = useUser();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleBookService = () => {
        if (!isSignedIn) {
            setModalOpen(true); // Open the modal for signing in
        } else {
            alert("Service booked successfully!");
        }
    };

    const closeModal = () => setModalOpen(false);

    return (
        <div className="sticky top-32 w-full md:w-[356px]">
            {/* Service Amount */}
            <div className="card shadow-md mb-4">
                <div className="card-body bg-gray-50">
                    <div className="text-2xl font-bold mb-4 text-center">$100</div>
                    <button
                        className="py-4 px-5 rounded-lg w-full bg-primaryColor hover:bg-primaryColorHover text-white"
                        onClick={handleBookService}
                    >
                        Book Service
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div>
                        <div className="modal-box">
                            <button className="modal-close" onClick={closeModal}>
                                &times;
                            </button>
                            <SignIn routing="hash" forceRedirectUrl={`/barbers/${1}`} />
                        </div>
                    </div>
                </div>
            )}

            {/* Service Provider Info */}
            <div className="card shadow-md mb-4">
                <div className="card-body">
                    <h5 className="card-title text-lg font-bold mb-4">Service Provider</h5>
                    <div className="flex items-center mb-4">
                        <div className="w-16 h-16">
                            <Image
                                src="https://app.truelysell.com/uploads/profile_img/1631787916.jpg"
                                alt="Provider"
                                className="rounded-full"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="ml-4">
                            <a href="#" className="text-primary font-bold">
                                Demo Provider
                            </a>
                            <p className="text-sm text-gray-500">
                                <FaCircle className="inline text-green-500 mr-1" />
                                0 secs Online
                            </p>
                            <p className="text-sm text-gray-500">Member Since Sep 2021</p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 bg-gray-50 p-3">
                        <p className="text-sm mb-2">
                            <a href="mailto:demo-provider@example.com">
                                <FaEnvelope className="inline mr-2" />
                                demo-provider@example.com
                            </a>
                        </p>
                        <p className="text-sm">
                            <a href="tel:+1234567890">
                                <FaPhoneAlt className="inline mr-2" />
                                +1234567890
                            </a>
                        </p>
                    </div>
                    <button className="btn btn-error btn-outline mt-4 w-full">
                        <FaBug className="mr-2" />
                        Report Provider
                    </button>
                </div>
            </div>

            <div className="card shadow-md">
                <div className="card-body">
                    <h5 className="card-title text-lg font-bold mb-4">Service Availability</h5>
                    <ul className="list-none space-y-8 text-sm">
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Monday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Tuesday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Wednesday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Thursday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Friday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Saturday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                        <li className="flex flex-row justify-between">
                            <span className="font-bold">Sunday:</span> <span>09:00am - 11:00pm</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card shadow-md mt-4">

                <div className="card-body">
                    <h5 className="card-title text-lg font-bold mb-4">Share the service</h5>
                    <ul className="flex flex-row justify-around">
                        <li className="flex flex-row items-center justify-between mb-2">
                            <a href="#" className="flex flex-row items-center text-2xl">
                                <FaFacebookF className="bg-blue-500 text-white rounded-full" />
                            </a>
                        </li>
                        <li className="flex flex-row items-center justify-between mb-2">
                            <a href="#" className="flex flex-row items-center text-2xl">
                                <FaTwitter className="bg-blue-400 text-white rounded-full" />
                            </a>
                        </li>
                        <li className="flex flex-row items-center justify-between mb-2">
                            <a href="#" className="flex flex-row items-center text-2xl">
                                <FaLinkedinIn className="bg-blue-800 text-white rounded-full" />
                            </a>
                        </li>
                        <li className="flex flex-row items-center justify-between mb-2">
                            <a href="#" className="flex flex-row items-center text-2xl">
                                <FaWhatsapp className="bg-green-500 text-white rounded-full" />
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export { ServiceSidebar };
