import {useState} from "react";

function Courts() {
    const courts = ['Court 1', 'Court 2', 'Court 3', 'Court 4']
    const [selectedCourt, setSelectedCourt] = useState(null);

    const selectCourt = (court) => {
        setSelectedCourt(court);
    }

    return(
        <div className="courts">
            {courts.map((court) => {
                return <span key={court} className={selectedCourt === court ? "selectedCourt" : null} onClick={() => {selectCourt(court)}}>{court}</span>
            })}
        </div>
    )

}export default Courts