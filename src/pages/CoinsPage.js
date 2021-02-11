import React from 'react'
import CoinsList from '../components/CoinsList'
import NavBar from '../components/NavBar'

export const CoinsPage = () => {
    return (
        <div className="coinList shadow border p-2 rounded mt-2 bg-light">
            <CoinsList />
        </div>
    )
}

export default CoinsPage

