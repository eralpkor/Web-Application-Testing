import React from 'react';

export default function DisplaySome(props) {
  return (
    <div>
      <div>Strikes: {props.strikes}</div>
      <div>Balls: {props.balls}</div>
    </div>
  )
}