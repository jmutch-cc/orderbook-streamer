import React from 'react';
import { Header } from './components/Header';
import { OrderbookStreamer } from "./components/OrderbookStreamer/OrderbookStreamer";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header title='Orderbook Streamer' />
        <OrderbookStreamer lastUpdated={0}/>
    </div>
  );
}

export default App;
