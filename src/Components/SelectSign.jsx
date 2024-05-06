import { useState, useEffect } from "react";
import SignApi from "../services/SignApi";

const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    SignApi().then(setSigns);
  }, []);

  return (
    <>
      <div className="signButtonGrid">
        {signs.map((sign) => (
          <button key={sign} onClick={() => onSignSelected(sign)}>
            {sign}
          </button>
        ))}
      </div>
    </>
  );
};

export default SelectSign;
