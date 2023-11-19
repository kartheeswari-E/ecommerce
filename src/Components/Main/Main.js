import React from 'react'
import Navbar from '../Topbar/Navbar'
import Menu from "../Menubar/Menu"
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';


function Main() {
  return <>
  <Navbar/>
  <Menu/>
  <Outlet />
  <Footer/>
  </>
}

export default Main