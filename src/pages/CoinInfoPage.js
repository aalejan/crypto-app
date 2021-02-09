import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../components/Chart'
import ChartDetail from '../components/ChartDetail'
import cryptoApi from '../api/cryptoApi'

export const CoinInfoPage = () => {
    const [coinData, setCoinData] = useState({})
    const {id} = useParams()

useEffect(() => {
    const pullData = async() => {

     const [day, week, year, detail] = await   Promise.all([
            cryptoApi.get(`/coins/${id}/market_chart/`, {
            params: {
                vs_currency: "usd",
                days: "1",
            }
        }),
        
            cryptoApi.get(`/coins/${id}/market_chart/`, {
            params: {
                vs_currency: "usd",
                days: "7",
            }
        }),
       
            cryptoApi.get(`/coins/${id}/market_chart/`, {
            params: {
                vs_currency: "usd",
                days: "365",
            }
        }),
        cryptoApi.get('/coins/markets', {
            params: {
                vs_currency: "usd",
                ids: id
            }
    
        })

        ])
        setCoinData({
            day: day.data.prices,
            week: week.data.prices,
            year: year.data.prices,
            detail: detail.data[0]
        })

    
    }

    pullData()
},[])

    
    const renderData = () => {
        return (
            <div className="coinlist">
                <Chart />
                <ChartDetail />
            </div>
        )
    }
    return renderData()
}
export default CoinInfoPage