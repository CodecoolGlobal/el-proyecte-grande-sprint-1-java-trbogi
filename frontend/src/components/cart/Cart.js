import {useEffect, useState} from "react";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

const Cart = () => {
    const [reservations, setReservations] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:8080/api/cart/get-cart-reservations/${user['userId']}`, {
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setReservations(data);
            })
    }, []);

    return (
        <div>
            {0 < reservations.length  && <span>ok</span>}
        </div>
    )
}

export default Cart