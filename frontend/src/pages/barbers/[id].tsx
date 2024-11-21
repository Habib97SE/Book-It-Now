import { useRouter } from "next/router"
import { FaLocationArrow, FaStar } from "react-icons/fa";
import Image from 'next/image';
import Head from "next/head";
import { ServiceSidebar } from "@/components/service-sidebar";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { TabSection } from "@/components/tab";
import { BarberCard } from "@/components/barber-card";
import { useEffect, useState } from "react";
import { Provider } from "@/app/types/provider-types";
import { getProviderById, getServicesByProviderId } from "@/models/provider-model";
import useSWR from "swr";

function Barber() {
    const router = useRouter();

    const { id } = router.query;

    if (!id) {
        return <div className="flex flex-row justify-center items-center">

            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

        </div>
    }

    const { data, error, isLoading } = useSWR(id, getServicesByProviderId);


    if (error) return <div>Failed to load</div>

    if (isLoading) return <div>Loading...</div>


    return (
        <>
            <Head>
                <title>Barber</title>
                <meta name="description" content="Barber" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-full mx-auto bg-white text-black my-3 ">
                <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10 mb-4">
                    <h1 className="text-2xl font-semibold text-black">Barbers</h1>
                    <BreadCrumbs items={[
                        {
                            title: "Home",
                            url: "/"
                        },
                        {
                            title: "Barbers",
                            url: "/barbers"
                        },
                        {
                            title: data?.provider?.name,

                            url: `/barbers/${id}`
                        }
                    ]} />
                </header>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* First Column (70%) */}
                    <div className="md:w-8/12 w-full">
                        <div className="">
                            <div className="card-body">
                                <div className=" w-full">
                                    <h1 className="text-3xl font-bold my-3">{data?.provider?.name}</h1>

                                    <div className="flex items-center gap-2 my-3 capitalize text-gray-600">
                                        <FaLocationArrow />
                                        <span>{data?.provider?.country + " " + data?.provider?.city}</span>

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
                                        src={data?.provider?.logo}

                                        alt="Barber"
                                        width={500}
                                        height={500}
                                        className="w-full object-cover rounded-lg"
                                    />
                                    <TabSection logo={data.provider?.logo} description={data.provider?.description} services={data?.services} />

                                </div>


                            </div>


                        </div>
                        <div
                            className="px-5 mx-auto"
                        >


                        </div>
                    </div>

                    {/* Second Column (30%) */}
                    <div className="md:w-4/12 w-full">
                        <ServiceSidebar item={data.provider} />

                    </div>
                </div>
            </div>
        </>

    )
}

export default Barber;