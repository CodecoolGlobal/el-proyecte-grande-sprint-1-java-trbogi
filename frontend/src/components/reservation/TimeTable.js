import Header from "./Header";
import Week from "./Week";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";
import moment from "moment";
import {useEffect, useState, createContext, useContext} from "react";
import AuthContext from "../context/AuthContext";
import ReservationsContext from "../context/ReservationsContext";

export const CourtContext = createContext("1");

function TimeTable() {
    const startOfWeek = moment().startOf('isoweek');
    const monday = startOfWeek;
    const tuesday = startOfWeek.clone().add(1, 'days');
    const wednesday = startOfWeek.clone().add(2, 'days');
    const thursday = startOfWeek.clone().add(3, 'days');
    const friday = startOfWeek.clone().add(4, 'days');
    const saturday = startOfWeek.clone().add(5, 'days');
    const sunday = startOfWeek.clone().add(6, 'days');
    const [days, setDays] = useState([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);
    const [directionOfSwipe, setDirectionOfSwipe] = useState("right");
    const [court, setCourt] = useState("1");
    const {user} = useContext(AuthContext);
    const {getReservations, getReservationsInCartByCourt} = useContext(ReservationsContext);

    useEffect(() => getReservations(court, days[0].format("yyyy-MM-DD")),[court])
    useEffect(() => getReservationsInCartByCourt(user, court), [court])


    const isCurrentWeek = () => {
        return days[0].isSame(moment().startOf('isoWeek'));
    }

    const turnPage = async (amount) => {
        for (let i = 0; i < days.length; i++) {
            days[i] = days[i].clone().add(amount, 'week')
        }
        setDirectionOfSwipe(amount === 1 ? "right" :"left");
        const startOfNextWeek = days[0].format("yyyy-MM-DD");
        getReservations(court, startOfNextWeek);
        getReservationsInCartByCourt();
        setDays([...days])
    }

    return(
        <CourtContext.Provider value={[court, setCourt]}>
                <div className="container" >
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
                        <FaAngleLeft size={40} visibility={isCurrentWeek() ? "hidden":"visible"} onClick={() => turnPage(-1)}/>
                        <div className="timetable">
                            <Header directionOfSwipe={directionOfSwipe} yearAndMonth={days[0].format("YYYY. MMMM")}/>
                            <Week directionOfSwipe={directionOfSwipe} days={days}/>
                        </div>
                        <FaAngleRight size={40} onClick={() => turnPage(1)}/>

                    </div>
                </div>
        </CourtContext.Provider>
    )
}

export default TimeTable