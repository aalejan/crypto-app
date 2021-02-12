import React, {useState, useEffect} from 'react'
import coinApi from '../api/cryptoApi'
import Coin from '../components/Coin'

const PricesPage = () => {

    const [coins, setCoins] = useState([])
    const [page, setPage] = useState(1)



useEffect(() => {
    const pullData = async () => {
        const response = await coinApi.get('/coins/markets', {
        params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 25,
            page: page
        }

    })
        setCoins(response.data)
    } 
    pullData()
    console.log(coins)
   
}, [page])

   const renderedList = () => {
       return(
           <ul className="coinlist list-group mt-2">
               {coins.map(coin => {
                   return <Coin key={coin.id} coin={coin} noIcon= {true}  / > 
               })}
           </ul>
       )
   }

const pageHandler = (direction) => {
    if(direction === 'back' &&  page > 1){
        setPage(page - 1)
    }else if(direction === 'next' && page < 8){
        setPage(page + 1)
    }
}

    return (
        <div className="coinList shadow border p-2 rounded mt-2 bg-light">
            {renderedList()} 
            <div className="d-flex justify-content-between">
                <button onClick={() => pageHandler('back')} className="mr-3 mt-4 btn btn-warning">Prev</button>
                <button onClick={() => pageHandler('next')} className=" mt-4 ml-4 btn btn-warning">Next</button> 
            </div> 
        </div>
    )
}

export default PricesPage
