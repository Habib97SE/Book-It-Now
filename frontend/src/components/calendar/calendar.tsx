"use client";
import { Days, getCurrentWeeksNumber, getDaysInWeek, getTimeSlots, TimeSlot } from "@/app/utils/date-helper";
import { useEffect, useState } from "react";
import { Square } from "./square";

type DayWithTimeSlots = {
    dayName: string;
    dayNumber: number;
    timeSlots: TimeSlot[];
};

function Calendar({ handleBookedTime }: { handleBookedTime: (details: { day: string; time: string }) => void }) {
    const [days, setDays] = useState<Days>(getDaysInWeek(getCurrentWeeksNumber()));
    const [currentWeekNumber, setCurrentWeekNumber] = useState(getCurrentWeeksNumber());
    const [daysWithTimeSlots, setDaysWithTimeSlots] = useState<DayWithTimeSlots[]>(initializeDaysWithTimeSlots());
    const [chosenTimeSlot, setChosenTimeSlot] = useState<{ dayIndex: number; timeslotIndex: number } | null>(null);



    useEffect(() => {
        setDays(getDaysInWeek(currentWeekNumber));
        setDaysWithTimeSlots(initializeDaysWithTimeSlots());
        setChosenTimeSlot(null); // Clear selection when switching weeks

    }, [currentWeekNumber]);

    function initializeDaysWithTimeSlots(): DayWithTimeSlots[] {
        return getDaysInWeek(currentWeekNumber).days.map((day) => ({
            dayName: day.dayName,
            dayNumber: day.dayNumber,
            timeSlots: getTimeSlots().map((slot) => ({ ...slot, isBooked: false })), // Each day gets its own time slots
        }));
    }

    const handleChoosingTimeSlot = (dayIndex: number, timeslotIndex: number) => {
        setDaysWithTimeSlots((prev) => {
            // Create a new array with all time slots reset
            const updatedDays = prev.map((day, dIndex) => ({
                ...day,
                timeSlots: day.timeSlots.map((slot, tIndex) => ({
                    ...slot,
                    isBooked: dIndex === dayIndex && tIndex === timeslotIndex, // Only the selected slot is booked
                })),
            }));

            handleBookedTime({
                date: `${daysWithTimeSlots[dayIndex].dayName}, ${daysWithTimeSlots[dayIndex].dayNumber}`,
                time: `${daysWithTimeSlots[dayIndex].timeSlots[timeslotIndex].from.hour}:${daysWithTimeSlots[dayIndex].timeSlots[timeslotIndex].from.minute}`,
            })

            return updatedDays;
        });

        // Update the currently chosen time slot
        setChosenTimeSlot({ dayIndex, timeslotIndex });
    };

    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">
            <h1 className="text-2xl font-bold">Calendar</h1>
            <h2 className="text-lg font-semibold">
                {days.month} {days.year}
            </h2>
            <div className="flex flex-row items-center gap-2">
                <button
                    className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColorHover"
                    onClick={() => setCurrentWeekNumber(currentWeekNumber - 1)}
                >
                    Previous
                </button>
                <button
                    className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColorHover"
                    onClick={() => setCurrentWeekNumber(currentWeekNumber + 1)}
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {daysWithTimeSlots.map((day, dayIndex) => (
                    <div
                        key={dayIndex}
                        className="flex flex-col items-center gap-2 p-2 border border-gray-200 rounded-lg"
                    >
                        <span className={day.dayName === "Saturday" ? "text-red-500" : "text-black"}>
                            {day.dayName}
                        </span>
                        <span>{day.dayNumber}</span>
                        {day.timeSlots.map((timeslot, timeslotIndex) => (
                            <Square
                                key={timeslotIndex}
                                timeslot={timeslot}
                                isBooked={timeslot.isBooked}
                                handleChooseTimeSlot={() => handleChoosingTimeSlot(dayIndex, timeslotIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export { Calendar };
