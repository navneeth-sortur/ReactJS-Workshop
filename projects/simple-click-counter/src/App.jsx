import React, { useState } from "react";
import Header from "./components/Header";
import ClickCounter from "./components/ClickCounter";
import "./App.css";

export default function App() {
  const [title] = useState("Simple Click Counter");
  return (
    <div className="App">
      <Header title={title} />
      <ClickCounter />
    </div>
  );
}
