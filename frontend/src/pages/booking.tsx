import { Calendar } from "@/components/calendar/calendar";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

function BookingPage() {

    const { user } = useUser();


    const handlePhoneNumber = () => {
        const phones = user?.phoneNumbers;
        if (phones?.length > 0) {
            // return the first phone number 
            return phones[0].phoneNumber;
        }
        return "";
    }

    const handleName = () => {
        const names = user?.fullName;
        if (names) {
            return names;
        }
        return "";
    }

    const handleEmail = () => {
        const emails = user?.primaryEmailAddress?.emailAddress;
        if (emails) {
            return emails;
        }
        return "";
    }

    const [selectedDetails, setSelectedDetails] = useState({
        date: "",
        time: "",
    });

    const [bookingDetails, setBookingDetails] = useState({
        name: handleName(),
        phone: handlePhoneNumber(),
        userId: user?.id,
        email: handleEmail(),
        date: "",
        time: "",
        message: "",
    });

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setSelectedDetails((prev) => ({ ...prev, [name]: value }));
    };



    const handleSubmit = (e: any) => {
        e.preventDefault();
        bookingDetails.date = selectedDetails.date;
        bookingDetails.time = selectedDetails.time;
        console.log(bookingDetails);

    };





    return (
        <>
            {showModal && (
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
            <div className="flex flex-row justify-center items-center my-5 bg-white">
                <div>
                    <h1 className="text-4xl text-center font-bold">Booking Service</h1>
                    <span className="block border-b-2 border-howItWorksIcon w-1/2 mx-auto mt-1"></span>
                </div>
            </div>
            <div className="container mx-auto mt-10 bg-white text-black">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6 my-3">
                                <div>
                                    <label htmlFor="email" className="text-gray-600">Email <span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={bookingDetails.email}
                                        required={true}
                                        className="w-full border border-gray-200 p-2 rounded-lg bg-white"
                                        onChange={(e) => { setBookingDetails({ ...bookingDetails, email: e.target.value }) }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="text-gray-600">Phone <span className="text-red-500 text-lg">*</span></label>
                                    <input
                                        type="text"
                                        id="phone"
                                        name="phone"
                                        value={bookingDetails.phone}
                                        required={true}
                                        className="w-full border border-gray-200 p-2 rounded-lg bg-white"
                                        onChange={(e) => { setBookingDetails({ ...bookingDetails, phone: e.target.value }) }}
                                    />
                                </div>
                            </div>

                            <Calendar handleBookedTime={setSelectedDetails} />
                            <div className="my-3">
                                <label htmlFor="message" className="text-gray-600">Message <span className="text-red-500 text-lg">*</span></label>
                                <textarea
                                    name="message"
                                    id="message"
                                    cols={30}
                                    rows={10}
                                    className="w-full border border-gray-200 p-2 rounded-lg bg-white"
                                    onChange={(e) => { setBookingDetails({ ...bookingDetails, message: e.target.value }) }}
                                ></textarea>
                            </div>

                        </form>
                    </div>
                    <div className="col-span-1">
                        <div className="w-10/12 mx-auto card shadow-md p-4">
                            <div className="flex flex-row items-center border-b-2 border-gray-100">
                                <img
                                    src="https://cdn.bokadirekt.se/ucdn/1ea38723-07e1-4a08-bfb7-b65f2388b276/-/quality/better/-/preview/60x60/"
                                    width={50}
                                    height={50}
                                />
                                <div className="pl-4">
                                    <p className="font-bold">Senso Kreator</p>
                                    <p className="text-gray-500">
                                        {selectedDetails.date
                                            ? `Date: ${selectedDetails.date}, Time: ${selectedDetails.time}`
                                            : "No date and time selected"}
                                    </p>
                                    <p className="font-bold capitalize">{user?.fullName}</p>
                                    <p className="text-gray-500">{bookingDetails.phone}</p>
                                    {/* Comment */}

                                    {bookingDetails.message && (
                                        <p className="bg-gray-200 p-3 my-2 capitalize">
                                            {bookingDetails.message}
                                        </p>
                                    )}
                                </div>

                            </div>
                            <div className="my-2  border-b-2">
                                <ul>
                                    <li className="flex flex-row justify-between my-4"><span className="font-bold">Haircut</span><span>900 SEK</span></li>
                                </ul>
                            </div>
                            <div>
                                <p className="flex flex-row justify-between font-bold">Total<span>900 SEK</span></p>
                            </div>
                            <div className="my-4">
                                <div className="my-4">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms" className="text-gray-600 px-2">
                                        I agree to the terms and conditions
                                    </label>
                                </div>
                                <button
                                    onClick={handleSubmit}
                                    className="bg-primaryColor hover:bg-primaryColorHover   text-white px-4 py-2 w-full rounded-lg">
                                    Book Now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BookingPage;
