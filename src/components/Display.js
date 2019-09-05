import React from "react";
// import Dashboard from "./Dashboard";



export default function Display(props) {
  const {balls, strikes} = props;

  return (
    <div>
      <header>
        <h1>Baseball App</h1>
      </header>
      <div>
        <h2>Strikes: {strikes}</h2>
      </div>
      <div>
        <h2>Balls: {balls}</h2>
      </div>
      {/* <Dashboard /> */}
    </div>
  );
}
