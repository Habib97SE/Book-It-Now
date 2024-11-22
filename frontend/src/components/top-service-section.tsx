import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function TopServicesSection() {
    return (
        <section className="bg-lightBlue py-10">
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Top Services</h2>
                        <p className="text-gray-600 mt-2">
                            Discover our most popular services tailored to meet your needs. Choose the best one for you today.
                        </p>
                    </div>
                    <Link
                        href="/all-services"
                        className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white"
                    >
                        View All <FaArrowRight className="pl-2" />
                    </Link>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-3 w-[300px] shadow-md">
                        <Image
                            src="/images/service-1.webp"
                            alt="Service 1"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">Premium Cleaning Services</h2>
                        <p className="text-gray-600 mx-3">
                            Enjoy a spotless home or office with our top-rated cleaning services.
                        </p>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <Link
                                href="/services/cleaning"
                                className="inline-flex items-center text-blue-600 font-medium px-5 py-2 transition-all duration-500 hover:underline"
                            >
                                Learn More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-xl p-3 w-[300px] shadow-md">
                        <Image
                            src="/images/service-2.jpg"
                            alt="Service 2"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">Professional Handyman</h2>
                        <p className="text-gray-600 mx-3">
                            From repairs to installations, our skilled handymen have got you covered.
                        </p>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <Link
                                href="/services/handyman"
                                className="inline-flex items-center text-blue-600 font-medium px-5 py-2 transition-all duration-500 hover:underline"
                            >
                                Learn More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-xl p-3 w-[300px] shadow-md">
                        <Image
                            src="/images/service-3.png"
                            alt="Service 3"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">Expert IT Support</h2>
                        <p className="text-gray-600 mx-3">
                            Get reliable IT solutions for home or business needs, any time you need them.
                        </p>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <Link
                                href="/services/it-support"
                                className="inline-flex items-center text-blue-600 font-medium px-5 py-2 transition-all duration-500 hover:underline"
                            >
                                Learn More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                </div>
            </div>
        </section>

    );
}

export { TopServicesSection };