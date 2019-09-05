import React from "react";

export default function Dashboard(props) {
  const { balls, strikes, setStrikes, setBalls } = props;

  function handleStrike(num) {
    if (strikes < 3 || num < 4) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
    }
  }
  function handleBalls() {
    
  }
  return (
    <div className="buttons">
      <div>
        <button onClick={() => handleStrike(balls)}>Strikes</button>
      </div>
      <div>
        <button onClick={() => setBalls(balls + 1) || handleStrike}>
          Balls
        </button>
      </div>
      <div>
        <button>Foul</button>
      </div>
      <div>
        <button>Hit</button>
      </div>
    </div>
  );
}
