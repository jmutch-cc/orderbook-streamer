import React from 'react';
import { Header } from './components/Header';
import { OrderbookStreamer } from "./components/OrderbookStreamer/OrderbookStreamer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header title='CryptoCompare Orderbook L2 Streamer' />
        <OrderbookStreamer exchange={'Binance'} fSym={'BTC'} tSym={'USDT'}/>
    </div>
  );
}

export default App;
