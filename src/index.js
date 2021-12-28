import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const DATA = [
  {id: 'dep-1', title: 'Отдел A', description: 'Здесь занимаются маркетинговым продвижением'},
  {id: 'dep-2', title: 'Отдел B', description: 'Мы продаем услуги компании'},
  {id: 'dep-3', title: 'Отдел C', description: 'Мы находим новых клиентов'},
  ];

  ReactDOM.render(
<BrowserRouter>

<App departaments={DATA}/>
  </BrowserRouter>,
    document.getElementById('root')
  );
  
  
  reportWebVitals();
  