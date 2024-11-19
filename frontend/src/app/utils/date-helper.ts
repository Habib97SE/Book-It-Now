type Time = {
    hour: string;
    minute: string;
};

type Day = {
    dayName: string;
    dayNumber: number;
};

type Days = {
    month: string;
    year: number;
    days: Day[];
};

type TimeSlot = {
    from: Time;
    to: Time;
};

function getDaysInMonth(month: number, year: number): Days {
    const date = new Date(year, month - 1, 1);
    const days: Day[] = [];
    while (date.getMonth() === month - 1) {
        days.push({
            dayName: date.toLocaleString("en-US", {
                weekday: "long",
            }),
            dayNumber: date.getDate(),
        });
        date.setDate(date.getDate() + 1);
    }
    return [
        date.toLocaleString("en-US", { month: "long" }),
        date.getFullYear(),
        days,
    ];
}

function getDaysInWeek(weekNumber: number): Days {
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
    return {
        month: firstDayOfWeek.toLocaleString("en-US", { month: "long" }),
        year: firstDayOfWeek.getFullYear(),
        days,
    };
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
    return timeslots;
}

function getMonthNameOnWeekNumber(weekNumber: number): string {
    const date = new Date();
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear =
        (date.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    const firstDayOfWeek = new Date(
        date.getFullYear(),
        0,
        1 + (weekNumber - 1) * 7 - firstDayOfYear.getDay()
    );
    return firstDayOfWeek.toLocaleString("en-US", {
        month: "long",
    });
}

export {
    getDaysInMonth,
    getDaysInWeek,
    getCurrentWeeksNumber,
    getTimeSlots,
    getMonthNameOnWeekNumber,
    Day,
    Days,
    TimeSlot,
};
