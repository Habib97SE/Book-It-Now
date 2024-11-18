import { TimeSlot } from "../../app/utils/date-helper";

function Square({ timeslot, isBooked }: { timeslot: TimeSlot, isBooked: boolean }) {
    return (
        <div className="border border-gray-200 p-2 rounded-lg">
            <span>{isBooked ? 'Booked' : 'Available'}</span>
            <span>{timeslot.from.hour}:{timeslot.from.minute}</span>
            <span> - </span>
            <span>{timeslot.to.hour}:{timeslot.to.minute}</span>
        </div>
    );
}

export { Square }