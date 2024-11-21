import ServiceCard from "./service-card";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import Image from "next/image";

function ServiceSection() {
    return (
        <section className="bg-pinkTint min-h-screen">
            <div
                className="container mx-auto p-4 w-4/5 flex flex-col justify-center items-center"
            >
                <div className="flex flex-row justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Categories</h2>
                        <p className="text-gray-600 mt-2">New Services</p>
                    </div>
                    <Link href="/barbers" className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white">
                        View All <FaArrowRight className="pl-2 " />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className='bg-white p-4 rounded-xl shadow-md inline-block'>
                        <div className="relative">
                            <Image
                                src="/images/frisor-lockar-har.jpg"
                                alt="Hair Cut"
                                className='rounded-lg w-full'
                                width={300}
                                height={300}
                            />
                            <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                                Hair Cut
                            </h2>
                        </div>
                        <h2 className="text-black text-xl font-bold mt-2">Featured Category</h2>
                        <p className='text-gray-500 flex flex-row items-center my-2'>


                        </p>
                        <footer className='text-black flex flex-row justify-between'>

                            <div>
                                <p>
                                    A hairstyle, hairdo, or haircut refers to the styling of hair, usually on the human scalp. Sometimes, this could also mean an editing of facial or body hair. The fashioning of hair can be considered an aspect of personal grooming, fashion, and cosmetics, although practical, cultural, and popular considerations also influence some hairstyles.
                                </p>
                                <Link className='bg-primaryColor text-white px-4 py-2 rounded-lg' href={`/booking/1`}>
                                    Book
                                </Link>
                            </div>

                        </footer>
                    </div><div className='bg-white p-4 rounded-xl shadow-md inline-block'>
                        <div className="relative">
                            <Image
                                src="/images/nail-art.jpg"
                                alt="Hair Cut"
                                className='rounded-lg w-full'
                                width={300}
                                height={300}
                            />
                            <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                                Nail Art
                            </h2>
                        </div>
                        <h2 className="text-black text-xl font-bold mt-2">Nail</h2>
                        <p className='text-gray-500 flex flex-row items-center my-2'>

                            Nail Art is a creative way to paint, decorate, enhance, and embellish the nails. It is a type of artwork that can be done on fingernails and toenails, usually after manicures or pedicures. A manicure and a pedicure are beauty treatments that trim, shape, and polish the nail. Often these procedures remove the cuticles and soften the skin around the nails.

                        </p>
                        <footer className='text-black flex flex-row justify-between'>

                            <div>

                                <Link className='bg-primaryColor text-white px-4 py-2 rounded-lg' href={`/booking/1`}>
                                    Book
                                </Link>
                            </div>

                        </footer>
                    </div>
                    <div className='bg-white p-4 rounded-xl shadow-md inline-block'>
                        <div className="relative">
                            <Image
                                src="/images/spa.jpg"
                                alt="Hair Cut"
                                className='rounded-lg w-full'
                                width={300}
                                height={300}
                            />
                            <h2 className="absolute top-3 left-3 bg-pinkTint text-primaryColor rounded-xl py-1 px-2">
                                Spa
                            </h2>
                        </div>
                        <h2 className="text-black text-xl font-bold mt-2">Spa</h2>
                        <p className='text-gray-500 flex flex-row items-center my-2'>


                        </p>
                        <footer className='text-black flex flex-row justify-between'>

                            <div>
                                <p>
                                    Spa is a location where mineral-rich spring water (and sometimes seawater) is used to give medicinal baths. Spa towns or spa resorts (including hot springs resorts) typically offer various health treatments, which are also known as balneotherapy. The belief in the curative powers of mineral waters goes back to prehistoric times. Such practices have been popular worldwide, but are especially widespread in Europe and Japan. Day spas are also quite popular and offer various personal care treatments.
                                </p>
                                <Link className='bg-primaryColor text-white px-4 py-2 rounded-lg' href={`/booking/1`}>
                                    Book
                                </Link>
                            </div>

                        </footer>
                    </div>

                </div>
            </div>

        </section>
    );
}

export { ServiceSection };