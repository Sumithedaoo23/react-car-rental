import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from './components/Routes';

// import Routing from './car-rent website/Routes';
// import AddCoffeeItem from './car-rent website/adddataofcar';
// import BookingPage from './car-rent website/book';
// import AdminLogin from './car-rent website/adminlogin';
// import Booked from './car-rent website/yourbooking';
// import Footer from './Footerr';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
