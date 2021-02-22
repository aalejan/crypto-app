import React from 'react'
import { Link } from 'react-router-dom'

const ExchangeCard = ({exchange}) => {
    return (
        <div className="container">
            <li className="exchanges list-group-item shadow mb-3 "  >
                <div className="row">
                    <span className="col-sm"><img className="rounded pr-2" src={exchange.image}  alt={exchange.id} /> {exchange.name}</span>
                    <span className="col-sm text-center">{exchange.trade_volume_24h_btc}</span>
                    <a className="col-sm d-flex justify-content-end" href={exchange.url}><span className="btn btn-primary">Visit Site</span></a>
                </div>
            </li>
        </div>

    )
}

export default ExchangeCard
