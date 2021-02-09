import React, {useState, createContext} from 'react'

export const WatchListContext= createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState([
        "bitcoin",
        "tether",
        "ethereum",
        "litecoin"
    ]);

    const deleteCoinHandler = (coinId) =>{
       setWatchList( watchList.filter((coin) => {return coin !== coinId}))
    }

    return (
        <WatchListContext.Provider value={{watchList, deleteCoinHandler}}>
            {props.children}
        </WatchListContext.Provider>
    )
}