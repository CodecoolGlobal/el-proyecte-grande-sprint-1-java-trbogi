import Moment from "react-moment";
import Courts from "./Courts";

function Header({startOfWeek}) {
    return(
        <div>
            <Courts></Courts>
            <div style={{fontSize: '1.8rem', fontWeight: '900', textAlign: 'center'}}><Moment format={"YYYY. MMMM"}>{startOfWeek}</Moment></div>
        </div>
    )

}export default Header