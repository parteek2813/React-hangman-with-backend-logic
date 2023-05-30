import React, { useState } from "react";
import Layout from "./layout";

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
  const isRunning = actualWord;

  const isWon =
    isRunning &&
    lives &&
    [...word_set].reduce((acc, curr) => {
      if (!playedSet.has(curr)) return false;
      return acc;
    }, true);

  const running = false;

  const guess = (letter) => {
    setplayedWords((prev) => [...prev, letter]);
  };

  const start = () => {
    setactualWord("house");
    setplayedWords([]);
    running = true;
  };

  return (
    <>
      <Layout
        lives={lives}
        actualWord={actualWord}
        playedSet={playedSet}
        guess={guess}
        start={start}
        isWon={isWon}
        isRunning={isRunning}
        running={isRunning}
      />
    </>
  );
}
