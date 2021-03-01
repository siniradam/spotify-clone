import React, { useEffect } from "react"; //useState,
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebapi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebapi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      //setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //SET Token
      spotify.setAccessToken(_token);

      //Get User Details
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      //Get Playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }

    //return () => {};
  }, []);

  console.log("👦🏻", user);
  console.log("🔑", token);
  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
