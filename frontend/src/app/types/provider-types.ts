type Provider = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    website: string;
    description: string;
    logo: string;
    cover: string;
    facebook: string;
    instagram: string;
    createdAt: Date;
    updatedAt: Date;
};

type Service = {
    id: number;
    name: string;
    description: string;
    price: number;
    durationInMinutes: number;
    startTime: string;
    endTime: string;
    image: string;
    category: string;
    createdAt: Date;
    updatedAt: Date;
};

type ServicesAndProvider = {
    provider: Provider;
    services: Service[];
};

export type { Provider, Service, ServicesAndProvider };
