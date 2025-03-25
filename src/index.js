import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Register';
import Login from './Login';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav>
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            <li>
              <Link to="/register">註冊</Link>
            </li>
            <li>
              <Link to="/Login">登入</Link>
            </li>
          </ul>
        </nav>

        {/* 頁面路由 */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
