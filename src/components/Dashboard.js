import React from "react";

export default function Dashboard(props) {
  const { balls, strikes, setStrikes, setBalls } = props;

  function handleStrike() {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
      setBalls(0);
    }
  }
  function handleBalls() {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
      setStrikes(0);
    }
  }
  return (
    <div className="buttons">
      <div>
        <button onClick={handleStrike}
        >Strikes
        </button>
      </div>
      <div>
        <button onClick={handleBalls}>
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
