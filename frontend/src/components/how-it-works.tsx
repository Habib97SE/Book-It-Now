import Image from 'next/image';

function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">How to Book Your Appointment Online</h2>
                    <p className="mt-3 text-gray-600">Learn the simple steps to find and book the perfect service tailored to your needs.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-full md:w-1/3 p-4">
                        <div
                            className="work-wrap-box work-first p-6 text-center"
                            data-aos="fade-up"
                        >
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-02.svg"
                                        alt="Explore Trusted Service Providers"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Explore Trusted Service Providers</h5>
                            <p className="text-gray-600 mt-2">
                                Browse our website to discover a wide range of professional service providers in your area.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-4">
                        <div className="work-wrap-box work-second bg-white rounded-lg p-6 text-center" data-aos="fade-up">
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-01.svg"
                                        alt="Schedule Your Service Appointment"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Schedule Your Service Appointment</h5>
                            <p className="text-gray-600 mt-2">
                                Choose your preferred service, check availability on the calendar, and book an appointment that fits your schedule.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-white rounded-lg p-6 text-center" data-aos="fade-up">
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-03.svg"
                                        alt="Enjoy Professional Service"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Enjoy Professional Service</h5>
                            <p className="text-gray-600 mt-2">
                                Visit the provider’s location at the scheduled time and enjoy a seamless, top-quality service experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { HowItWorks };
