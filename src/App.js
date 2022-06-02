import './App.css';
import TimeTable from './components/TimeTable.js'
import './style/main.css'

function App() {
    const reservations = [{'date': '2022-06-03', 'start': '10:00'},
        {'date': '2022-06-03', 'start': '12:00'},
        {'date': '2022-06-04', 'start': '10:00'},
        {'date': '2022-06-07', 'start': '10:00'},
        {'date': '2022-06-09', 'start': '08:00'},
        {'date': '2022-06-23', 'start': '08:00'},
        {'date': '2022-06-15', 'start': '08:00'}]
  return (
    <div className="container" >
        <TimeTable reservations={reservations}></TimeTable>
    </div>
  );
}

export default App;
