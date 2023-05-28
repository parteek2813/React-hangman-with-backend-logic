import React from "react";

export default function Start({ onstart }) {
  return (
    <div>
      <button onClick={() => onstart()}> Start</button>
    </div>
  );
}
