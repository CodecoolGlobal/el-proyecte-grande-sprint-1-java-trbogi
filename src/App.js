import './App.css';
import Moment from 'react-moment';
import moment from 'moment';
import Days from './components/Days.js'
import {useState, useEffect} from "react";

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
    <div className="App">
      <table>
          <tbody>
          <tr>
              <th>
                  <Moment format={"MMM"}>{days[0]}</Moment>
              </th>
          </tr>
              <Days days={days}></Days>

          </tbody>
      </table>
        <button onClick={() => {turnPage(-1)}}>Previous</button>
        <button onClick={() => {turnPage(1)}}>Next</button>
    </div>
  );
}

export default App;
