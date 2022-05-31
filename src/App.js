import './App.css';
import Moment from 'react-moment';
import moment from 'moment';
import Days from './components/Days.js'
import {useState} from "react";
import './style/main.css'

function App() {
    const startOfWeek = moment().startOf('isoweek');
    const monday = startOfWeek;
    const tuesday = startOfWeek.clone().add(1, 'days');
    const wednesday = startOfWeek.clone().add(2, 'days');
    const thursday = startOfWeek.clone().add(3, 'days');
    const friday = startOfWeek.clone().add(4, 'days');
    const saturday = startOfWeek.clone().add(5, 'days');
    const sunday = startOfWeek.clone().add(6, 'days');
    const [days, setDays] = useState([monday, tuesday, wednesday, thursday, friday, saturday, sunday]);


    const turnPage = (amount) => {
        for (let i = 0; i < days.length; i++) {
            days[i] = days[i].clone().add(amount, 'week')
        }
        setDays([...days])
    }


  return (
    <div className="container" >
        <div id="slots">
            <ul>
                <li>06:00 - 08:00</li>
                <li>08:00 - 10:00</li>
                <li>10:00 - 12:00</li>
                <li>12:00 - 14:00</li>
                <li>14:00 - 16:00</li>
                <li>16:00 - 18:00</li>
                <li>18:00 - 20:00</li>
                <li>20:00 - 22:00</li>
            </ul>
        </div>
        <button onClick={() => {turnPage(-1)}}>Previous</button>
      <table>
          <tbody>
          <tr>
              <th>
                  <Moment format={"MMM"}>{days[0]}</Moment>
              </th>
          </tr>
              <Days days={days}></Days>
          <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>2</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>3</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>4</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>5</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>5</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>6</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>7</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>
          <tr>
              <td>8</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
          </tr>

          </tbody>
      </table>
        <button onClick={() => {turnPage(1)}}>Next</button>
    </div>
  );
}

export default App;
