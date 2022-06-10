import {BsCartPlus, BsFillCartCheckFill} from "react-icons/bs";
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

    if (isReserved()){
        return(<p style={{backgroundColor: "#fcb7b4"}}>{start}</p>)
    }else if(inCart){
        return (<p style={{backgroundColor: "#c9d6e8"}}>{start} <br/>
            <BsFillCartCheckFill></BsFillCartCheckFill></p>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}} onClick={addReservationToCart}>{start} <br/>
            <BsCartPlus></BsCartPlus></p>)
    }
}export default TimeSlot