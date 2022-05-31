import Day from "./Day";

function Days({days}) {
    return (
        <div className="days">
            {days.map((day) =>{return <Day day={day}></Day>})}
        </div>
    );
}export default Days