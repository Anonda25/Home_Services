import React from 'react';
import Navbar from '../CommenPage/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../CommenPage/Footer';
const MainLayout = () => {
    return (
      <div className='w-11/12 mx-auto'>
           
          <Navbar></Navbar>
         <div className='min-h-[calc(100vh-260px)] w-11/12 mx-auto'>
                <Outlet></Outlet>
         </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;