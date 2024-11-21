// components/HowItWorks.js
import Image from 'next/image';

function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
                    <p className="mt-3 text-gray-600">To book an appointment is easy</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 p-4">
                        <div
                            className="work-wrap-box work-first  p-6 text-center"
                            data-aos="fade-up"
                        >
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-02.svg"
                                        alt="Amazing Places"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Visit our website</h5>
                            <p className="text-gray-600 mt-2">
                                Visit the services you are interested in and book an appointment
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-4">
                        <div className="work-wrap-box work-second bg-white rounded-lg p-6 text-center" data-aos="fade-up">
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-01.svg"
                                        alt="Find What You Want"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Book your appointment</h5>
                            <p className="text-gray-600 mt-2">
                                If you find a service you like, book an appointment, you can see a calendar with all available times and dates
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-white rounded-lg  p-6 text-center" data-aos="fade-up">
                            <div className="mb-4">
                                <span className="inline-block bg-howItWorksIcon py-5 px-7 rounded-lg">
                                    <Image
                                        src="https://app.truelysell.com/assets/img/icons/work-icon-03.svg"
                                        alt="Choose What To Do"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </span>
                            </div>
                            <h5 className="text-lg font-semibold text-gray-800">Go to the address</h5>
                            <p className="text-gray-600 mt-2">
                                Go to the address of the service provider and enjoy your service
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export { HowItWorks };