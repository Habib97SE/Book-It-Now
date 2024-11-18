import { TimeSlot } from "../../app/utils/date-helper";

function Square({
    timeslot,
    isBooked,
    handleChooseTimeSlot,
}: {
    timeslot: TimeSlot;
    isBooked: boolean;
    handleChooseTimeSlot: () => void;
}) {
    const handleClickOnSquare = () => {
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
                {timeslot.from.hour}:{timeslot.from.minute} <br /> {timeslot.to.hour}:{timeslot.to.minute}
            </span>
        </div>
    );
}

export { Square };
