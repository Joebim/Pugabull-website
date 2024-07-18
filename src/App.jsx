
import React, { lazy, Suspense, useEffect } from "react";
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
const Home = lazy(() => import('./pages/Home'));
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer.jsx'));
import { Loader } from "./components/Loader.jsx";
import FontLoad from "./components/FontLoad.jsx";

function App() {

  FontLoad()
  
  return (
    <>
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
    </Suspense>

    </>
  )
}

export default App
