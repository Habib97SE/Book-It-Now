type BookingRequest = {
    userId: string;
    serviceItemId: string;
    email: string;
    phone: string;
    bookingDateTimeStart: string;
    bookingDateTimeEnd: string;
    durationInMinutes: number;
    notes: string;
};

type Booking = {
    id: number;
    bookingNumber: string;
    userId: number;
    serviceItemId: number;
    email: string;
    phone: string;
    bookingDateTimeStart: string;
    bookingDateTimeEnd: string;
    durationInMinutes: number;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
};

export type { BookingRequest, Booking };
