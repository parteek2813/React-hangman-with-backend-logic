import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Game from "./Components/game";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// ReactDOM.createRoot(document.getElementById("app")).render(<App />);
