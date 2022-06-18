import React, { useState } from "react";
import "./App.css";

const GIFS = [
  "https://media3.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif?cid=ecf05e47ryil0409i06oxn1qojh9mrj799t981oi3g2bs3jb&rid=giphy.gif&ct=g",
  "https://media3.giphy.com/media/ialSDndyZsksMRJWsb/giphy.gif?cid=790b7611a5e683541ea979d987ae8fd2716974fe8e4ce9c3&rid=giphy.gif&ct=g",
];

const DIFF = [
  "https://media3.giphy.com/media/xNuoUMEJCdVKVm7r2x/giphy.gif?cid=ecf05e47j1zatp4hsujnbo5742j60o125cak7cmi7ij15tow&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/otJXCilaZR8IuAFURV/giphy.gif?cid=ecf05e47j9wxoqevpt1eeahbk3azzillye6mp2o77708h6wa&rid=giphy.gif&ct=g",
  "https://media2.giphy.com/media/QDf24rINdjHwD3vOLV/giphy.gif?cid=ecf05e47y7pkvigch28ynsupcb667nidydkrhlx34r7y7v7s&rid=giphy.gif&ct=g",
];

function App() {
  const [gifs, setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="Gif test" />
        ))}
        <button onClick={() => setGifs(DIFF)}> Cambiar gifs </button>
      </section>
    </div>
  );
}

export default App;
