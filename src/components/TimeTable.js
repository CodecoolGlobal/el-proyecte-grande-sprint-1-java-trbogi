import Header from "./Header"
import Week from "./Week"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import moment from "moment";
import {useState} from "react";

function TimeTable({reservations}) {
    const startOfWeek = moment().startOf('isoweek');
    const monday = startOfWeek;
    const tuesday = startOfWeek.clone().add(1, 'days');
    const wednesday = startOfWeek.clone().add(2, 'days');
    const thursday = startOfWeek.clone().add(3, 'days');
    const friday = startOfWeek.clone().add(4, 'days');
    const saturday = startOfWeek.clone().add(5, 'days');
    const sunday = startOfWeek.clone().add(6, 'days');
    const [days, setDays] = useState([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);


    const turnPage = (amount) => {
        for (let i = 0; i < days.length; i++) {
            days[i] = days[i].clone().add(amount, 'week')
        }
        setDays([...days])
    }
    return(
        <div className="timetable-container-with-arrows">
            <div className="left-side">
                <div className="times">
                    <p>08:00 - 10:00</p>
                    <p>10:00 - 12:00</p>
                    <p>12:00 - 14:00</p>
                    <p>14:00 - 16:00 </p>
                    <p>16:00 - 18:00</p>
                    <p>18:00 - 20:00</p>
                </div>
            </div>
            <FaAngleLeft size={40} onClick={() => {turnPage(-1)}}></FaAngleLeft>
            <div className="timetable">
                <Header startOfWeek={days[0]}></Header>
                <Week days={days} reservations={reservations}></Week>
            </div>
            <FaAngleRight size={40} onClick={() => {turnPage(1)}}></FaAngleRight>

        </div>
    )

}export default TimeTable