import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar className="navbar" />
            <Header />
            {children}
        </>
    );
}

export default Layout;
