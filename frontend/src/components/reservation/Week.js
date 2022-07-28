import Day from "./Day";

function Week(props) {
    return (
        <div className="days">
            {props.days.map((day) => {return <Day key={day} day={day} reservations={props.reservations} setReservations={props.setReservations} reservationsInCart={props.reservationsInCart} setRservationsInCart={props.setReservationsInCart} directionOfSwipe={props.directionOfSwipe}/>})}
        </div>
    );
}

export default Week