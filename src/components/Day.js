import Moment from "react-moment";
import TimeSlot from "./TimeSlot";


function Day({day, reservations}) {
    const dayAsString = day.format("YYYY-MM-DD");
    const slots = ['08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00']

    return (
        <>
            <div className="slots">
                    <p className="day-number"><Moment format={"DD"}>{day}</Moment></p>
                    <p className="day-text"><Moment format={"dddd"}>{day}</Moment></p>
                    {slots.map((slot) => {
                        return <TimeSlot key={dayAsString + slot} day={dayAsString} start={slot} reservations={reservations}></TimeSlot>
                    })}
            </div>
        </>
    );
}export default Day