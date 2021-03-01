import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, reducer] = useDataLayerValue(); //, dispatch

  const onClickHandler = (track) => {
    let player = document.getElementById("audioPlayer");
    player.src = track.preview_url;
    player.play();
  };

  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Disover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body__shuffle' />
          <Favorite fontSize='large' />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} onClickHandler={onClickHandler} />
        ))}
      </div>
    </div>
  );
}

export default Body;
