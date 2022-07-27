import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import ReservationCard from "./ReservationCard";

const Cart = () => {
    const [reservations, setReservations] = useState([]);
    const {user} = useContext(AuthContext);
    const [reservationIdToRemove, setReservationIdToRemove] = useState("");

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
                    setReservations([]);
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
                    <p>You have {reservations.length} reservation(s) in your cart.</p>
                    {reservations.length !== 0 &&
                        <>
                            <p>Total Price: <label className="total-price">{totalPrice()} HUF</label></p>
                            <div>
                                <span className="delete-all-btn" onClick={() => deleteAllReservations()}>Delete All</span>
                                <span className="go-to-checkout-btn">Go To Checkout</span>
                            </div>
                        </>
                    }
                </div>
                {reservations.length !== 0 &&
                    <div className="cards">
                        {0 < reservations.length  &&
                            reservations.map(reservation => {
                                return <ReservationCard key={reservation['id']} reservation={reservation} remove={setReservationIdToRemove}/>})}
                    </div>}
            </div>
        </>
    )
}

export default Cart