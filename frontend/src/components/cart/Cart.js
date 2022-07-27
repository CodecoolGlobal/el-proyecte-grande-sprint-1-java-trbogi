import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import ReservationCard from "./ReservationCard";

const Cart = () => {
    const [reservations, setReservations] = useState([]);
    const {user} = useContext(AuthContext);
    const totalPrice = () => {
        const prices = reservations.map(res => res['price'])
        return prices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    }

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
        <>
            <div className="cards-container">
                <div className="total">
                    <h2>YOUR CART</h2>
                    <p>You have {reservations.length} reservation(s) in your cart.</p>
                    {reservations.length !== 0 &&
                        <>
                            <p>Total Price: <label className="total-price">{totalPrice()} HUF</label></p>
                            <div>
                                <span className="delete-all-btn">Delete All</span>
                                <span className="go-to-checkout-btn">Go To Checkout</span>
                            </div>
                        </>
                    }
                </div>
                <div className="cards">
                    {0 < reservations.length  &&
                        reservations.map(reservation => {
                            return <ReservationCard key={reservation['id']} reservation={reservation}/>})}
                </div>
            </div>
        </>
    )
}

export default Cart