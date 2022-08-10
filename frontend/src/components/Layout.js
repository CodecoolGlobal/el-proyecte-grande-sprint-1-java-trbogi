import React from 'react';
import Header from './Header';
import {ToastContainer, toast} from "react-toastify";

const Layout = (props) => {
    
    return (
        <div>
            <Header></Header>
            {props.children}
            <ToastContainer closeButton={false}/>
        </div>
    )
}

export default Layout