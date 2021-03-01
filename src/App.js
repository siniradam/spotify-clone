import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebapi from "spotify-web-api-js";

const spotify = new SpotifyWebapi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    //window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => console.log(user));
      console.log();
    }

    return () => {};
  }, []);
  return <div className='app'>{token ? <Player /> : <Login />}</div>;
}

export default App;
