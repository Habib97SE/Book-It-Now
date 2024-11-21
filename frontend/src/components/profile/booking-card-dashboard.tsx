import { Booking } from '@/app/types/booking-types';
import { getProviderById } from '@/models/provider-model';
import { getServiceById } from '@/models/service-model';
import useSWR from 'swr';
import Image from 'next/image';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

function BookingCardDashboard({ item }: { item: Booking }) {
    const { data: serviceData, error: serviceError, isLoading: serviceLoading } = useSWR(
        parseInt(item.serviceItemId),
        getServiceById
    );
    const { data: providerData, error: providerError, isLoading: providerLoading } = useSWR(
        serviceData?.providerId,
        getProviderById
    );

    if (serviceLoading || providerLoading) return <div>Loading...</div>;
    if (serviceError || providerError) return <div>Error: {serviceError?.message || providerError?.message}</div>;

    const formatTime = (time: string) => {
        return new Date(time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
        });
    };

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="card shadow-lg rounded-lg p-5 bg-white text-gray-800 mr-3">
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3 mb-3">
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold">{serviceData?.name}</h1>
                    <p className="text-sm text-gray-500">by {providerData?.name}</p>
                </div>
                <Image
                    src={serviceData?.image}
                    alt={serviceData?.name}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] rounded-full shadow-md"
                />
            </div>

            {/* Booking Details */}
            <div className="flex flex-col gap-2">
                {/* Booking Date */}
                <div className="flex items-center gap-2 text-sm">
                    <FaCalendarAlt className="text-blue-500" />
                    <span>{formatDate(item.bookingDateTimeStart)}</span>
                </div>

                {/* Booking Time */}
                <div className="flex items-center gap-2 text-sm">
                    <FaClock className="text-green-500" />
                    <span>
                        {formatTime(item.bookingDateTimeStart)} - {formatTime(item.bookingDateTimeEnd)}
                    </span>
                </div>

                {/* Contact Details */}
                <div className="flex flex-col gap-1 mt-2">
                    <div className="flex items-center gap-2 text-sm">
                        <FaUser className="text-purple-500" />
                        <span>{item.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <FaEnvelope className="text-yellow-500" />
                        <span>{item.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <FaPhone className="text-red-500" />
                        <span>{item.phone}</span>
                    </div>
                </div>
            </div>

            {/* Notes */}
            {item.notes && (
                <div className="mt-4 p-3 border rounded-lg bg-gray-50 text-sm">
                    <p className="font-semibold text-gray-600">Notes:</p>
                    <p>{item.notes}</p>
                </div>
            )}
        </div>
    );
}

export { BookingCardDashboard };
