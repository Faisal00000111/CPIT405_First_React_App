import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [shortURL, setShortURL] = useState('');
  const [longURL, setLongURL] = useState('');

  function handleClick() {
    const randomid = Math.random().toString(36).substring(7);
    setShortURL('http://cp405.co/'+randomid);
  }
  return (
    <div className="container">
      <h1>Tiny URL</h1>
      <div className="form">
        <label htmlFor="longURL">Enter a long URL</label>
        <input type="text" id="longURL"
        value={longURL} onChange={(e)=> setLongURL(e.target.value)}/>
      </div>
      <button className="btn" onClick={handleClick}>Shorten URL</button>
      <div className="result">
        <p id="shortURL">{shortURL}</p>
      </div>
    </div>
  );
}

export default App;
