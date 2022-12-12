import React from 'react';
import Mainnav from './components/mainnav';
import Home from './components/home';
import Articles from './components/articles'
import Tutorials from './components/tutorial';
import Detect from './components/detect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Mainnav/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="articles" element={<Articles />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="detect" element={<Detect />} />
        
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    {/* <Articles/> */}
    {/* <Tutorials/> */}
    {/* <Detect/> */}
    </>
  );
}

export default App;
