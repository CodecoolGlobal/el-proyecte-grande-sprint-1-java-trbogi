import Day from "./Day";

function Days({days, reservations}) {
    return (
        <div className="days">
            {days.map((day) =>{return <Day day={day} reservations={reservations}></Day>})}
        </div>
    );
}export default Days