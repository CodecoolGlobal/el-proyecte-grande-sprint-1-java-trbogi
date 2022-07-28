import {createContext, useState} from 'react'

const ReservationsContext = createContext()

export default ReservationsContext

export const ReservationProvider = ({children}) => {
    const [reservations, setReservations] = useState([]);
    const [reservationsInCart, setReservationsInCart] = useState([]);

    const getReservations = (courtNumber, startOfWeek) => {
        fetch(`http://localhost:8080/api/reservation/get-reservation/${courtNumber}/${startOfWeek}`, {
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success: Reservations', data);
                setReservations(data)
            })
    }

    const getReservationsInCartByCourt = (user, court) => {
        if (user){
            fetch(`http://localhost:8080/api/cart/get-cart-reservations/${user['userId']}/${court}`, {
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success: Reservations in cart:', data);
                    setReservationsInCart(data);
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
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const contextData = {
        reservations: reservations,
        setReservations: setReservations,
        reservationsInCart: reservationsInCart,
        setReservationsInCart: setReservationsInCart,
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