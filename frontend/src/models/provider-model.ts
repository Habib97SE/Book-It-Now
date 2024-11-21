import {
    Provider,
    Service,
    ServicesAndProvider,
} from "@/app/types/provider-types";
import axios from "axios";

const BASE_URL: string = "http://localhost:8080/api/v1/providers";

async function getProviders(): Promise<Provider[] | Error> {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            return new Error("Something went wrong: " + error.message);
        }
        return new Error("Something went wrong, please try again later");
    }
}

async function getProviderById(id: number): Promise<Provider | Error> {
    try {
        console.log(id);
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
        return new Error("Something went wrong: " + error.getMessage());
    }
}

async function getServicesByProviderId(
    id: number
): Promise<ServicesAndProvider | Error> {
    try {
        const provider: Provider = await getProviderById(id);
        const services: Service[] = await axios.get(
            `${BASE_URL}/${id}/services`
        );

        const providerAndServices: ServicesAndProvider = {
            provider: provider,
            services: services.data,
        };

        console.log(providerAndServices);

        return providerAndServices;
    } catch (error) {
        if (error instanceof Error) {
            return new Error("Something went wrong: " + error.message);
        }
        return new Error("Something went wrong, please try again later");
    }
}

export { getProviders, getProviderById, getServicesByProviderId };
