import Moment from "react-moment";
import Days from "./Days";

function Header({startOfWeek}) {
    return(
        <div>
            <div className="courts">
                <span>Court 1</span>
                <span>Court 2</span>
                <span>Court 3</span>
                <span>Court 4</span>
            </div>
            <div style={{fontSize: '1.8rem', fontWeight: '900', textAlign: 'center'}}><Moment format={"YYYY. MMMM"}>{startOfWeek}</Moment></div>
        </div>
    )

}export default Header