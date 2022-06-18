import React, { useState, useEffect } from "react";
import "./App.css";

const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=Fvh4VzUmoBQy7FN3F71VDNHqdXBKd9Pp&q=panda&limit=10&offset=0&rating=g&lang=en'

function App() {
  const [gifs, setGifs] = useState([]);
  
  useEffect(() => {
    console.log("Efecto ejecutado");
    fetch(apiUrl)
    .then(res => res.json())
    .then(respuesta => {
      const {data} = respuesta
      const gifs = data.map(image => image.images.downsized_medium.url)
      setGifs(gifs)
    })
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((singleGif) => (
          <img src={singleGif} alt="Gif test" />
        ))}
      </section>
    </div>
  );
}

export default App;
