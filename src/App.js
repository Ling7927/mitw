import { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import News from "./Pages/News/News";
import Introduction from "./Pages/Introduction/Introduction";
import Specification from "./Pages/Specification/Specification";
import Traks from "./Pages/Traks/Traks";
import Result from "./Pages/Result/Result";
import Successcase from "./Pages/Successcase/Successcase";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [istop, setIstop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIstop(true);
      if (window.scrollY !== 0) setIstop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Navbar istop={istop} />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Specification" element={<Specification />} />
        <Route path="/Traks" element={<Traks />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Successcase" element={<Successcase />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
