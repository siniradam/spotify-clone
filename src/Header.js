import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";

function Header() {
  const [{ user }] = useDataLayerValue(); //, dispatch

  return (
    <div className='header'>
      <div className='header__left'>
        <Search />
        <input type='' placeholder='Search for artists, songs ..' />
      </div>
      <div className='header__right'>
        <Avatar src={user?.images[0]?.url} alt='Profile' />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
