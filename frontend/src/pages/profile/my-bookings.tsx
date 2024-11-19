import { ProfileSidebar } from "@/components/profile/sidebar";
import ServiceCard from "@/components/service-card";
import Head from "next/head";

function MyBookingPage() {
    return (
        <div>
            <Head>
                <title>My Bookings</title>
                <meta name="description" content="Dashboard" />
                <link rel="icon" hrxef="/favicon.ico" />
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
                            <div className="flex flex-row justify-center items-center my-5 bg-white">
                                <div className="mx-2">
                                    <ServiceCard />
                                </div>
                                <div className="mx-2">
                                    <ServiceCard />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyBookingPage;