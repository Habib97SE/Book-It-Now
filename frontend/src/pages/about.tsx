import { BreadCrumbs } from "@/components/BreadCrumbs";
import Head from "next/head";

function AboutPage() {
    return (
        <div>
            <Head>
                <title>About Us | Book It Now</title>
            </Head>
            <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10 mb-4">
                <h1 className="text-2xl font-semibold text-black">Contact</h1>
                <BreadCrumbs items={[
                    {
                        title: "Home",
                        url: "/"
                    },
                    {
                        title: "About us",
                        url: "/about"
                    },

                ]} />
            </header>

            <main className="container mx-auto px-6 md:px-12 lg:px-24 py-12">
                <section className="mb-10 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Welcome to Book It Now</h2>
                    <p className="text-lg text-gray-700">
                        Your ultimate platform for seamless appointment bookings and service discovery in the world of beauty and wellness. Whether you're looking to schedule a haircut, explore intricate nail art, or indulge in a spa session, we've got you covered.
                    </p>
                </section>

                <section className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center">What We Offer</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-bold mb-2">💇‍♂️ For Customers</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>Barbers:</strong> Browse experienced professionals and book your haircut effortlessly.</li>
                                <li><strong>Nail Artists:</strong> Explore stunning nail art galleries and schedule your appointment.</li>
                                <li><strong>Spas:</strong> Recharge at top-rated spas offering massages, aromatherapy, and more.</li>
                                <li><strong>Easy Scheduling:</strong> View real-time availability and confirm instantly.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">📣 For Providers</h4>
                            <ul className="space-y-3 text-gray-700">
                                <li><strong>Showcase Services:</strong> Display your work portfolio to attract clients.</li>
                                <li><strong>Build Trust:</strong> Collect reviews to enhance your credibility.</li>
                                <li><strong>Manage Effortlessly:</strong> Organize appointments via our dashboard.</li>
                                <li><strong>No Tech Skills Needed:</strong> Focus on your craft, and we'll handle the tech.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-12 text-center">
                    <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-50 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">🚀 Convenience</h4>
                            <p>Book and confirm appointments anytime, anywhere with ease.</p>
                        </div>
                        <div className="p-6 bg-gray-50 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">🔒 Verified Professionals</h4>
                            <p>Carefully verified providers ensure the highest quality care.</p>
                        </div>
                        <div className="p-6 bg-gray-50 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">🎯 Personalized Experience</h4>
                            <p>Recommendations tailored to your preferences and needs.</p>
                        </div>
                        <div className="p-6 bg-gray-50 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">💰 Transparency</h4>
                            <p>View clear pricing upfront with no hidden costs.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-700">
                        We bridge the gap between beauty and wellness enthusiasts and skilled providers, creating a platform for effortless discovery and bookings.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-semibold mb-6 text-center">How It Works</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-gray-100 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">For Customers</h4>
                            <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li><strong>Discover:</strong> Use search filters to find services near you.</li>
                                <li><strong>Book:</strong> Choose a time and confirm your appointment.</li>
                                <li><strong>Enjoy:</strong> Arrive at your scheduled time and enjoy the experience!</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-100 shadow rounded">
                            <h4 className="text-xl font-bold mb-3">For Providers</h4>
                            <ul className="list-disc ml-6 space-y-2 text-gray-700">
                                <li><strong>Sign Up:</strong> Create your profile and list services.</li>
                                <li><strong>Manage:</strong> Use tools to organize and handle appointments.</li>
                                <li><strong>Grow:</strong> Gain exposure and connect with new clients.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="text-center mt-12">
                    <h3 className="text-2xl font-semibold mb-4">Join the Community</h3>
                    <p className="text-lg text-gray-700">
                        🌟 Customers and providers alike are welcome! Start your journey today.
                    </p>
                    <p className="text-lg mt-2 text-gray-700">
                        📞 Contact our support team 24/7. 🌐 Follow us for the latest trends and offers.
                    </p>
                    <p className="text-lg mt-2 font-semibold">
                        🔗 The best time to book is now!
                    </p>
                </section>
            </main>
        </div>
    );
}

export default AboutPage;
