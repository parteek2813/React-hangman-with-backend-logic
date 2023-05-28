import React, { useState } from "react";
import Lives from "./lives";
import Word from "./word";
import Letters from "./letters";
import Start from "./start";

const MAX_LIVES = 6;
export default function Game() {
  //   const [lives, setlives] = useState(6);
  const [actualWord, setactualWord] = useState("");
  const [playedWords, setplayedWords] = useState([]);

  const word_set = new Set([...actualWord]);
  const playedSet = new Set([...playedWords]);
  const wrongLetters = playedWords.filter((letter) => {
    return !word_set.has(letter);

    //this will only return true
    // if this is not in the word list and then i am filtering out
    // the required resources
  });

  const lives = MAX_LIVES - wrongLetters.length;
  const isRunning = lives && actualWord;

  const isWon =
    isRunning &&
    [...word_set].reduce((acc, curr) => {
      if (!playedSet.has(curr)) return false;
      return acc;
    }, true);

  const guess = (letter) => {
    setplayedWords((prev) => [...prev, letter]);
  };

  const start = () => {
    setactualWord("house");
    setplayedWords([]);
  };

  return (
    <>
      {isRunning && (
        <>
          <Lives livesLeft={lives} />
          <Word actualword={actualWord} playedLetters={playedSet} />
          <Letters playedLetters={playedSet} onSelect={guess} />
        </>
      )}
      <Start onstart={start} />

      {isWon && (
        <>
          <div>You Won!!</div>
        </>
      )}
    </>
  );
}
