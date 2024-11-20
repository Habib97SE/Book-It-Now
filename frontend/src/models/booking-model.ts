import { Booking, BookingRequest } from "@/app/types/booking-types";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/bookings";

async function createBooking(
    booking: BookingRequest
): Promise<Booking | Error> {
    console.log(booking);
    try {
        const response = await axios.post(BASE_URL, booking);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return new Error("Something went wrong: " + error.getMessage());
    }
}

async function getBookingsByUserId(userId: string): Promise<Booking[] | Error> {
    try {
        const response = await axios.get(`${BASE_URL}/user/${userId}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return new Error("Something went wrong: " + error.getMessage());
    }
}

async function removeBooking(bookingId: number) {
    try {
        const response = await axios.delete(`${BASE_URL}/${bookingId}`);
        // if response code is 204 return true
        if (response.status === 204) {
            return true;
        }
    } catch (error) {
        console.log(error);
        return new Error("Something went wrong: " + error.getMessage());
    }
}

export { createBooking, getBookingsByUserId, removeBooking };
