import React from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";
import Title from "./title";

export default function Layout({
  lives,
  actualWord,
  playedSet,
  guess,
  start,
  isWon,
  isRunning,
  running,
}) {
  return (
    <>
      <div className="game-wrapper">
        {isRunning && (
          <>
            <div className="left-pane">
              <Lives livesLeft={lives} />
            </div>

            <div className="right-pane">
              <Title />
              <Word actualword={actualWord} playedLetters={playedSet} />
              <Letters playedLetters={playedSet} onSelect={guess} />
            </div>
          </>
        )}
        <Start onstart={start} isRunning={isRunning} running={running} />

        <div className="won-container">
          {isWon && (
            <>
              <div className="won-style">You Won!!</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
