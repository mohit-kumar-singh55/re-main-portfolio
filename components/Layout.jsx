import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Header />
            {children}
        </>
    );
}

export default Layout;
