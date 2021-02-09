import React, {useState, createContext} from 'react'

export const WatchListContext= createContext();

export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState([
        "bitcoin",
        "tether",
        "ethereum",
        "litecoin"
    ]);

    return (
        <WatchListContext.Provider value={{watchList}}>
            {props.children}
        </WatchListContext.Provider>
    )
}