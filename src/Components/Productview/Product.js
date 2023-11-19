import React from 'react'
import "./Product.css"
import agni from "../Images/agniview.png"
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InboxIcon from '@mui/icons-material/Inbox';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
function Product() {
  return<>
  <div className='product-view'>
  <div className='product-view-images'>
    <img className='product-image' src={agni} alt='...'/>
  </div>
  <div className='product-details'>
    <div className='product-name'>Lava Agni 2 5G (Glass Viridian, 8GB RAM, 256GB Storage) | India's First Dimensity 7050 Processor | 120 Hz Curved Amoled Display | 13 5G Bands | Superfast 66W Charging | Clean Android</div>
  <div className='rating'>4 ⭐⭐⭐⭐</div>
  <div className='label'>Amazon <span>choice</span></div>
  <div className='deal'>deal</div>
  <div className='price'><span>-23%</span> ₹19,999
</div>
  <div className='mrp'>M.R.P: ₹25,999.00</div>

  <div className='taxes'>Inclusive of all taxes<br/>
<span>EMI</span> starts at ₹970. No Cost EMI available <span className='blue'>EMI options</span></div>

<div className='delivary-information'>
  <div className='sub-detail'>
<div className='icon'><InboxIcon/></div>
<div className='info-orange'>1 Year Warranty</div>
</div>
<div className='sub-detail'>
<div className='icon'><MonetizationOnIcon/></div>
<div className='info-orange'>Pay on Delivery</div>
</div>
<div className='sub-detail'>
<div className='icon'><AddModeratorIcon/></div>
<div className='info-orange'>Top Brand</div>
</div>
<div className='sub-detail'>
<div className='icon'><ElectricCarIcon/></div>
<div className='info-orange'>Amazon Delivered</div>
</div>
</div>
<div className='about-product'>
<div className='about-products'>
  <div className='prod'>Brand	</div>
  <div className='sp'>Lava</div>
  </div>
<div className='about-products'>
  <div className='prod'>Model Name	</div>
  <div className='sp'>Lava Agni 2 5G</div>
  </div>
<div className='about-products'>
  <div className='prod'>Network Service</div>
   <div className='sp'>Provider	Unlocked for All Carriers</div>
   </div>
<div className='about-products'><div className='prod'>Operating System	</div><div className='sp'>Android 13.0</div></div>
<div className='about-products'><div className='prod'>Cellular Technology	</div><div className='sp'>5G</div></div>
</div>
  <div className='cancel-line'></div>
  <div className='about'>
<div className='abt-this-item'>About this item</div>
<ul>
  <li>17.22cm (6.78") 120Hz FHD+ Curved Amoled Display with Widevine L1 DRM Protection - Enjoy all your Content in High Resolution
</li>
  <li>Superior performance with Octa-core 2.6GHz MediaTek Dimensity 7050 6nm processor</li>
  <li>Superfast 66W charger (50% Charging in less than 16mins)</li>
  <li>Big 1.0µm Pixel 50MP Quad Camera with 8MP ultrawide, 2MP Macro and 2MP Depth camera along with 1.0µm 16MP selfie camera
</li>
  <li>Clean Android 13 OS (No Bloatware, No Ads)</li>
  <li>3D Curved Glass back</li>
  <li>In-Display Fingerprint Unlock | Supports 13 5G bands</li>
</ul>
</div>
  </div>
  <div className='add-to-card-cart'>
    <div className='Add-cart'>Add to cart</div>
    <div className='buy'>Buy now</div>
  </div>
</div>
  </>
}

export default Product
