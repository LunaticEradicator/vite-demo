
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './pages/App';
import HeaderOne from './pages/HeaderOne';


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <>
    <HeaderOne />
    <App />
  </>

)


