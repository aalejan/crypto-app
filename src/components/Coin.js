
import React from 'react'
import {Link} from 'react-router-dom'

export const Coin = ({coin}) => {
    return (
      <Link to='/coin'>
        <li className="coilist-item list-group-item list-group-item-action d-flex justify-content-between ">
         
          <span className="text-decoration-none">{coin.current_price}</span>
          <span className="text-success mr-2">
            <i className="fas fa-sort-down align-middle mr-1"></i>
            {coin.price_change_percentage_24h}
          </span>
        </li>
      </Link>
       
    )
}

export default Coin