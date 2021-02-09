import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CoinInfoPage from './pages/CoinInfoPage'
import CoinsPage from './pages/CoinsPage'
import Header from './components/Header'
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Route exact path= "/" component={CoinsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
