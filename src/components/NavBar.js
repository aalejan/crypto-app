import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (
        <div className='nav-bar'>
           <nav className="navbar navbar-expand-lg navbar-light ">
                     <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link to='/Prices' className="nav-link text-white " href="#">Prices </Link>
                        </li>
                        <li className="nav-item">
                             <Link to='/Trending' className="nav-link text-white" href="#">Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Exchanges' className="nav-link text-white" href="#">Exchanges</Link>
                        </li>
                    </ul>
            </nav> 
        </div>
    )
}

export default NavBar
