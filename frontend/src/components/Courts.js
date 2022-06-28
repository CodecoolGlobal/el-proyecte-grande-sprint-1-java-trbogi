import {CourtContext} from "../App";

function Courts() {
    const courts = ['1', '2', '3', '4']
    const [courtContext, setCourtContext] = useContext(CourtContext);

    return(
        <div className="courts">
            {courts.map((court) => {
                return <span key={court} className={courtContext === court ? "selectedCourt" : null} onClick={() => setCourtContext(court)}>Court {court}</span>
            })}
        </div>
    )

}export default Courts