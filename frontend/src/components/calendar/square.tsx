import { TimeSlot } from "../../app/utils/date-helper";

function Square({
    timeslot,
    isBooked,
    handleChooseTimeSlot,
}: {
    timeslot: string;
    isBooked: boolean;
    handleChooseTimeSlot: () => void;
}) {
    const handleClickOnSquare = () => {
        console.log("handleClickOnSquare has been clicked");
        console.log(timeslot);
        if (!isBooked) {
            handleChooseTimeSlot();
        }
    };

    return (
        <div
            onClick={handleClickOnSquare}
            className={`border border-gray-200 p-2 rounded-lg ${isBooked ? "bg-gray-200 cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            <span>
                {timeslot}
            </span>
        </div>
    );
}

export { Square };
