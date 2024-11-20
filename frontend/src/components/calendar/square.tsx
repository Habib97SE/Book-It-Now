function Square({
    timeslot,
    isSelected,
    handleChooseTimeSlot,
}: {
    timeslot: string;
    isSelected: boolean;
    handleChooseTimeSlot: () => void;
}) {
    const handleClickOnSquare = () => {
        if (!isSelected) {
            handleChooseTimeSlot(); // Trigger the provided callback

        }
    };

    return (
        <div
            onClick={handleClickOnSquare}
            className={`border border-gray-200 p-2 rounded-lg ${isSelected ? "bg-gray-200 cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            <span>{timeslot}</span>

        </div>
    );
}

export { Square };
