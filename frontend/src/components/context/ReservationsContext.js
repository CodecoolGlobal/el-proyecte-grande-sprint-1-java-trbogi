import {createContext, useState} from 'react'
import {toast} from "react-toastify";

const ReservationsContext = createContext()

export default ReservationsContext

export const ReservationProvider = ({children}) => {
    const [reservations, setReservations] = useState([]);
    const [reservationsInCartByCourt, setReservationsInCartByCourt] = useState([]);
    const [reservationsInCart, setReservationsInCart] = useState([]);

    const notifyRemoveReservation = () => {
        toast.info('Reservation has been removed from your cart!', {
            position: "bottom-center",
            autoClose: 1200,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const getReservations = (courtNumber, startOfWeek) => {
        fetch(`http://localhost:8080/api/reservation/get-reservation/${courtNumber}/${startOfWeek}`, {
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success: Reservations', data);
                setReservations(data)
            })
    }

    const getReservationsInCart = (user) => {
        fetch(`http://localhost:8080/api/cart/get-cart-reservations/${user['userId']}`, {
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:Reservations in cart:', data);
                setReservationsInCart(data);
            })
    }
    const getReservationsInCartByCourt = (user, court) => {
        if (user){
            fetch(`http://localhost:8080/api/cart/get-cart-reservations/${user['userId']}/${court}`, {
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success: Reservations in cart by court:', data);
                    setReservationsInCartByCourt(data);
                })
        }
    }

    const removeReservationFromCart = (currentReservation, user, court) => {
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
                    getReservationsInCartByCourt(user, court);
                    notifyRemoveReservation();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const contextData = {
        reservations: reservations,
        setReservations: setReservations,
        reservationsInCartByCourt: reservationsInCartByCourt,
        setReservationsInCartByCourt: setReservationsInCartByCourt,
        reservationsInCart: reservationsInCart,
        setReservationsInCart: setReservationsInCart,
        getReservationsInCart: getReservationsInCart,
        getReservations: getReservations,
        getReservationsInCartByCourt: getReservationsInCartByCourt,
        removeReservationFromCart: removeReservationFromCart
    }

    return(
        <ReservationsContext.Provider value={contextData}>
            {children}
        </ReservationsContext.Provider>
    )


}