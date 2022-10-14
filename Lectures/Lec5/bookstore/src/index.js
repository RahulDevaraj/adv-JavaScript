import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SFC from './components/funcComp'
import reportWebVitals from './reportWebVitals';
import Greeting from './components/greeting';
import Score from './components/score';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Greeting name="Kannan" age={29}/>
  <SFC place="ELAMPAL"/>
  <Score init={0}/>
  </>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
