import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import TimeTable from './components/reservation/TimeTable.js';
import Shop from './components/shop/Shop.js';
import Registration from './components/user_management/Registration';
import Login from './components/user_management/Login';


function App() {
    return (
      <div>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/reservation" element={<TimeTable />} />
                </Routes>
            </Layout>  
        </BrowserRouter>
      </div>
        
  );
}

export default App;
