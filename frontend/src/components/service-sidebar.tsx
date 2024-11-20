import { useState } from "react";
import { useUser, SignIn } from "@clerk/nextjs";
import Image from "next/image";
import { FaCircle, FaEnvelope, FaPhoneAlt, FaBug, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaFacebook, FaLink, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Provider } from "@/app/types/provider-types";

const ServiceSidebar = ({ item }) => {
    const { isSignedIn } = useUser();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleBookService = () => {
        if (!isSignedIn) {
            setModalOpen(true); // Open the modal for signing in
        }
    };

    const closeModal = () => setModalOpen(false);

    console.log(item);

    return (
        <div className="sticky top-32 w-full md:w-[356px]">
            {/* Service Amount */}


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
                                src={item.logo}
                                alt="Provider"
                                className="rounded-full"
                                width={64}
                                height={64}
                            />
                        </div>
                        <div className="ml-4">
                            <a href="#" className="text-primary font-bold">
                                {item.name}
                            </a>
                            <p className="text-sm text-gray-500">
                                <FaCircle className="inline text-green-500 mr-1" />
                                0 secs Online
                            </p>
                            <p className="text-sm text-gray-500">Member since {item.createdAt.toString().split("T")[0]}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-4 bg-gray-50 p-3">
                        <p className="text-sm mb-2">
                            <a href={`mailto:${item.email}`}>
                                <FaEnvelope className="inline mr-2" />
                                {item.email}
                            </a>
                        </p>
                        <p className="text-sm">
                            <a href="tel:+1234567890">
                                <FaPhoneAlt className="inline mr-2" />
                                {item.phone}
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
                    <h1 className="font-bold text0lg">Follow the barber on</h1>
                    <div className="flex justify-center items-center">
                        <a href={item.facebook} className="mx-3">
                            <FaFacebook className="text-xl text-blue-600 rounded-full" />
                        </a>
                        <a href={item.instagram} className="mx-3">
                            <FaInstagram className="text-xl text-blue-400 rounded-full" />
                        </a>
                    </div>
                </div>
            </div>



            <div className="card shadow-md mt-4">
                <div className="card-body">
                    <h5 className="card-title text-lg font-bold mb-4">Share Service</h5>
                    <div className="flex justify-between items-center">
                        <a href="#">
                            <FaFacebook className="text-xl text-blue-600 rounded-full" />
                        </a>
                        <a href="#">
                            <FaXTwitter className="text-xl text-blue-400 rounded-full" />
                        </a>
                        <a href="#">
                            <FaEnvelope className="text-xl text-gray-500 rounded-full" />
                        </a>
                        <a href="#">
                            <FaPhoneAlt className="text-xl text-green-500 rounded-full" />
                        </a>
                        <a href="#">
                            <FaLink className="text-xl text-gray-500 rounded-full" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export { ServiceSidebar };
