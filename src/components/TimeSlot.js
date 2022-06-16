import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useState} from "react";
import moment from "moment";

function TimeSlot({day, start, reservations}) {
    const [inCart, setInCart] = useState(false);
    const isPast = moment(day+ " "+  start).isBefore(moment());
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
        //TODO: add reservation to cart in backend
        console.log("reserve")
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