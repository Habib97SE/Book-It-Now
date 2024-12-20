import { useState } from "react";
import { Square } from "./square";

type TimeSlot = {
    from: { hour: number; minute: number };
    to: { hour: number; minute: number };
};

type DayWithTimeSlots = {
    dayName: string;
    dayNumber: number;
    timeSlots: string[]; // Timeslots as strings, e.g., "10:00-10:30"
};

function Calendar({
    timeslots,
    handleBookedTime,
    onPreviousWeek,
    onNextWeek,
}: {
    timeslots: Record<string, string[]>;
    handleBookedTime: (details: { day: string; time: string }) => void;
    onPreviousWeek: () => void;
    onNextWeek: () => void;
}) {
    const [selectedSquare, setSelectedSquare] = useState<{ date: string; time: string } | null>(null);

    const handleChoosingTimeSlot = (date: string, timeSlot: string) => {
        setSelectedSquare({ date, time: timeSlot });
        handleBookedTime({
            day: date,
            time: timeSlot,
        });
    };

    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <div className="flex flex-row items-center gap-2">
                <button
                    onClick={onPreviousWeek}
                    className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColorHover"
                >
                    Previous
                </button>
                <button
                    onClick={onNextWeek}
                    className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColorHover"
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {timeslots &&
                    Object.keys(timeslots).map((date) => {
                        return (
                            <div key={date} className="flex flex-col items-center gap-2">
                                <h3 className="text-md font-semibold">
                                    {date.split("-")[1] + "-" + date.split("-")[2]}
                                </h3>
                                {timeslots[date].map((timeSlot) => {
                                    return (
                                        <Square
                                            key={timeSlot}
                                            timeslot={timeSlot}
                                            isSelected={
                                                selectedSquare?.date === date &&
                                                selectedSquare?.time === timeSlot
                                            }
                                            handleChooseTimeSlot={() => handleChoosingTimeSlot(date, timeSlot)}
                                        />
                                    );
                                })}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export { Calendar };