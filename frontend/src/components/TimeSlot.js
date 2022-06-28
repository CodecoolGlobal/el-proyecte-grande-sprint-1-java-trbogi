import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useState} from "react";
import moment from "moment";

function TimeSlot({day, start, reservations}) {
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
        const reservationData = { "startTime": slotsStartTime, "userId": "9e455fb2-82ab-4d4f-ad7c-d0513bd0eef1", "courtNumber": 1 };
        fetch('http://localhost:8080/api/cart/add-reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reservationData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
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