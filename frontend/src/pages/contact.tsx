import { BreadCrumbs } from "@/components/BreadCrumbs"
import Head from "next/head"

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
            <header className="bg-white shadow breadcrumbs flex flex-col justify-center items-center py-10 mb-4">
                <h1 className="text-2xl font-semibold text-black">Contact</h1>
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
            <div className="container w-10/12 mx-auto py-2">
                <div>
                    <p>
                        If you have any questions or need help, please contact us by filling out the form below. We will get back to you as soon as possible.

                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name">Name <span className="text-red-500 text-lg">*</span></label>
                            <input type="text" id="name" name="name" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                        <div >
                            <label htmlFor="email">Email <span className="text-red-500 text-lg">*</span></label>
                            <input type="email" id="email" name="email" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message">Message <span className="text-red-500 text-lg">*</span></label>
                        <textarea name="message" id="message" cols={30} rows={10} className="w-full border border-gray-200 p-2 rounded-lg"></textarea>
                    </div>
                    <input type="submit" value={"Send message"} required={true} className="py-4 px-5 cursor-pointer mt-4 bg-howItWorksIcon text-white text-lg rounded-lg hover:bg-primaryColorHover " />
                </form>
            </div>
        </>
    )
}

export default ContactPage