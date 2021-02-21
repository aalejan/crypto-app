import React from 'react'
import { Link } from 'react-router-dom'

const ExchangeCard = ({exchange}) => {
    return (
        
        <li className="list-group-item shadow mb-3 d-flex align-items-center rounded justify-content-between "  >
            <span><img className="rounded pr-2" src={exchange.image}  alt={exchange.id} /> {exchange.name}</span>
            <a href={exchange.url}><span className="btn btn-primary">Visit Site</span></a>
        </li>
    )
}

export default ExchangeCard
