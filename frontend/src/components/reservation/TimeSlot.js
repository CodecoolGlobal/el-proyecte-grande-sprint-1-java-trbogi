import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useContext, useState} from "react";
import moment from "moment";
import {CourtContext} from "./TimeTable";
import AuthContext from "../context/AuthContext";

function TimeSlot({day, start, reservations}) {
    const {authTokens, user} = useContext(AuthContext);
    const [courtContext, ] = useContext(CourtContext);
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
        if (!user){
            alert("Please log in to book a court!")
            return;
        }
        const reservationData = { "startTime": slotsStartTime, "userId": user['userId'], "courtNumber": courtContext };
        fetch('http://localhost:8080/api/cart/add-reservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'Bearer ' + authTokens['access_token']
            },
            body: JSON.stringify(reservationData),
        })
            .then(response =>{
                if (response.ok){
                    console.log('Success')
                    setInCart(true);
                }else if (response.status !== 403){
                    alert("You have to be a member to book a court!")
                }})
            .catch((error) => {
                console.error('Error:', error);
            });
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
}

export default TimeSlot