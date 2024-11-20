import { Booking } from "@/app/types/booking-types";
import { removeBooking } from "@/models/booking-model";

function BookingCard({ item }: { item: Booking }) {
    console.log(item);

    const handleClick = () => {

        const deleteBooking = async () => {
            const response = await removeBooking(item.id);
            if (response) {
                console.log("Booking has been cancelled");
            } else {
                console.log("Booking has not been cancelled");
            }
        }

        // show alert to confirm cancellation
        const confirm = window.confirm("Are you sure you want to cancel this booking?");
        if (confirm) {
            // cancel booking
            console.log("Booking has been cancelled");
            deleteBooking();
        } else {
            // do nothing
            console.log("Booking has not been cancelled");
        }
    }

    return (
        <div className="card shadow-md m-3 inline-block">
            <div className="flex flex-row justify-between items-center bg-white p-2 my-2 rounded-lg">
                <div>
                    <h1>booking id: {item.id}</h1>
                    <h1>time start: {item.bookingDateTimeStart}</h1>
                    <h1>time end: {item.bookingDateTimeEnd}</h1>
                    <h1>service item id: {item.serviceItemId}</h1>
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        className="bg-red-500 text-white px-2 py-1 rounded-lg">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export { BookingCard };