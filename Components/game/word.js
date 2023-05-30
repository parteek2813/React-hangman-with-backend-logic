import React from "react";

export default function Word({ actualword, playedLetters }) {
  return (
    <div className="display-flex justify-content-around word-flex">
      {[...actualword].map((letter) => (
        <>
          {playedLetters.has(letter) ? (
            <div className="word">{letter}</div>
          ) : (
            <div className="word">&nbsp;_&nbsp;</div>
          )}
        </>
      ))}
    </div>
  );
}
