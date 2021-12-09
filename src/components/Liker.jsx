import React, { useState } from "react";

const Liker = () => {
  const [inc, setInc] = useState(0);
  let value = inc;
  function incHandler() {
    setInc(value++);
  }
  return (
    <div>
      <div className="yt" onClick={incHandler}>
        <a >
          <img/>
        </a>
      </div>
      <h1>Total Likes {value}</h1>
    </div>
  );
};
export default Liker;
