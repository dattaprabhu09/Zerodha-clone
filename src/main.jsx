import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import App from './App.jsx';

import Navbar from "./landing_page/Navbar.jsx"
import Footer from './landing_page/Footer.jsx';
import NotFound from './landing_page/Notfound.jsx';

import Homepage from './landing_page/home/Homepage.jsx'
import Signup from "./landing_page/signup/Signup.jsx"
import AboutPage from './landing_page/about/Aboutpage.jsx';
import ProductPage from "./landing_page/product/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/PricingPage.jsx"
import SupportPage from './landing_page/support/Supportpage.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/"       element={<Homepage/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/product" element={<ProductPage/>}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>
      <Route path="/support" element={<SupportPage/>}></Route>
      <Route path="/*" element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
)
