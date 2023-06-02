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

  const All_WORDS = [
    "aardvark",
    "albatross",
    "alligator",
    "alpaca",
    "ant",
    "anteater",
    "antelope",
    "ape",
    "armadillo",
    "donkey",
    "baboon",
    "badger",
    "barracuda",
    "bat",
    "bear",
    "beaver",
    "bee",
    "bison",
    "boar",
    "buffalo",
    "butterfly",
    "camel",
    "capybara",
    "caribou",
    "cassowary",
    "cat",
    "caterpillar",
    "cattle",
    "chamois",
    "cheetah",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chough",
    "clam",
    "cobra",
    "cockroach",
    "cod",
    "cormorant",
    "coyote",
    "crab",
    "crane",
    "crocodile",
    "crow",
    "curlew",
    "deer",
    "dinosaur",
    "dog",
    "dogfish",
    "dolphin",
    "donkey",
    "dotterel",
    "dove",
    "dragonfly",
    "duck",
    "dugong",
    "dunlin",
    "eagle",
    "echidna",
    "eel",
    "eland",
    "elephant",
    "elephant-seal",
    "elk",
    "emu",
    "falcon",
    "ferret",
    "finch",
    "fish",
    "flamingo",
    "fly",
    "fox",
    "frog",
    "gaur",
    "gazelle",
    "gerbil",
    "giant-panda",
    "giraffe",
    "gnat",
    "gnu",
    "goat",
    "goose",
    "goldfinch",
    "goldfish",
    "gorilla",
    "goshawk",
    "grasshopper",
    "grouse",
    "guanaco",
    "guinea-fowl",
    "guinea-pig",
    "gull",
    "hamster",
    "hare",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hornet",
    "horse",
    "human",
    "hummingbird",
    "hyena",
    "ibex",
    "ibis",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "kangaroo",
    "kingfisher",
    "koala",
    "komodo-dragon",
    "kookabura",
    "kouprey",
    "kudu",
    "lapwing",
    "lark",
    "lemur",
    "leopard",
    "lion",
    "llama",
    "lobster",
    "locust",
    "loris",
    "louse",
    "lyrebird",
    "magpie",
    "mallard",
    "manatee",
    "mandrill",
    "mantis",
    "marten",
    "meerkat",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mouse",
    "mosquito",
    "mule",
    "narwhal",
    "newt",
    "nightingale",
    "octopus",
    "okapi",
    "opossum",
    "oryx",
    "ostrich",
    "otter",
    "owl",
    "ox",
    "oyster",
    "panther",
    "parrot",
    "partridge",
    "peafowl",
    "pelican",
    "penguin",
    "pheasant",
    "pig",
    "pigeon",
    "polar-bear",
    "pony",
    "porcupine",
    "porpoise",
    "prairie-dog",
    "quail",
    "quelea",
    "quetzal",
    "rabbit",
    "raccoon",
    "rail",
    "ram",
    "rat",
    "raven",
    "red-deer",
    "red-panda",
    "reindeer",
    "rhinoceros",
    "rook",
    "salamander",
    "salmon",
    "sand-dollar",
    "sandpiper",
    "sardine",
    "scorpion",
    "sea-lion",
    "sea-urchin",
    "seahorse",
    "seal",
    "shark",
    "sheep",
    "shrew",
    "skunk",
    "snail",
    "snake",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starling",
    "stingray",
    "stinkbug",
    "stork",
    "swallow",
    "swan",
    "tapir",
    "tarsier",
    "termite",
    "tiger",
    "toad",
    "trout",
    "turkey",
    "turtle",
    "vicuña",
    "viper",
    "vulture",
    "wallaby",
    "walrus",
    "wasp",
    "water-buffalo",
    "weasel",
    "whale",
    "wolf",
    "wolverine",
    "wombat",
    "woodcock",
    "woodpecker",
    "worm",
    "wren",
    "yak",
    "zebra",
  ];

  const word = All_WORDS[Math.floor(Math.random() * All_WORDS.length)];

  const start = () => {
    setactualWord(word);
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
