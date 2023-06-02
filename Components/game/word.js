import React, { useState } from "react";

export default function Word({ actualword, playedLetters }) {
  const [disabledLetter, setdisabledLetter] = useState(new Set());
  const [prevLetter, setprevLetter] = useState(null);

  const handleClick = (letter) => {
    setdisabledLetter((prevDisabledLetters) => {
      const newSet = new Set(prevDisabledLetters);
      newSet.add(prevLetter);
      return newSet;
    });

    setprevLetter(letter);
  };

  return (
    <div className="display-flex justify-content-around word-flex">
      {[...actualword].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <div className="word" onClick={() => handleClick(letter)}>
              {letter}
            </div>
          ) : (
            <div className="word">&nbsp;_&nbsp;</div>
          )}
        </>
      ))}
    </div>
  );
}
