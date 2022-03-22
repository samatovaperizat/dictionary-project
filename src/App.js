import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary</header>
        <main>
          <Dictionary defaultKeyword="kiwi"/>
        </main>
    <footer className="App-footer"><small>Coded by Perizat Moldobaeva</small></footer>
    </div>
    </div>
  );
}

