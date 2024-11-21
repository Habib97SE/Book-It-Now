import { BreadCrumbs } from "@/components/BreadCrumbs";
import Head from "next/head";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";  // Import icons

function ContactPage() {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // reset the form
        e.target.reset();

        console.log(name, email, message);
    }

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10 mb-8">
                <h1 className="text-4xl font-semibold text-black mb-2">Contact Us</h1>
                <p className="text-lg text-gray-600 mb-6">We’d love to hear from you! Reach out to us for inquiries, support, or feedback.</p>
                <BreadCrumbs items={[
                    {
                        title: "Home",
                        url: "/"
                    },
                    {
                        title: "Contact",
                        url: "/contact"
                    },
                ]} />
            </header>

            <div className="container w-10/12 mx-auto py-6">
                <section className="mb-8">
                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600 mb-6">
                        If you have any questions or need assistance, feel free to fill out the form below, and we’ll get back to you as soon as possible. Your feedback helps us improve our services!
                    </p>
                    <div className="flex space-x-10 mb-8">
                        <div className="flex items-center">
                            <FaPhoneAlt className="text-primaryColor mr-2" />
                            <span className="text-lg">+46- 8 123 45 67</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-primaryColor mr-2" />
                            <span className="text-lg">support@bookitnow.se</span>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-primaryColor mr-2" />
                            <span className="text-lg">Lustgardsgatan 19, Stockholm, Sweden</span>
                        </div>
                    </div>
                </section>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="text-gray-700 font-medium">Name <span className="text-red-500">*</span></label>
                            <input type="text" id="name" name="name" required className="w-full border border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="message" className="text-gray-700 font-medium">Message <span className="text-red-500">*</span></label>
                        <textarea name="message" id="message" cols={30} rows={6} className="w-full border border-gray-300 p-3 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>

                    <input type="submit" value="Send Message" className="mt-6 py-3 px-6 bg-primaryColor text-white text-lg rounded-lg hover:bg-primaryColorHover cursor-pointer transition duration-300" />
                </form>
            </div>
        </>
    )
}

export default ContactPage;
