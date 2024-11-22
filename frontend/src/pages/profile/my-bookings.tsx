import { useState } from "react";
import Head from "next/head";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { ProfileSidebar } from "@/components/profile/sidebar";
import { Toast } from "@/components/toast";
import { useUser } from "@clerk/nextjs";
import { BookingCard } from "@/components/booking-card";
import useSWR, { mutate } from "swr";
import { getBookingsByUserId } from "@/models/booking-model";

function MyBookingPage() {
    const { user } = useUser();

    const { data, error, isLoading } = useSWR(user?.id, getBookingsByUserId);

    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<"success" | "error" | "info" | "warning">("success");

    const showToast = (message: string, type: "success" | "error" | "info" | "warning") => {
        setToastMessage(message);
        setToastType(type);
        setToastVisible(true);
    };

    const refreshBookings = () => {
        mutate(user?.id); // Re-fetch the bookings by triggering SWR revalidation
    };

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Head>
                <title>My Bookings</title>
                <meta name="description" content="Dashboard" />
            </Head>
            <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10">
                <h1 className="text-2xl font-semibold text-black">Barbers</h1>
                <BreadCrumbs
                    items={[
                        { title: "Home", url: "/" },
                        { title: "My Bookings", url: "/profile/my-bookings" },
                    ]}
                />
            </header>
            <div className="grid grid-cols-3 gap-3 mx-4 my-3">
                {toastVisible && (
                    <Toast
                        message={toastMessage}
                        type={toastType}
                        onClose={() => setToastVisible(false)}
                    />
                )}
                <ProfileSidebar />
                <div className="col-span-2">
                    <div className="p-2 rounded-lg cursor-pointer bg-white">
                        <h1>
                            <span className="text-4xl text-center font-bold text-black">
                                My Bookings
                            </span>
                        </h1>
                        <div className="flex flex-row flex-wrap justify-around items-center my-5 bg-white">
                            {data?.length === 0 && (
                                <div className="text-center text-gray-500">
                                    You have no bookings yet.
                                </div>
                            )}
                            {data?.map((booking) => (
                                <BookingCard
                                    key={booking.id}
                                    item={booking}
                                    onShowToast={showToast}
                                    onCancelSuccess={refreshBookings} // Pass refreshBookings as a prop
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBookingPage;
