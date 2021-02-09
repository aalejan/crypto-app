
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import coinApi from '../api/cryptoApi'
import Coin from './Coin'

export const CoinsList = () => {

const [coins, setCoins] = useState([])


useEffect(() => {
    const pullData = async () => {
        const response = await coinApi.get('/coins/markets', {
        params: {
            vs_currency: "usd",
            ids: "bitcoin, ethereum"
        }

    })
    console.log(response.data)
        setCoins(response.data)
    } 

    pullData()
}, [])

   const renderedList = () => {
       return(
           <ul className="coinlist list-group mt-2">
               {coins.map(coin => {
                   return <Coin key={coin.id} coin={coin} / > 
               })}
           </ul>
       )
   }

    return (
        <div>
            {renderedList()}
        </div>
    )
}

export default CoinsList