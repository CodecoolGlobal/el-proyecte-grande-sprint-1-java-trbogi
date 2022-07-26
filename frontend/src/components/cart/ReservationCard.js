const ReservationCard = ({reservation}) => {

    return (
        <div>
            <p>Court Number: {reservation['courtNumber']}</p>
            <p>Start Time: {reservation['startTime']}</p>
            <p>End Time: {reservation['endTime']}</p>
            <p>Price: {reservation['price']}</p>
        </div>
    )
}
export default ReservationCard