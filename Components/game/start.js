import React from "react";

export default function Start({ onstart, isRunning, running }) {
  return (
    <div>
      <button
        onClick={() => onstart()}
        className={`start-button ${running && "display-none"}`}
      >
        Start
      </button>
    </div>
  );
}
