import { useRouter } from "next/router"
import { FaLocationArrow, FaStar } from "react-icons/fa";
import Image from 'next/image';
import Head from "next/head";
import { ServiceSidebar } from "@/components/service-sidebar";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { TabSection } from "@/components/tab";
import useSWR from "swr";
import { getServicesByProviderId } from "@/models/provider-model";

function Barber() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return (
            <div className="flex flex-row justify-center items-center">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>
        );
    }

    const { data, error, isLoading } = useSWR(id, getServicesByProviderId);

    if (isLoading || !data) {
        return <div>Loading...</div>; // Show a loading state while fetching data
    }

    if (error) {
        return <div>Failed to load data</div>; // Handle fetch errors
    }

    const { provider, services } = data;

    return (
        <>
            <Head>
                <title>{provider?.name || "Barber"}</title> {/* Fallback to "Barber" if name is missing */}
                <meta name="description" content="Barber" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full mx-auto bg-white text-black my-3 ">
                <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10 mb-4">
                    <h1 className="text-2xl font-semibold text-black">Barbers</h1>
                    <BreadCrumbs items={[
                        { title: "Home", url: "/" },
                        { title: "Barbers", url: "/barbers" },
                        { title: provider?.name || "Loading...", url: `/barbers/${id}` },
                    ]} />
                </header>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* First Column (70%) */}
                    <div className="md:w-8/12 w-full">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold my-3">{provider?.name}</h1>
                            <div className="flex items-center gap-2 my-3 capitalize text-gray-600">
                                <FaLocationArrow />
                                <span>{`${provider?.country || ""} ${provider?.city || ""}`}</span>
                                <FaStar className="text-gray-500" />
                                <FaStar className="text-gray-500" />
                                <FaStar className="text-gray-500" />
                                <FaStar className="text-gray-500" />
                                <FaStar className="text-gray-500" />
                                <span>(0)</span>
                            </div>
                            <div className="badge badge-primary py-4 px-6 rounded-lg text-white my-3">
                                Hair cut
                            </div>
                            <Image
                                src={provider?.logo || "/default-logo.png"} // Provide a fallback image
                                alt="Barber"
                                width={500}
                                height={500}
                                className="w-full object-cover rounded-lg"
                            />
                            <TabSection logo={provider?.logo} description={provider?.description} services={services} />
                        </div>
                    </div>

                    {/* Second Column (30%) */}
                    <div className="md:w-4/12 w-full">
                        <ServiceSidebar item={provider} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Barber;
