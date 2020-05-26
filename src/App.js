import React, { useState, useEffect } from "react";
import NasaPost from "./NasaPost";
import axios from "axios";
import "./App.css";

function App() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=CtUPAONsTf6UnI5ZLRbJkgTogRdByfCgR6W6TGf2#")
    .then(response => {
      setApod(response.data);
      console.log(response);
    })
    .catch(error => console.log("Something went wrong: ", error));
  }, []);

  return <NasaPost apod={apod} />;
  //   <div className="App">
      
  //   </div>
  // );
}

export default App;
