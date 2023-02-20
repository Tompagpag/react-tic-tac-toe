// import { useState } from "react";

const Square = ({ value, onClick }) => {
  // const [state, setState] = useState({ value: null });

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
