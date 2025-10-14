import React from 'react';
import Navber from '../shared/header/Navber';
import { Outlet } from 'react-router';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;