import Day from "./Day";

function Week({days, reservations}) {
    return (
        <div className="days">
            {days.map((day) =>{return <Day day={day} reservations={reservations}></Day>})}
        </div>
    );
}export default Week