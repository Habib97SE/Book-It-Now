import { Day, getCurrentWeeksNumber, getDaysInWeek, getTimeSlots, TimeSlot } from "@/app/utils/date-helper";
import { useState } from "react";
import { Square } from "./square";
function Calendar() {

    const [days, setDays] = useState<Day[]>(getDaysInWeek(getCurrentWeeksNumber()));
    const [currentWeekNumber, setCurrentWeekNumber] = useState(getCurrentWeeksNumber());
    const [timeslots, setTimeslots] = useState<TimeSlot[]>(getTimeSlots());

    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <div className="flex flex-row items-center gap-2">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => {
                        setCurrentWeekNumber(currentWeekNumber - 1);
                        setDays(getDaysInWeek(currentWeekNumber));
                    }}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => {
                        setCurrentWeekNumber(currentWeekNumber + 1);
                        setDays(getDaysInWeek(currentWeekNumber));
                    }}
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">

                {days.map((day, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 p-2 border border-gray-200 rounded-lg"
                    >
                        <span className={`${day.dayName === 'Saturday' ? "text-red-500" : "text-black"}`}>{day.dayName}</span>
                        <span>{day.dayNumber}</span>
                        {timeslots.map((timeslot, index) => (
                            <Square key={index} timeslot={timeslot} />
                        ))}
                    </div>
                ))}
            </div>
        </div>

    );
}

export { Calendar }