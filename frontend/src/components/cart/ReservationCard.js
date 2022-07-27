import '../../style/reservation-card.css'
import {TbCalendarStats} from 'react-icons/tb'
import {MdOutlineDeleteForever} from 'react-icons/md'

const ReservationCard = ({reservation, remove}) => {
    const end = reservation['endTime'].split(" ")[1];

    const removeReservation = () => {
        removeReservationFromDatabase(reservation['id']);
    }

    const removeReservationFromDatabase = (reservationId) => {
        fetch(`http://localhost:8080/api/cart/delete-reservation/${reservationId}`, {
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
                    remove(reservation['id']);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="card">
            <TbCalendarStats size={35} style={{paddingLeft: '20px'}}/>
            <span>Court: No. {reservation['courtNumber']}</span>
            <p>Date: {reservation['startTime']}-{end}</p>
            <div className="price-tag-container">
                <p className="cancel-btn"><MdOutlineDeleteForever size={30} onClick={() => removeReservation()}/></p>
                <p className="price">Price: {reservation['price']} HUF</p>
            </div>
        </div>
    )
}
export default ReservationCard