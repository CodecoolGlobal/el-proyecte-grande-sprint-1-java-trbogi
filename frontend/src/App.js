import './style/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import TimeTable from './components/reservation/TimeTable.js';
import Shop from './components/shop/Shop.js';
import {AuthProvider} from "./components/context/AuthContext";
import Profile from "./components/profile/Profile.js";
import ProfileUserEditable from "./components/profile/ProfileUserEditable";

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
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </BrowserRouter>
      </div>
        
  );
}

export default App;
