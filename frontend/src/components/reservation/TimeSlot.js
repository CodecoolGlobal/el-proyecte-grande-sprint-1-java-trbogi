import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useContext, useState} from "react";
import moment from "moment";
import {CourtContext} from "./TimeTable";
import AuthContext from "../context/AuthContext";

function TimeSlot(props) {
    const {authTokens, user} = useContext(AuthContext);
    const [courtContext, ] = useContext(CourtContext);
    const slotsStartTime = props.day+ " "+  props.start;
    const [inCart, setInCart] = useState(false);
    const isPast = moment(slotsStartTime).isBefore(moment());
    const isReserved = () => {
        for (const reservation of props.reservations) {
            const timeData = reservation.startTime.split(" ");
            const reservationDate = timeData[0];
            const reservationStart = timeData[1]
            if (reservationDate === props.day && reservationStart === props.start && reservation['paid'] == true){
                return true;
            }
        }
        return false;
    }

    const isInCart = () => {
        for (const reservation of props.reservationsInCart) {
            const timeData = reservation.startTime.split(" ");
            const reservationDate = timeData[0];
            const reservationStart = timeData[1];
            if (reservationDate === props.day && reservationStart === props.start){
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
        return(<p style={{backgroundColor: "#fcb7b4"}}>{props.start}</p>)
    }else if(isInCart()) {
        return (<p style={{backgroundColor: "#CED9FF"}} onClick={removeReservationFromCart}>{props.start} <br/>
            <BsBagDash/></p>)
    }else if(isPast){
            return (<p style={{backgroundColor: "rgb(211, 211, 211, 0.8)"}}/>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}} onClick={addReservationToCart}>{props.start} <br/>
            <BsBagPlusFill className="addToCartIcon"/></p>)
    }
}

export default TimeSlot