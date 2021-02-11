import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CoinInfoPage from './pages/CoinInfoPage'
import CoinsPage from './pages/CoinsPage'
import CoinsInfoPage from './pages/CoinInfoPage'
import Header from './components/Header'
import './styles/App.css'
import { WatchListContextProvider } from './context/watchListContext'
import PricesPage from './pages/PricesPage'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Route path='/Prices' component={PricesPage} />
          <Route exact path= "/" component={CoinsPage} />
          <Route path='/coins/:id' component={CoinInfoPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
