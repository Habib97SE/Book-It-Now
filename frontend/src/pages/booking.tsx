import { Calendar } from "@/components/calendar";
import { useState } from "react";

function BookingPage() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const phone = formData.get("phone");
        const date = formData.get("date");
        const time = formData.get("time");
        const address = formData.get("address");
        const city = formData.get("city");
        const message = formData.get("message");

        console.log(name, phone, date, time, address, city, message);

        e.target.reset();

        setShowModal(true);
    };

    const BookingConfirmationModal = () => {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="flex justify-center items-center bg-white rounded-lg shadow-lg p-10">
                    <svg
                        width="133px"
                        height="133px"
                        viewBox="0 0 133 133"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <g
                            id="check-group"
                            className="animate-check-group origin-center"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <circle
                                id="filled-circle"
                                className="fill-[#78B348]"
                                cx="66.5"
                                cy="66.5"
                                r="54.5"
                            ></circle>
                            <circle
                                id="white-circle"
                                className="fill-white animate-circle origin-center"
                                cx="66.5"
                                cy="66.5"
                                r="55.5"
                            ></circle>
                            <circle
                                id="outline"
                                className="stroke-[#78B348] stroke-[4] animate-outline origin-center"
                                cx="66.5"
                                cy="66.5"
                                r="54.5"
                            ></circle>
                            <polyline
                                id="check"
                                className="stroke-white stroke-[4] animate-check"
                                points="41 70 56 85 92 49"
                            ></polyline>
                        </g>
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <>
            {showModal && <BookingConfirmationModal />}
            <div className="flex flex-row justify-center items-center my-5">
                <div>
                    <h1 className="text-4xl text-center font-bold">Booking Service</h1>
                    <span className="block border-b-2 border-howItWorksIcon w-1/2 mx-auto mt-1"></span>
                </div>
            </div>
            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-2 gap-6 my-3">
                                <div>
                                    <label htmlFor="name" className="text-gray-600">Name <span className="text-red-500 text-lg">*</span></label>
                                    <input type="text" id="name" name="name" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                                <div >
                                    <label htmlFor="phone" className="text-gray-600">Phone <span className="text-red-500 text-lg">*</span></label>
                                    <input type="text" id="phone" name="phone" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 my-3">
                                <div>
                                    <label htmlFor="date" className="text-gray-600">Date <span className="text-red-500 text-lg">*</span></label>
                                    <input type="date" id="date" name="date" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                                <div>
                                    <label htmlFor="time" className="text-gray-600">Time <span className="text-red-500 text-lg">*</span></label>
                                    <input type="time" id="time" name="time" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6 my-3">
                                <div>
                                    <label htmlFor="address" className="text-gray-600">Address <span className="text-red-500 text-lg">*</span></label>
                                    <input type="text" id="address" name="address" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                                <div>
                                    <label htmlFor="city" className="text-gray-600">City <span className="text-red-500 text-lg">*</span></label>
                                    <input type="text" id="city" name="city" required={true} className="w-full border border-gray-200 p-2 rounded-lg" />
                                </div>
                            </div>
                            <div className="my-3">
                                <label htmlFor="message" className="text-gray-600">Message <span className="text-red-500 text-lg">*</span></label>
                                <textarea name="message" id="message" cols={30} rows={10} className="w-full border border-gray-200 p-2 rounded-lg"></textarea>
                            </div>
                            <div className="my-3">
                                <input type="checkbox" id="terms" name="terms" required={true} />
                                <label htmlFor="terms" className="text-lg ml-2">I agree to the <a href="#" className="text-primaryColor">terms and conditions</a></label>
                            </div>
                            <div className="my-3">
                                <input type="submit" value={"Book Now"} required={true} className="py-4 px-5 cursor-pointer mt-4 bg-howItWorksIcon text-white text-lg rounded-lg hover:bg-primaryColorHover " />
                            </div>

                        </form>
                    </div>
                    <div className="col-span-1">
                        <div className="w-10/12 mx-auto card shadow-md p-4">
                            <div className="flex flex-row items-center border-b-2 border-gray-100">
                                <img src="https://cdn.bokadirekt.se/ucdn/1ea38723-07e1-4a08-bfb7-b65f2388b276/-/quality/better/-/preview/60x60/"
                                    width={50}
                                    height={50}
                                />

                                <div className="pl-4">
                                    <p className="font-bold">Senso Kreator</p>
                                    <p className="text-gray-500">Monday 18 November, 2024, @ 12:30</p>
                                    <p className="font-bold">Anna</p>
                                </div>
                            </div>
                            <div className="my-2 py-2 border-b-2">
                                <ul>
                                    <li className="flex flex-row justify-between px-3"><span className="font-bold">Haircut</span><span>900 SEK</span></li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex flex-row justify-between font-bold">Total<span>900 SEK</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Calendar />
            </div>
        </>
    );
}

export default BookingPage;
