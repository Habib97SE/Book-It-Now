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

    const { data: serviceData, error: serviceError, isLoading: serviceLoading } = useSWR(parseInt(item.serviceItemId), getServiceById);

    const { data: providerData, error: providerError, isLoading: providerLoading } = useSWR(serviceData?.providerId, getProviderById);

    const deleteBooking = async () => {
        const response = await removeBooking(item.id);
        if (response) {
            console.log("Booking has been cancelled");
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

        const confirm = window.confirm(
            "Are you sure you want to cancel this booking?"
        );
        if (confirm) {
            deleteBooking();
        }
    };

    /**
     * Function to format time in 24 hours format
     * @param time string : time in string format
     * @returns string : formatted time in 24 hours format
     */
    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
        });
    }

    const formatDate = (time: string) => {
        return new Date(time).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }

    if (serviceLoading || providerLoading) return <div>Loading...</div>;

    if (serviceError || providerError) return <div>Error: {serviceError?.message || providerError?.message}</div>;




    return (
        <div className="bookingsss w-full my-2">
            <div className="booking-list flex flex-row justify-between items-center border border-gray-50 p-4 rounded-lg shadow-md bg-white">
                <div className="booking-widget flex">
                    {/* Booking Image */}
                    <a
                        href="https://app.truelysell.com/service-preview/plumbing-services"
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

                    {/* Booking Details */}
                    <div className="booking-det-info flex-grow ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {serviceData.name}

                        </h3>
                        <ul className="booking-details text-sm text-gray-600 space-y-2">
                            <li>
                                <span className="font-medium">Booking Id</span>: {item.bookingNumber}
                            </li>
                            <li className="li-date flex items-center">
                                <span className="font-medium">Booking Date</span>: {formatDate(item.bookingDateTimeStart)} {formatTime(item.bookingDateTimeStart)} - {formatTime(item.bookingDateTimeEnd)}

                            </li>
                            <li>
                                <span className="font-medium">Amount</span>: {serviceData.price} SEK
                            </li>
                            <li>
                                <span className="font-medium">Location</span>: {providerData.city}, {providerData.country}
                            </li>
                            <li>
                                <span className="font-medium">Provider</span>: &nbsp;
                                <div className="user-book flex flex-row items-center justify-around">
                                    <div className="w-6 h-6 overflow-hidden rounded-full mr-2">
                                        <Image
                                            src={providerData.logo}
                                            alt={providerData.name}
                                            width={24}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span>{providerData?.name}</span>
                                    <p className="my-3 text-sm text-gray-500 flex flex-row items-center"><FaPhone className="mr-3" /> {providerData.phone}</p>
                                    <p className="mt-3text-sm text-gray-500 flex flex-row items-center"><FaEnvelope className="mr-3" /> {providerData.email}</p>
                                </div>

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
        </div>
    );
}

export { BookingCard };
