import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import Game from "./Components/game";

const App = () => {
  return (
    <>
      <div> Hello world! </div>;
      <Game />
    </>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// ReactDOM.createRoot(document.getElementById("app")).render(<App />);
