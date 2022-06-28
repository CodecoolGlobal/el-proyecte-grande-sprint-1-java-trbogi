import './App.css';
import TimeTable from './components/TimeTable.js'
import './style/main.css'
import {createContext, useState} from 'react'


export const CourtContext = createContext("1");
function App() {
    const [court, setCourt] = useState("1");
  return (
      <CourtContext.Provider value={[court, setCourt]}>
          <div className="container" >
              <TimeTable></TimeTable>
          </div>
      </CourtContext.Provider>
  );
}

export default App;
