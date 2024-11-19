import Link from "next/link";
import { FaArrowRight, FaCalendar, FaRegCalendar } from "react-icons/fa";

function HomeBlogSection() {
    return (

        <>
            <section className="bg-pinkTint mx-auto">
                <div className="w-4/5 mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-black">Choose What To Do</h2>
                            <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                        </div>
                        <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center bg-pink-100 rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500 hover:bg-pink-500 hover:text-white">
                            View All <FaArrowRight className="pl-2 " />
                        </Link>
                    </div>

                    <div className="inline-block bg-white rounded-xl my-3 mr-3">
                        <img src="https://app.truelysell.com/uploads/blogs/1660053900service-28.jpg" />
                        <h2 className="text-black my-3 font-bold mx-3">How to choose a electrical service provider?</h2>
                        <footer className="flex flex-row justify-between items-center py-3 px-2">
                            <div className="flex flex-row items-center text-black justify-center">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <div>
                                <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500">
                                    Read More <FaArrowRight className="pl-2 " />
                                </Link>
                            </div>
                        </footer>
                    </div>

                    <div className="inline-block bg-white rounded-xl my-3 mr-3">
                        <img src="https://app.truelysell.com/uploads/blogs/1660053900service-28.jpg" />
                        <h2 className="text-black my-3 font-bold mx-3">How to choose a electrical service provider?</h2>
                        <footer className="flex flex-row justify-between items-center py-3 px-2">
                            <div className="flex flex-row items-center text-black justify-center">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <div>
                                <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500">
                                    Read More <FaArrowRight className="pl-2 " />
                                </Link>
                            </div>
                        </footer>
                    </div>

                    <div className="inline-block bg-white rounded-xl my-3 mr-3">
                        <img src="https://app.truelysell.com/uploads/blogs/1660053900service-28.jpg" />
                        <h2 className="text-black my-3 font-bold mx-3">How to choose a electrical service provider?</h2>
                        <footer className="flex flex-row justify-between items-center py-3 px-2">
                            <div className="flex flex-row items-center text-black justify-center">
                                <FaRegCalendar />
                                <p className="pl-2">09 Aug 2024</p>
                            </div>
                            <div>
                                <Link href="https://app.truelysell.com/all-categories" className="inline-flex items-center rounded-full text-pink-600 font-medium px-5 py-2 transition-all duration-500">
                                    Read More <FaArrowRight className="pl-2 " />
                                </Link>
                            </div>
                        </footer>
                    </div>
                </div>

            </section>
        </>

    );
}

export { HomeBlogSection };