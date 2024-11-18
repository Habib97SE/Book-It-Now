type Day = {
    dayName: string;
    dayNumber: number;
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

function getDaysInWeek(): Day[] {
    const days: Day[] = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        days.push({
            dayName: date.toLocaleString("en-US", { weekday: "long" }),
            dayNumber: date.getDate(),
        });
    }
    console.log(days);
    return days;
}

export { getDaysInMonth, getDaysInWeek };
