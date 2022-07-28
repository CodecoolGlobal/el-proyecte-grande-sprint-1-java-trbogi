import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
    
    return (
        <div>
            <Header></Header>
            {props.children}
        </div>
    )
}

export default Layout