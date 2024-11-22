import Link from "next/link";
import { FaArrowRight, FaCalendar, FaRegCalendar } from "react-icons/fa";
import Image from "next/image";

function HomeBlogSection() {
    return (
        <section className="bg-white mx-auto py-10">
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-black">Choose What To Do</h2>
                        <p className="text-gray-600 mt-2">
                            Explore our latest blog posts to discover insights and tips for choosing the right services.
                        </p>
                    </div>
                    <Link
                        href="https://app.truelysell.com/all-categories"
                        className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white"
                    >
                        View All <FaArrowRight className="pl-2" />
                    </Link>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="bg-pinkTint rounded-xl p-3 w-[300px]">
                        <Image
                            src="/images/blog-article-2.webp"
                            alt="How to choose an electrical service provider"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">
                            How to Choose an Electrical Service Provider
                        </h2>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <div className="flex items-center text-black">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <Link
                                href="https://app.truelysell.com/all-categories"
                                className="inline-flex items-center text-pink-600 font-medium px-5 py-2 transition-all duration-500"
                            >
                                Read More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                    <div className="bg-pinkTint rounded-xl p-3 w-[300px]">
                        <Image
                            src="/images/blog-article-3.jpg"
                            alt="How to choose an electrical service provider"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">
                            How to Choose an Electrical Service Provider
                        </h2>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <div className="flex items-center text-black">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <Link
                                href="https://app.truelysell.com/all-categories"
                                className="inline-flex items-center text-pink-600 font-medium px-5 py-2 transition-all duration-500"
                            >
                                Read More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                    <div className="bg-pinkTint rounded-xl p-3 w-[300px]">
                        <Image
                            src="/images/blog-article-1.webp"
                            alt="How to choose an electrical service provider"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover rounded-xl"
                        />
                        <h2 className="text-black my-3 font-bold mx-3">
                            How to Choose an Electrical Service Provider
                        </h2>
                        <footer className="flex justify-between items-center py-3 px-2">
                            <div className="flex items-center text-black">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <Link
                                href="https://app.truelysell.com/all-categories"
                                className="inline-flex items-center text-pink-600 font-medium px-5 py-2 transition-all duration-500"
                            >
                                Read More <FaArrowRight className="pl-2" />
                            </Link>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { HomeBlogSection };
