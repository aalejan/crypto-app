import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chart from '../components/Chart'
import ChartDetail from '../components/ChartDetail'
import cryptoApi from '../api/cryptoApi'

export const CoinInfoPage = () => {
    const [coinData, setCoinData] = useState({})
    const {id} = useParams()

    const formatData= data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1].toFixed(2)
            }
        })
    }

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
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail:detail.data[0]
        })

    
    }

    pullData()
},[])

    
    const renderData = () => {
        return (
            <div className="coinlist">
                <Chart data={coinData} />
                <ChartDetail />
            </div>
        )
    }
    return renderData()
}
export default CoinInfoPage