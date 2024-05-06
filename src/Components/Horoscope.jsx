import { useState, useEffect } from "react";
import HoroscopeApi from "../services/HoroscopeApi";

const Horoscope = ({ sign, timeframe }) => {
  const [horoscope, setHoroscope] = useState([]);

  useEffect(() => {
    HoroscopeApi(sign, timeframe).then(setHoroscope);
  }, [sign, timeframe]);

  return (
    <div className="horoscopeStyle">
      <h2>
        {sign} <br /> <br />
        your horoscope for {timeframe}
      </h2>
      <p>{horoscope}</p>
    </div>
  );
};

export default Horoscope;
