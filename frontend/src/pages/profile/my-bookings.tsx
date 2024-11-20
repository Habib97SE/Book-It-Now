import { BookingCard } from "@/components/booking-card";
import { ProfileSidebar } from "@/components/profile/sidebar";
import { Toast } from "@/components/toast";
import { getBookingsByUserId } from "@/models/booking-model";
import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import useSWR from "swr";
import { useState } from "react";
import { BreadCrumbs } from "@/components/BreadCrumbs";

function MyBookingPage() {
    const { user } = useUser();

    const { data, error, isLoading } = useSWR(user?.id, getBookingsByUserId);

    // Toast state
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<"success" | "error" | "info" | "warning">("success");

    // Function to show toast
    const showToast = (message: string, type: "success" | "error" | "info" | "warning") => {
        setToastMessage(message);
        setToastType(type);
        setToastVisible(true);
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
                <BreadCrumbs items={[
                    {
                        title: "Home",
                        url: "/"
                    },
                    {
                        title: "My Bookings",
                        url: "/profile/my-bookings"
                    }
                ]} />
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
                        <div>
                            {/* A list of bookings */}
                            <h1>
                                <span className="text-4xl text-center font-bold text-black">My Bookings</span>
                            </h1>
                            <div className="flex flex-row flex-wrap justify-around items-center my-5 bg-white">
                                {data?.map((booking) => (
                                    <BookingCard
                                        key={booking.id}
                                        item={booking}
                                        onShowToast={showToast} // Pass showToast as a prop
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyBookingPage;
