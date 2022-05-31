import Moment from "react-moment";


function Day({day}) {
    return (
        <>
            <div className="slots">
                    <p className="day-number"><Moment format={"DD"}>{day}</Moment></p>
                    <p className="day-text"><Moment format={"dddd"}>{day}</Moment></p>
                    <p>06:00 - 08:00</p>
                    <p>08:00 - 10:00</p>
                    <p>10:00 - 12:00</p>
                    <p>12:00 - 14:00</p>
                    <p>14:00 - 16:00</p>
                    <p>16:00 - 18:00</p>
                    <p>18:00 - 20:00</p>
                    <p>20:00 - 22:00</p>
            </div>
        </>
    );
}export default Day