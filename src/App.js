import './App.css';
import {useState} from "react";
import moment from 'moment';
import TimeTable from './components/TimeTable.js'
import './style/main.css'

function App() {
  return (
    <div className="container" >
        <div>
            <TimeTable></TimeTable>
        </div>
    </div>
  );
}

export default App;
