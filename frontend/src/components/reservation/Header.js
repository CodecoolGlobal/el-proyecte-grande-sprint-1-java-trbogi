import Courts from "./Courts";

function Header({yearAndMonth, directionOfSwipe}) {
    return(
        <div>
            <Courts></Courts>
            <div className={directionOfSwipe} style={{fontSize: '1.8rem', textAlign: 'center'}}>{yearAndMonth}</div>
        </div>
    )
}

export default Header