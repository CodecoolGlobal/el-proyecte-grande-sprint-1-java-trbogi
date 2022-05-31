import React, { useState } from 'react';
import Moment from "react-moment";

function Days({days}) {
    return (
        <>
            <tr>
                {days.map((day) => {return <td key={day}><Moment format={"DD"}>{day}</Moment></td>} )}
            </tr>
            <tr>
                <td>Monday</td>
                <td>Tuesday</td>
                <td>Wednesday</td>
                <td>Thursday</td>
                <td>Friday</td>
                <td>Saturday</td>
                <td>Sunday</td>
            </tr>
        </>
    );
}export default Days