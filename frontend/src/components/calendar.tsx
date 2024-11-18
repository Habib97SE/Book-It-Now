import { getDaysInWeek } from "@/app/utils/date-helper";
function Calendar() {

    getDaysInWeek();

    return (
        <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 p-4">

        </div>

    );
}

export { Calendar }