import React, {useState, useEffect} from 'react'
import cryptoApi from '../api/cryptoApi'

const ExchangesPage = () => {
    const [exchanges, getExchanges] = useState([])

    useEffect(() => {
        const pullData = async () => {
            const response = await cryptoApi.get('/exchanges', {
                params: {
                    per_page: 15,
                    page: '1'

                }
            })
        }

        pullData()
    },[])


    return (
        <div>
            
        </div>
    )
}

export default ExchangesPage
