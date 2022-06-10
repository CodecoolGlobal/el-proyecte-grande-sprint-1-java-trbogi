import {BsBagPlusFill, BsBagDash} from "react-icons/bs";
import {useState} from "react";

function TimeSlot({day, start, reservations}) {
    const [inCart, setInCart] = useState(false);
    const isReserved = () => {
        for (const reservation of reservations) {
            if (reservation.date === day && reservation.start === start){
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
    }else if(inCart){
        return (<p style={{backgroundColor: "#c9d6e8"}} onClick={removeReservationFromCart}>{start} <br/>
            <BsBagDash></BsBagDash></p>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}} onClick={addReservationToCart}>{start} <br/>
            <BsBagPlusFill className="addToCartIcon"></BsBagPlusFill></p>)
    }
}export default TimeSlot