import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useContext, useEffect, useState} from "react";
import moment from "moment";
import {CourtContext} from "./TimeTable";
import AuthContext from "../context/AuthContext";

function TimeSlot(props) {
    const {authTokens, user} = useContext(AuthContext);
    const [courtContext, ] = useContext(CourtContext);
    const slotsStartTime = props.day+ " "+  props.start;
    const [inCart, setInCart] = useState(false);
    const isPast = moment(slotsStartTime).isBefore(moment());
    const [currentReservation, setCurrentReservation] = useState(null);

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
                    console.log('Success: put in cart')
                    response.json()
                        .then(r => setCurrentReservation(r));
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const removeReservationFromCart = () => {
            fetch(`http://localhost:8080/api/cart/delete-reservation/${currentReservation}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    //'Authentication': 'Bearer ' + authTokens['access_token']
                },
            })
                .then(response =>{
                    if (response.ok){
                        console.log('Delete was successful');
                        setInCart(false);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
    }

    useEffect(() =>{
        for (const reservation of props.reservationsInCart) {
            const timeData = reservation.startTime.split(" ");
            const reservationDate = timeData[0];
            const reservationStart = timeData[1];
            if (reservationDate === props.day && reservationStart === props.start){
                setCurrentReservation(reservation.id);
            }
        }
        }
    )

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