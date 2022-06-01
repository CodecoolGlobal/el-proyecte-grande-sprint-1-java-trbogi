import Moment from "react-moment";


function Day({day}) {
    return (
        <>
            <div className="slots">
                    <p className="day-number"><Moment format={"DD"}>{day}</Moment></p>
                    <p className="day-text"><Moment format={"dddd"}>{day}</Moment></p>
                    <p>08:00 - 10:00<br/>Edző bácsi</p>
                    <p>10:00 - 12:00<br/>Edző bácsi</p>
                    <p>12:00 - 14:00<br/>Edző bácsi</p>
                    <p>Reserved <br/>Edző bácsi</p>
                    <p>16:00 - 18:00 <br/>Edző bácsi</p>
                    <p>18:00 - 20:00<br/>Edző bácsi</p>
            </div>
        </>
    );
}export default Day