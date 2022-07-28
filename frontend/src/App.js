import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import TimeTable from "./components/reservation/TimeTable";
import Cart from "./components/cart/Cart";
import {AuthProvider} from "./components/context/AuthContext";
import Layout from "./components/Layout";


function App() {
    return (
      <div>
        <BrowserRouter>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/reservation" element={<TimeTable />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
      </div>
        
  );
}

export default App;
