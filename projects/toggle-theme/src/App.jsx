import { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div
      className={`app-container ${darkTheme ? "dark-theme" : "light-theme"}`}
    >
      <header className="App-header">
        <h1>Theme Switching App</h1>
        <ThemeToggle />
      </header>
      <div className="body">
        React is a JavaScript library for rendering user interfaces (UI). UI is
        built from small units like buttons, text, and images. React lets you
        combine them into reusable, nestable components. From web sites to phone
        apps, everything on the screen can be broken down into components.{" "}
        <br></br>React can change how you think about the designs you look at
        and the apps you build. When you build a user interface with React, you
        will first break it apart into pieces called components. Then, you will
        describe the different visual states for each of your components.
        Finally, you will connect your components together so that the data
        flows through them.
      </div>
    </div>
  );
}

export default App;
