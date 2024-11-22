import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function ServiceSection() {
    return (
        <section className="bg-pinkTint">
            <div className="container mx-auto p-4 w-4/5 flex flex-col justify-center items-center">
                <div className="flex justify-between items-center mb-6 w-full">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Categories</h2>
                        <p className="text-gray-600 mt-2">New Services</p>
                    </div>
                    <Link
                        href="/barbers"
                        className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white"
                    >
                        View All <FaArrowRight className="pl-2 " />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Service Card */}
                    {[
                        {
                            image: "/images/frisor-lockar-har.jpg",
                            title: "Hair Cut",
                            description:
                                "A hairstyle, hairdo, or haircut refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair.",
                        },
                        {
                            image: "/images/nail-art.jpg",
                            title: "Nail Art",
                            description:
                                "Nail Art is a creative way to paint, decorate, enhance, and embellish the nails. It is a type of artwork that can be done on fingernails and toenails.",
                        },
                        {
                            image: "/images/spa.jpg",
                            title: "Spa",
                            description:
                                "Spa is a location where mineral-rich spring water is used to give medicinal baths. Spa towns or resorts typically offer various health treatments.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        className="rounded-lg w-full"
                                        width={300}
                                        height={300}
                                    />
                                    <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                                        {service.title}
                                    </h2>
                                </div>
                                <h2 className="text-black text-xl font-bold mt-2">{service.title}</h2>
                                <p className="text-gray-500 my-2">{service.description}</p>
                            </div>
                            <footer className="mt-4">
                                <Link
                                    className="bg-primaryColor text-white px-4 py-2 rounded-lg w-full text-center block"
                                    href={`/booking/${index + 1}`}
                                >
                                    Book
                                </Link>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export { ServiceSection };
