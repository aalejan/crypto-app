import React, {useState, useEffect} from 'react'
import coinApi from '../api/cryptoApi'
import Coin from '../components/Coin'

const PricesPage = () => {

    const [coins, setCoins] = useState([])



useEffect(() => {
    const pullData = async () => {
        const response = await coinApi.get('/coins/markets', {
        params: {
            vs_currency: "usd",
        }

    })
        setCoins(response.data)
    } 
    pullData()
    console.log(coins)
   
}, [])

   const renderedList = () => {
       return(
           <ul className="coinlist list-group mt-2">
               {coins.map(coin => {
                   return <Coin key={coin.id} coin={coin} noIcon= {true}  / > 
               })}
           </ul>
       )
   }



    return (
        <div className="coinList shadow border p-2 rounded mt-2 bg-light">
            {renderedList()}
        </div>
    )
}

export default PricesPage
