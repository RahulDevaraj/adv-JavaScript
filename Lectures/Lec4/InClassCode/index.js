import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './components/student';
import {log, print, Expedition} from './components/student'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* const studentObj = new Student("John", "CSIS")
studentObj.print();
console.log(print("Hello"));
const tour = new Expedition("Van Island", 5,['food', 'water', 'sleeping bag'])
tour.print(); */


