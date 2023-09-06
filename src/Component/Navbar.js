import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar=()=>{
    return(
        <>
        <ul className='nav'>
            <div className='social-media'>
                <span><i class="fa-brands fa-instagram"></i></span>
                <span><Link to="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></Link></span>
                <span><Link to="https://www.whatsapp.com/"><i class="fa-brands fa-whatsapp" style={{color:"green"}}></i></Link></span>
            </div>
             <li><Link to="/">Home</Link></li>  
             <li><Link to="/create">Create</Link></li> 
             <li><Link to="/read">Read</Link></li>
             <li><Link to="/update">Update</Link></li>

        </ul>
         
            
        </>
    )
}