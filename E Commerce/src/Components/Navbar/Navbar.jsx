import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (

        <div className='navbar'>
        <h2>E-Cart</h2>
        <div className='search'>  
        <input type='text' placeholder='Search Items'/>
        <button>Search</button>
        </div>
           
           <ul className='list-items'>
                <li><a href="/">Home</a></li>
                <li><a href="/Categories">Categories</a></li>
                <li><a href="/Login/Logout">Login/Logout</a></li>
                <li><a href="/Cart">Cart</a></li>
            </ul>      
            
        </div>

    )
}

export default Navbar