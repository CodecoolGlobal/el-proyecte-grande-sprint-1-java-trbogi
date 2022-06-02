function TimeSlot({day, start, reservations}) {
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
        e.target.style.backgroundColor = "#c9d6e8"
    }

    if (isReserved()){
        return(<p style={{backgroundColor: "#fcb7b4"}}>{start}</p>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}} onClick={addReservationToCart}>{start}</p>)
    }
}export default TimeSlot