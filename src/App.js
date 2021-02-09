import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import CoinInfoPage from './pages/CoinInfoPage'
import CoinsPage from './pages/CoinsPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path= "/" component={CoinsPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
