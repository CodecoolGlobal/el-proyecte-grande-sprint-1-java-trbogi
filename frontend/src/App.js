import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TimeTable from './components/reservation/TimeTable.js';
import Shop from './components/shop/Shop.js';
import Register from './components/user_management/Register';
import Login from './components/user_management/Login';


function App() {
    return (
      <div>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/reservation" element={<TimeTable />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>  
        </BrowserRouter>
      </div>
        
  );
}

export default App;
