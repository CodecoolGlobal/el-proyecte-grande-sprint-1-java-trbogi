import Day from "./Day";

function Week(props) {
    return (
        <div className="days">
            {props.days.map((day) => {return <Day key={day} day={day} directionOfSwipe={props.directionOfSwipe}/>})}
        </div>
    );
}

export default Week