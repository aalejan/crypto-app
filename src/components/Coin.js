
import React from 'react'
import {Link} from 'react-router-dom'

export const Coin = ({coin, deleteCoin}) => {


    return (
      <Link to={`/coins/${coin.id}`}>
        <li className="coilist-item list-group-item list-group-item-action d-flex justify-content-between ">
          <img src={coin.image} alt="" className="coinlist-image "/>
          <span className="text-decoration-none">{coin.current_price}</span>
          <span className={coin.price_change_percentage_24h < 0 ? 'text-danger mr-2' : 'text-success'}>
            <i className={coin.price_change_percentage_24h < 0 ? 'fas fa-sort-down align-middle mr-1' : 'fas fa-sort-up align-middle mr-1'}></i>
            {coin.price_change_percentage_24h}
          </span>
          <i onClick={e => {
            e.preventDefault()
            deleteCoin(coin.id)
          }} className="delete-icon far fa-times-circle text-danger"></i>
        </li>
      </Link>
    )
}

export default Coin