import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import ReservationCard from "./ReservationCard";
import { Link } from "react-router-dom";
import ReservationsContext from "../context/ReservationsContext";

const Cart = () => {
    const {user} = useContext(AuthContext);
    const {reservationsInCart, setReservationsInCart, getReservationsInCart} = useContext(ReservationsContext);
    const [reservationIdToRemove, setReservationIdToRemove] = useState("");

    const totalPrice = () => {
        const prices = reservationsInCart.map(res => res['price'])
        return prices.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
    }

    useEffect(() => {
        getReservationsInCart(user)
    }, [reservationIdToRemove]);

    const deleteAllReservations = () => {
        fetch(`http://localhost:8080/api/cart/delete-all-court-reservation/${user['userId']}`, {
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
                    setReservationsInCart([]);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className="cards-container">
                <div className="total">
                    <h2>YOUR CART</h2>
                    <p>You have {reservationsInCart.length} reservation(s) in your cart.</p>
                    {reservationsInCart.length !== 0 &&
                        <>
                            <p>Total Price: <label className="total-price">{totalPrice()} HUF</label></p>
                            <div>
                                <span className="delete-all-btn" onClick={() => deleteAllReservations()}>Delete All</span>
                                <span className="go-to-checkout-btn"><Link className="checkout-link" to="/checkout">Go To Checkout</Link></span>
                            </div>
                        </>
                    }
                </div>
                {reservationsInCart.length !== 0 &&
                    <div className="cards">
                        {0 < reservationsInCart.length  &&
                            reservationsInCart.map(reservation => {
                                return <ReservationCard key={reservation['id']} reservation={reservation} remove={setReservationIdToRemove}/>})}
                    </div>}
            </div>
        </>
    )
}

export default Cart