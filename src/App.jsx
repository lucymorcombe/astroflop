import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToggleViewMode } from "./Components/ToggleViewMode";
import useLocalStorage from "use-local-storage";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SunSignsPage from "./Pages/SunSignsPage";
import OtherSignsPage from "./Pages/OtherSignsPage";
import HoroscopePage from "./Pages/HoroscopePage";
import logo from "./assets/logoLightMode.svg";

function App() {
  const [isLight, setisLight] = useLocalStorage("isLight", true);

  return (
    <div className="bodyClass" data-theme={isLight ? "light" : "dark"}>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <BrowserRouter>
          <header>
            <nav>
              <ul>
                <div className="listItem1">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                </div>
                <div className="listItem2">
                  <Link to="/sunsigns">
                    <li>
                      As basic as it gets:
                      <br />
                      <strong>Sun Signs</strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem3">
                  <Link to="/othersigns">
                    <li>
                      Wait, there's more!?
                      <br />
                      <strong>Moon and Rising Signs</strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem4">
                  <Link to="/horoscope">
                    <li>
                      You know you want to!
                      <br />
                      <strong>Read your horoscope</strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem1Mob">
                  <Link to="/">
                    <li>
                      <strong>Home</strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem2Mob">
                  <Link to="/sunsigns">
                    <li>
                      <strong>As basic as it gets: Sun Signs</strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem3Mob">
                  <Link to="/othersigns">
                    <li>
                      <strong>
                        Wait, there's more!? Moon and Rising Signs
                      </strong>
                    </li>
                  </Link>
                </div>
                <div className="listItem4Mob">
                  <Link to="/horoscope">
                    <li>
                      <strong>You know you want to! Read your horoscope</strong>
                    </li>
                  </Link>
                </div>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sunsigns" element={<SunSignsPage />} />
            <Route path="/othersigns" element={<OtherSignsPage />} />
            <Route path="/horoscope" element={<HoroscopePage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToggleViewMode
        isChecked={isLight}
        handleChange={() => setisLight(!isLight)}
      />
    </div>
  );
}

export default App;
