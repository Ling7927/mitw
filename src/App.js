import { useState,useEffect } from 'react';
import './App.css';

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News/News";
import Introduction from './Pages/Introduction/Introduction';
import Network from './Pages/Network/Network';
import Preconnectathon from './Pages/Preconnectathon/Preconnectathon';
import  Result  from './Pages/Result/Result';
import { Routes ,Route} from 'react-router-dom';
function App() {
  const [istop,setIstop]=useState(true);

  useEffect (()=>{
    const handleScroll=()=>{
      if(window.scrollY === 0) setIstop(true);
      if(window.scrollY !== 0) setIstop(false);
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <>
    <Navbar 
    istop={istop}
    />
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/Introduction" element={<Introduction />} />
      <Route path="/Network" element={<Network />} />
      <Route path="/Preconnectathon" element={<Preconnectathon />} />
      <Route path="/Result" element={<Result />} />

    </Routes>
    <Footer />


    </>
  );
}

export default App;
