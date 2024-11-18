type Time = {
    hour: string;
    minute: string;
};

type Day = {
    dayName: string;
    dayNumber: number;
};

type TimeSlot = {
    from: Time;
    to: Time;
};

function getDaysInMonth(month: number, year: number): Day[] {
    const date = new Date(year, month, 1);
    const days: Day[] = [];
    while (date.getMonth() === month) {
        days.push({
            // dayName should be in enghlish
            dayName: date.toLocaleString("en-US", { weekday: "long" }),
            dayNumber: date.getDate(),
        });
        date.setDate(date.getDate() + 1);
    }
    console.log(days);
    return days;
}

function getDaysInWeek(weekNumber: number): Day[] {
    const date = new Date();
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
        (date.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    const firstDayOfWeek = new Date(
        date.getFullYear(),
        0,
        1 + (weekNumber - 1) * 7 - firstDayOfYear.getDay()
    );
    const days: Day[] = [];
    for (let i = 0; i < 7; i++) {
        days.push({
            dayName: firstDayOfWeek.toLocaleString("en-US", {
                weekday: "long",
            }),
            dayNumber: firstDayOfWeek.getDate(),
        });
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
    }
    return days;
}

function getCurrentWeeksNumber(): number {
    const date = new Date();
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
        (date.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function getTimeSlots(): {
    from: { hour: string; minute: string };
    to: { hour: string; minute: string };
}[] {
    const timeslots = [];
    for (let i = 10; i < 19; i++) {
        timeslots.push({
            from: { hour: i.toString(), minute: "00" },
            to: { hour: i.toString(), minute: "30" },
        });
        timeslots.push({
            from: { hour: i.toString(), minute: "30" },
            to: { hour: (i + 1).toString(), minute: "00" },
        });
    }
    console.log(timeslots);
    return timeslots;
}

export {
    getDaysInMonth,
    getDaysInWeek,
    getCurrentWeeksNumber,
    getTimeSlots,
    Day,
    TimeSlot,
};
