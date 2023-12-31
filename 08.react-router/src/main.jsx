import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Bikes from './pages/Bikes/Bikes.jsx'
import BikesDetail from './pages/BikesDetail/BikesDetail.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/bikes" element={<Bikes/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/bikes/:modelo" element={<BikesDetail/>}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
