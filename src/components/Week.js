import Day from "./Day";

function Week({days, reservations, directionOfSwipe}) {
    return (
        <div className="days">
            {days.map((day) =>{return <Day key={day} day={day} reservations={reservations} directionOfSwipe={directionOfSwipe}></Day>})}
        </div>
    );
}export default Week