import { useEffect, useState, } from "react";
import axios from "axios";
import Category from "./components/Category";
import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom";


function App() {
  const [navCategories, setNavCategories] = useState([]);
  const [otherCategories, setOtherCategories] = useState([]);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className="black"></div>
      <nav>
         <NavLink to={`/top`} className={({ isActive }) => (isActive ? "active link" : "link")}
>
            Top Games
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/new`}>
            New Games
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/slots`}>
            Slots
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/jackpots`}>
            Jackpots
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/live`}>
            Live
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/blackjack`}>
            Black Jack
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/roulette`}>
            Roulette
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/table`}>
            Table
          </NavLink>
         <NavLink className={({ isActive }) => (isActive ? "active link" : "link")} to={`/category/poker`}>
           Poker
          </NavLink>
         <div className="link">
            Other
            <div className="sublink">
              <NavLink className={({ isActive }) => (isActive ? "active link" : "href")} to={`/other/ball`}>Ball</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active link" : "href")} to={`/other/virtual`}>Virtual</NavLink>
              <NavLink className={({ isActive }) => (isActive ? "active link" : "href")} to={`/other/fun`}>Fun</NavLink>
            </div>
          </div>
        
      </nav>
        <Routes>
          <Route path="/:category" element={<Category />} />
          <Route path="/other/:category" element={<Category />} />
        </Routes>
    </Router>
  );
}

export default App;
