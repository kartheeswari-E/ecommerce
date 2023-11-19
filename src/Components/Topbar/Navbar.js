import React from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Navbar() {
  return <>
<div className='navbar-container'>
    <div className='navbar-left'>
            <img src={logo} alt='...' className='navbar-logo'/>
            <div className='default-add'>
                <div className='icon-location'><FmdGoodIcon/></div>
               <h5 className='website-name'>delivery to ramnad 623501
               <br/>update address</h5> 
            </div>
            <div className='search-container'>
              <input className='search' placeholder='Search Amazon.in'></input>
            <button className='search-icon'><SearchIcon/></button>      
            </div>
        
    </div>
    <div className='navbar-right'>
      
            
            <div className='orders'>Return & Orders</div>
            <div className='cart'>
                <div className='cart-logo'>< ShoppingCartIcon className='icons-cart'/></div>
                <div className='total-item'>10</div>
               
            </div><div className='signin'>kartheeswari</div>
    </div> 
</div>

  </>
}

export default Navbar