import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./components/Category";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import { FiMoon, FiSun } from "react-icons/fi";

import Pages from "./pages/Pages";
import Theme from "./components/Theme";
import "../src/components/Theme.css";
import { useState } from "react";
import Home from "./pages/Home";
function App() {
  const [darkmode, setdarkmode] = useState(true);
  
  return (
    <div className={darkmode ? "dark-mode" : "light-mode"}>
      <div className="theme">
        <span>
          <FiSun style={{ color: darkmode ? "#fff" : "yellow" }} />
        </span>
        <div className="switch-checkbox">
          <input
            type="checkbox"
            onClick={() => {
              setdarkmode(!darkmode);
            }}
          />
        </div>
        <span>
          <FiMoon style={{ color: darkmode ? "#c96dfd" : "black" }} />
        </span>
      </div>
      <BrowserRouter>
        <div className="logo">
          <Link className="gotohome" to="/">
            <h1 style={{ color: darkmode ? "#EEEBDD" : "#000000" }}>
              Recipe's Hut
              <span>🏠</span>
            </h1>
          </Link>
        </div>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
