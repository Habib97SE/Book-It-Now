import { useRouter } from "next/router"
import { FaLocationArrow, FaStar } from "react-icons/fa";
import Image from 'next/image';
import Head from "next/head";
import { ServiceSidebar } from "@/components/service-sidebar";
import { BreadCrumbs } from "@/components/BreadCrumbs";
import { TabSection } from "@/components/tab";
function Barber() {
    const router = useRouter();

    const { id } = router.query;

    return (
        <>
            <Head>
                <title>Barber</title>
                <meta name="description" content="Barber" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="w-11/12 mx-auto bg-white text-black my-3">
                <BreadCrumbs items={[
                    { title: "Home", url: "/" },
                    { title: "Barber", url: `/barbers/${id}` },
                ]} />
                <div className="flex flex-col md:flex-row gap-4">
                    {/* First Column (70%) */}
                    <div className="md:w-8/12 w-full">
                        <div className="card shadow-md">
                            <div className="card-body">
                                <div className=" w-full">
                                    <h1 className="text-3xl font-bold">Barber</h1>
                                    <div className="flex items-center gap-2">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <span>5.0</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaLocationArrow />
                                        <span>USA, Kansas city</span>
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <span>5.0</span>
                                    </div>
                                    <div className="badge badge-primary py-4 px-6 rounded-lg text-white my-2">
                                        Hair cut
                                    </div>
                                    <Image
                                        src="https://app.truelysell.com/uploads/services/se_full_1631787344service-05.jpg"
                                        alt="Barber"
                                        width={500}
                                        height={500}
                                        className="w-full object-cover rounded-lg"
                                    />
                                    <TabSection />
                                </div>


                            </div>


                        </div>
                        <div>
                            <h2>Related Services</h2>
                            <div>
                                <Image
                                    src="https://app.truelysell.com/uploads/services/se_full_1631787344service-05.jpg"
                                    alt="Barber"
                                    width={100}
                                    height={100}
                                />
                                <h3>Service 1</h3>
                            </div>
                        </div>
                    </div>

                    {/* Second Column (30%) */}
                    <div className="md:w-4/12 w-full">
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Barber;