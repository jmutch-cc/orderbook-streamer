import React from 'react';
import { Header } from './components/Header';
import { OrderbookStreamer } from "./components/OrderbookStreamer/OrderbookStreamer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let exchange = params.get('e') || 'Binance';
    let fSym = params.get('fsym') || 'ETH';
    let tSym = params.get('tsym') || 'USDT';
    let apiKey = params.get('apikey') || 'df1c3574c94e2c8e04a8c74b07a60b6d2e0279f5a209d81c80973d7bffdd3908';
    let subscribe = params.get('subscribe') || false;

    return (
        <div className="App">
            <Header title='CryptoCompare Orderbook L2 Streamer' />
            <OrderbookStreamer exchange={exchange} fSym={fSym} tSym={tSym} apiKey={apiKey} autoSubscribe={subscribe}/>
        </div>
    );
}

export default App;
