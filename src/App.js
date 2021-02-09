import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CoinInfoPage from './pages/CoinInfoPage'
import CoinsPage from './pages/CoinsPage'
import Header from './components/Header'
import './styles/App.css'
import { WatchListContextProvider } from './context/watchListContext'

function App() {
  return (
    <div className="App">
      <WatchListContextProvider>
        <BrowserRouter>
          <Header />
          <Route exact path= "/" component={CoinsPage} />
        </BrowserRouter>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
