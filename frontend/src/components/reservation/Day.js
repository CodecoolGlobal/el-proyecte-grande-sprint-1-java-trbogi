import Moment from "react-moment";
import TimeSlot from "./TimeSlot";

function Day(props) {
    const dayAsString = props.day.format("YYYY-MM-DD");
    const slots = ['08:00',
        '10:00',
        '12:00',
        '14:00',
        '16:00',
        '18:00']

    return (
        <>
            <div className={`slots ${props.directionOfSwipe}`}>
                    <p className="day-number"><Moment format={"DD"}>{props.day}</Moment></p>
                    <p className="day-text"><Moment format={"dddd"}>{props.day}</Moment></p>
                    {slots.map((slot) => {
                        return <TimeSlot key={dayAsString + slot} day={dayAsString} start={slot} reservations={props.reservations} setReservations={props.setReservations} reservationsInCart={props.reservationsInCart} setReservationsInCart={props.setReservationsInCart}/>
                    })}
            </div>
        </>
    );
}

export default Day