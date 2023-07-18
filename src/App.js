import { useState, useEffect } from "react";
import "./App.css";

import Nav from "./Components/Navbar/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import News from "./Pages/News/News";
import Introduction from "./Pages/Introduction/Introduction";
import Specification from "./Pages/Specification/Specification";
import Traks from "./Pages/Traks/Traks";
import TraksTab from "./Components/TraksTab/TraksTab";
import Result from "./Pages/Result/Result";
import Recruit from "./Pages/Recruit/Recruit";
import Successcase from "./Pages/Successcase/Successcase";
import Member from "./Pages/Member/Member";
import Workgroupactivity from "./Pages/Workgroupactivity/Workgroupactivity";
import Relatedactivity from "./Pages/Relatedactivity/Relatedactivity";
import Test from "./Pages/Test";
import Up from "./Components/ScrollUp/ScrollUp";
import { Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const location = useLocation();
  // const [istop, setIstop] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) setIstop(true);
  //     if (window.scrollY !== 0) setIstop(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <Nav
      // istop={istop}
      />
      {/* <Up /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/News" element={<News />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Specification" element={<Specification />} />
        <Route path="/Tracks" element={<Traks />} />
        <Route path="/Tracks/:id" element={<TraksTab />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Successcase" element={<Successcase />} />
        <Route path="/Recruit" element={<Recruit />} />
        <Route path="/Member" element={<Member />} />
        <Route path="/Workgroupactivity" element={<Workgroupactivity />} />
        <Route path="/Relatedactivity" element={<Relatedactivity />} />

        <Route path="/Test" element={<Test />} />
      </Routes>
      {location.pathname === "/" ? null : <Footer />}
    </>
  );
}

export default App;
