import axios from "axios";

const BASE_URL: string = "http://localhost:8080/api/v1/service-items/";

async function getTimeSlots(query: object) {
    console.log(query);
    try {
        const response = await axios.get(
            `${BASE_URL}${query.serviceId}/timeslots?date=${query.date}`
        );
        console.log(response.data);
        return response.data;
    } catch (error) {
        return new Error("Something went wrong: " + error.getMessage());
    }
}

async function getServiceById(id: number) {
    try {
        const response = await axios.get(`${BASE_URL}${id}`);
        return response.data;
    } catch (error) {
        return new Error("Something went wrong: " + error.getMessage());
    }
}

export { getTimeSlots, getServiceById };
