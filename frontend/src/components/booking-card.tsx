import { useState } from "react";
import { Booking } from "@/app/types/booking-types";
import { Provider, Service } from "@/app/types/provider-types";
import { removeBooking } from "@/models/booking-model";
import { getProviderById } from "@/models/provider-model";
import { getServiceById } from "@/models/service-model";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";
import useSWR from "swr";

function BookingCard({
    item,
    onShowToast,
}: {
    item: Booking;
    onShowToast: (message: string, type: "success" | "error" | "info" | "warning") => void;
}) {
    const [isModalOpen, setModalOpen] = useState(false);

    const { data: serviceData, error: serviceError, isLoading: serviceLoading } = useSWR(
        parseInt(item.serviceItemId),
        getServiceById
    );

    const { data: providerData, error: providerError, isLoading: providerLoading } = useSWR(
        serviceData?.providerId,
        getProviderById
    );

    const deleteBooking = async () => {
        const response = await removeBooking(item.id);
        if (response) {
            setModalOpen(false);
            onShowToast("Booking has been cancelled", "success");
        }
    };

    const handleClick = () => {
        const bookingDateTimeStart = new Date(item.bookingDateTimeStart);
        const currentTime = new Date();
        const difference = bookingDateTimeStart.getTime() - currentTime.getTime();
        const hours = difference / (1000 * 3600);

        if (hours < 24) {
            onShowToast(
                "You cannot cancel a booking less than 24 hours before the booking time start",
                "error"
            );
            return;
        }

        setModalOpen(true);
    };

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
        });
    };

    const formatDate = (time: string) => {
        return new Date(time).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (serviceLoading || providerLoading) return <div>Loading...</div>;
    if (serviceError || providerError)
        return <div>Error: {serviceError?.message || providerError?.message}</div>;

    return (
        <div className="bookingsss w-full my-2">
            <div className="booking-list flex flex-row justify-between items-center border border-gray-50 p-4 rounded-lg shadow-md bg-white">
                {/* Booking Details */}
                <div className="booking-widget flex">
                    <a
                        href="#"
                        className="booking-img w-24 h-24 flex-shrink-0 overflow-hidden rounded-md"
                    >
                        <Image
                            src={serviceData?.image}
                            alt={serviceData.name}
                            width={100}
                            height={100}
                            className="object-cover"
                        />
                    </a>
                    <div className="booking-det-info flex-grow ml-4">
                        <h3 className="text-lg capitalize font-semibold text-gray-800">
                            {serviceData.name}
                        </h3>
                        <ul className="booking-details text-sm text-gray-600 space-y-2">
                            <li>
                                <span className="font-medium">Booking Number</span>:{" "}
                                {item.bookingNumber}
                            </li>
                            <li>
                                <span className="font-medium">Booking Date</span>:{" "}
                                {formatDate(item.bookingDateTimeStart)}{" "}
                                {formatTime(item.bookingDateTimeStart)} -{" "}
                                {formatTime(item.bookingDateTimeEnd)}
                            </li>
                            <li>
                                <span className="font-medium">Amount</span>: {serviceData.price} SEK
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Booking Actions */}
                <div className="booking-action flex mt-4 space-x-2">
                    <button
                        onClick={handleClick}
                        className="btn bg-red-100 text-red-600 px-4 py-2 rounded-md flex items-center space-x-1"
                    >
                        <FaTimes />
                        <span>Cancel the Service</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Confirm Cancellation</h3>
                        <p className="py-4">
                            Are you sure you want to cancel this booking? This action cannot be undone.
                        </p>
                        <div className="modal-action">
                            <button
                                onClick={deleteBooking}
                                className="btn bg-red-600 text-white"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="btn bg-gray-300 text-gray-800"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export { BookingCard };
