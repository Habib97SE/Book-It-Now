import ServiceCard from "./service-card";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ServiceSection() {
    return (
        <section className="bg-pinkTint">
            <div
                className="container mx-auto p-4 w-4/5"
            >
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Featured Categories</h2>
                        <p className="text-gray-600 mt-2">New Services</p>
                    </div>
                    <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white">
                        View All <FaArrowRight className="pl-2 " />
                    </Link>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ServiceCard />
                    <ServiceCard />
                    <ServiceCard />
                </div>
            </div>

        </section>
    );
}

export { ServiceSection };