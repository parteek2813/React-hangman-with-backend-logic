import React from "react";

export default function Lives({ livesLeft }) {
  return (
    <div className="hangman-container">
      <div className="pole"></div>
      <div className={`hangman hangman-${6 - livesLeft}`}>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
        <div className="hangman__element"></div>
      </div>

      <div className="lives">Lives: {livesLeft}</div>

      <div className="heart-container">
        {/* Hearts display */}
        <div className="hearts">
          {Array.from({ length: livesLeft }).map((_, index) => (
            <span key={index} className="heart"></span>
          ))}
        </div>
      </div>
    </div>
  );
}
