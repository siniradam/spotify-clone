import React from "react";
import "./Footer.css";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img
          src='https://static.billboard.com/files/media/Metallica-Master-of-Puppets-album-covers-billboard-1000x1000-compressed.jpg'
          alt=''
          className='footer_albumPhoto'
        />
        <div className='footer__songInfo'>
          <h3>Hey</h3>
          <p>Pixies</p>
        </div>
      </div>

      <div className='footer__center'>
        <ShuffleIcon className='footer__green' />
        <SkipPreviousIcon className='footer__icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
        <SkipNextIcon className='footer__icon' />
        <RepeatIcon className='footer__green' />
      </div>

      <div className='footer__right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
