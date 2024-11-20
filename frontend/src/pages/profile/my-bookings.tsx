import { BookingCard } from "@/components/booking-card";
import { ProfileSidebar } from "@/components/profile/sidebar";
import ServiceCard from "@/components/service-card";
import { getBookingsByUserId } from "@/models/booking-model";
import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import useSWR from "swr";

function MyBookingPage() {

    const { user } = useUser();

    const { data, error, isLoading } = useSWR(user?.id, getBookingsByUserId);

    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <Head>
                <title>My Bookings</title>
                <meta name="description" content="Dashboard" />
            </Head>
            <div className="grid grid-cols-3 gap-3 mx-4 my-3">
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
                                    <BookingCard key={booking.id} item={booking} />
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