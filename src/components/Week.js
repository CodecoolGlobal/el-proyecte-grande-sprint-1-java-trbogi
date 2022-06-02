import Day from "./Day";

function Week({days, reservations}) {
    return (
        <div className="days">
            {days.map((day) =>{return <Day key={day} day={day} reservations={reservations}></Day>})}
        </div>
    );
}export default Week