import React, {useState, useEffect} from 'react'
import cryptoApi from '../api/cryptoApi'
import ExchangeCard from '../components/ExchangeCard'

const ExchangesPage = () => {
    const [exchanges, setExchanges] = useState([])

    useEffect(() => {
        const pullData = async () => {
            const response = await cryptoApi.get('/exchanges', {
                params: {
                    per_page: 15,
                    page: '1'

                }
            })
            setExchanges(response.data)
        }
        console.log(exchanges)

        pullData()
    },[])

    const renderedExchnages = () => {
        return(
            <ul className="list-group ">
                {
                    exchanges.map((exchange) => {
                        return <ExchangeCard key={exchange.id} exchange={exchange} />
                    })
                }
            </ul>
        )
    }

    return (
        <div className="shadow border p-2 rounded mt-2 bg-light mb-4">
            <span></span>
            {renderedExchnages()}
        </div>
    )
}

export default ExchangesPage
