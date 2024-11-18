import axios from "axios";

const BASE_URL = "http://localhost:8080/api/bookings";

function getBookingsByServiceId(serviceId: number) {
    return axios.get(`${BASE_URL}/services/${serviceId}`);
}

function getBookingsByUserId(userId: number) {
    return axios.get(`${BASE_URL}/users/${userId}`);
}
