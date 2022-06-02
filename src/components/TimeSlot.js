function TimeSlot({day, start, reservations}) {
    const isReserved = () => {
        for (const reservation of reservations) {
            if (reservation.date == day && reservation.start == start){
                return true;
            }
        }
        return false;
    }

    if (isReserved()){
        return(<p style={{backgroundColor: "#fcb7b4"}}>{start}</p>)
    }else{
        return(<p style={{backgroundColor: "aliceblue"}}>{start}</p>)
    }
}export default TimeSlot