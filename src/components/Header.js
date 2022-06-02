import Moment from "react-moment";
import {useState} from "react";

function Header({startOfWeek}) {
    const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4']
    const [selectedCourt, setSelectedCourt] = useState(null);

    const selectCourt = (court) => {
        setSelectedCourt(court);
    }

    return(
        <div>
            <div className="courts">
                {courts.map((court) => {
                    return <span key={court} className={selectedCourt === court ? "selectedCourt" : null} onClick={() => {selectCourt(court)}}>{court}</span>
                })}
            </div>
            <div style={{fontSize: '1.8rem', fontWeight: '900', textAlign: 'center'}}><Moment format={"YYYY. MMMM"}>{startOfWeek}</Moment></div>
        </div>
    )

}export default Header