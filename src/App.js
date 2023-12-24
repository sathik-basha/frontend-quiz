import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Component/Header';
import Body from './Component/Body';
import './index.css';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Body/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);