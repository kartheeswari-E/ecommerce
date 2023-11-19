import React from 'react'
import "./Home.css"
import agni from "../Images/agni.png"
import ce from "../Images/ce.png"
import samsung from "../Images/samsaung.png"
import iphone from "../Images/iphone.png"
import realme from "../Images/realme.png"
import oneplus from "../Images/oneplus.png"
import realmee from "../Images/realmee.png"
import redmi from "../Images/redmi.png"
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate=useNavigate();
    const data=[{
        id:1,
        image:agni
    },
    {
        id:2,
        image:ce
    },
    { 
        id:3,
        image:oneplus
    },
    {
        id:4,
        image:realmee
    },
    {
        id:5,
        image:redmi
    },
    {
        id:6,
        image:realme
    },
    {
        id:7,
        image:iphone
    },
    {
        id:8,
        image:samsung
    }
]

  return<>
  <div className='deal-of-the-day-container'>
  {data.map((images,key) => {
                                  return ( <img onClick={()=>navigate("/productview")} className='image-container-deal' key={images.id} src={images.image} alt='...'/> )}
                                  )}
  </div>
  </>
}

export default Home