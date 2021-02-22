
import React from 'react'
import {Link} from 'react-router-dom'

export const Coin = ({coin, deleteCoin, noIcon}) => {


    return (
      <Link className="text-decoration-none" to={`/coins/${coin.id}`} >
        <li className="coilist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center rounded ">
          <div className="container row">
             <span className="col-sm" ><img src={coin.image} alt="" className="coinlist-image "/>  {coin.name}</span>
         
          <span className="text-decoration-none col-sm text-center">{`$${coin.current_price}`}</span>
          <span className={coin.price_change_percentage_24h < 0 ? 'text-danger mr-2 col-sm d-flex justify-content-end' : 'text-success col-sm d-flex justify-content-end'}>
            <i className={coin.price_change_percentage_24h < 0 ? 'fas fa-sort-down align-middle mr-1 col-sm d-flex justify-content-end' : 'fas fa-sort-up align-middle mr-1 col-sm d-flex justify-content-end'}></i>
            {coin.price_change_percentage_24h}
          </span>
          <i onClick={e => {
            e.preventDefault()
            deleteCoin(coin.id)
          }} className={noIcon ? "" :"delete-icon far fa-times-circle text-danger col-sm d-flex justify-content-end" }></i>
          </div>
         
        </li>
      </Link>
    )
}

export default Coin