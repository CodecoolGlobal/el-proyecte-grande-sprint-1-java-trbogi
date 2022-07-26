import '../../style/reservation-card.css'
import {TbCalendarStats} from 'react-icons/tb'
import {MdOutlineDeleteForever} from 'react-icons/md'

const ReservationCard = ({reservation}) => {
    const end = reservation['endTime'].split(" ")[1];

    return (
        <div className="card">
            <TbCalendarStats size={35} style={{paddingLeft: '20px'}}/>
            <span>Court: No. {reservation['courtNumber']}</span>
            <p>Date: {reservation['startTime']}-{end}</p>
            <div className="price-tag-container">
                <p className="cancel-btn"><MdOutlineDeleteForever size={30}/></p>
                <p className="price">Price: {reservation['price']} HUF</p>
            </div>
        </div>
    )
}
export default ReservationCard