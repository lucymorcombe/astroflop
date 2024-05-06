import { useState } from "react";
import SelectSign from "../Components/SelectSign";
import SelectTimeframe from "../Components/SelectTimeframe";
import Horoscope from "../Components/Horoscope";
import SunSignImagesSmall from "../Components/SunSignImagesSmall";

function HoroscopePage() {
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);

  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  };

  return (
    <>
      <div className="pageTitles">
        <h1>Your Daily Horoscope</h1>
        <h3>(you might as well, you're already here...)</h3>
      </div>
      <div className="pageIntros">
        <p>
          A horoscope is like a personal forecast that gives you insights into
          different aspects of your life based on your birth date. It can cover
          everything from your personality and relationships to your career and
          daily events. It's a fun way to explore how the stars and planets
          might be influencing your world and what you can expect in the near
          future. As long as taken with a pinch of salt, you've got nothing to
          lose!{" "}
        </p>
      </div>
      <div className="horoscopeWrapper">
        <div className="buttons">
          {!selectedSign && <SelectSign onSignSelected={setSelectedSign} />}
          {selectedSign && !selectedTimeframe && (
            <SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />
          )}
          {selectedSign && selectedTimeframe && (
            <Horoscope sign={selectedSign} timeframe={selectedTimeframe} />
          )}
          {selectedSign && (
            <div className="restartButton">
              <button onClick={restart}>Restart</button>
            </div>
          )}
        </div>
        <div className="signImages2">
          <SunSignImagesSmall />
        </div>
      </div>
    </>
  );
}

export default HoroscopePage;
