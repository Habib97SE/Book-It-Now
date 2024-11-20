import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Calendar } from "@/components/calendar/calendar";
import { getTimeSlots } from "@/models/service-model";

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

function BookingPage() {
    const { user, isLoading: userLoading } = useUser();
    const router = useRouter();
    const { id } = router.query;

    const [selectedDetails, setSelectedDetails] = useState({
        date: "",
        time: "",
    });

    const [bookingDetails, setBookingDetails] = useState({
        name: user?.fullName || "",
        phone: user?.phoneNumbers?.[0]?.phoneNumber || "",
        userId: user?.id,
        email: user?.primaryEmailAddress?.emailAddress || "",
        date: "",
        time: "",
        message: "",
    });

    const handleBookedTime = (date: string, time: string) => {
        console.log("handleBookedTime has been clicked");
        console.log(date, time);
        setSelectedDetails({
            date: date.day,
            time: date.time,
        });

        console.dir(selectedDetails);
    }

    const [showModal, setShowModal] = useState(false);

    // Ensure the user is loaded before proceeding
    useEffect(() => {
        if (!user && !userLoading) {
            console.log("User not logged in");
        }
    }, [user, userLoading, router]);

    const { data, error, isLoading } = useSWR({ serviceId: id, date: getCurrentDate() }, getTimeSlots);

    console.log(`selectedDetails: ${selectedDetails.date}, ${selectedDetails.time}`);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setBookingDetails({
            ...bookingDetails,
            date: selectedDetails.date,
            time: selectedDetails.time,
        });
        console.log(bookingDetails);
    };

    // Check if the user is loading or not
    if (userLoading) return <div>Loading user data...</div>;

    if (error) return <div className="bg-red-500 px-4 py-4 text-white w-full text-center">Failed to load</div>;

    if (isLoading) return <div>Loading time slots...</div>;

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

                            <Calendar timeslots={data} handleBookedTime={handleBookedTime} />
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
                                            ? `Date: ${selectedDetails.date}, \nTime: ${selectedDetails.time}`
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
