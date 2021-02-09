import React from 'react'

export const Coin = ({coin}) => {
    return (
        <div>
            Alex Alej
          <h1>{coin.name}</h1>
          <h3>{coin.current_price}</h3>
        </div>
    )
}

export default Coin