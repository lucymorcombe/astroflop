const SelectTimeframe = ({ onTimeframeSelected }) => {
  return (
    <div className="timeframeButtonGrid">
      {["yesterday", "today", "tomorrow"].map((timeframes) => (
        <button
          className="timeframe"
          key={timeframes}
          onClick={() => onTimeframeSelected(timeframes)}
        >
          {timeframes}
        </button>
      ))}
    </div>
  );
};

export default SelectTimeframe;
