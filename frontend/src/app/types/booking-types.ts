type BookingRequest = {
    userId: string;
    serviceItemId: string;
    bookingDateTimeStart: string;
    bookingDateTimeEnd: string;
    durationInMinutes: number;
    notes: string;
};

type Booking = {
    id: number;
    userId: number;
    serviceItemId: number;
    bookingDateTimeStart: string;
    bookingDateTimeEnd: string;
    durationInMinutes: number;
    notes: string;
    createdAt: Date;
    updatedAt: Date;
};

export type { BookingRequest, Booking };
