import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useContext, useState} from "react";
import moment from "moment";
import {CourtContext} from "../App";

function TimeSlot({day, start, reservations}) {
    const [courtContext, setCourtContext] = useContext(CourtContext);
    const slotsStartTime = day+ " "+  start;
    const [inCart, setInCart] = useState(false);
    const isPast = moment(slotsStartTime).isBefore(moment());
    const isReserved = () => {
        for (const reservation of reservations) {
            const timeData = reservation.startTime.split(" ");
            const reservationDate = timeData[0];
            const reservationStart = timeData[1]
            if (reservationDate === day && reservationStart === start){
                return true;
            }
        }
        return false;
    }

    const addReservationToCart = (e) => {
        //TODO: get userId and courtNumber from context
        const reservationData = { "startTime": slotsStartTime, "userId": "039e1ff5-1ce2-4b74-8182-71cdf21c6479", "courtNumber": 1 };
        fetch('http://localhost:8080/api/cart/add-reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        })
            .then(response => response.ok ? console.log('Success'): console.log('Error'))
            .catch((error) => {
                console.error('Error:', error);
            });
        setInCart(true);
    }

    const removeReservationFromCart = () => {
        //TODO: remove reservation from cart in backend
        setInCart(false);
    }

    if (isReserved()){
        return(<p style={{backgroundColor: "#fcb7b4"}}>{start}</p>)
    }else if(inCart) {
        return (<p style={{backgroundColor: "#CED9FF"}} onClick={removeReservationFromCart}>{start} <br/>
            <BsBagDash></BsBagDash></p>)
    }else if(isPast){
            return (<p style={{backgroundColor: "rgb(211, 211, 211, 0.8)"}}></p>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}} onClick={addReservationToCart}>{start} <br/>
            <BsBagPlusFill className="addToCartIcon"></BsBagPlusFill></p>)
    }
}export default TimeSlot