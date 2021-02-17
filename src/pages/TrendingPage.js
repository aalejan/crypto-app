import React, {useState, useEffect} from 'react'
import coinApi from '../api/cryptoApi'
import {Link} from 'react-router-dom'


const TrendingPage = () => {
    const [coins, setCoins] = useState([])

useEffect(() => {

    const pullData = async () => {
        const response = await coinApi.get('/search/trending')
        setCoins(response.data.coins)
    }
   
    pullData()
 
}, [coins])

const renderedList = () => {
    return (
        <div>
            {
                
                    coins.map(coin => {
                        return(
                            <Link key={coin.item.id} className="text-decoration-none" to={`/coins/${coin.item.id}`} >
                            <li className="coilist-item list-group-item list-group-item-action d-flex justify-content-between rounded ">
                              <span ><img src={coin.item.large} alt="" className="coinlist-image "/>  {coin.item.id}</span>
                            </li>
                          </Link>
                        ) 
                    })
                
            }
        </div>
    )
}

    return (
        <div>
            
            {renderedList()}
        </div>
    )
}

export default TrendingPage
