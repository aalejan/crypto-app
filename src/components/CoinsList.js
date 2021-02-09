
import React, { useState, useEffect, useContext } from 'react'
import coinApi from '../api/cryptoApi'
import Coin from './Coin'
import { WatchListContext } from '../context/watchListContext'

export const CoinsList = () => {

const [coins, setCoins] = useState([])
const {watchList} = useContext(WatchListContext)


useEffect(() => {
    const pullData = async () => {
        const response = await coinApi.get('/coins/markets', {
        params: {
            vs_currency: "usd",
            ids: watchList.join(',')
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