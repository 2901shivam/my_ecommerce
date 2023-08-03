import React from "react";
import classes from './Footer.module.css'
import Facebook from '../Image/Facebook Logo.png';
import Youtube from '../Image/youtube.jpg';
import Spotify from '../Image/Spotify Logo.png';
const Footer = () => {
  return (
    <footer>
        <div className={classes.footer_title}>
            The Generics
        </div>
        <div className={classes.footer_icons}>
            <ul>
                <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <img src={Youtube} alt="YouTube logo"/>
                </a></li>
                <li><a href="https://spotify.com" target="_blank" rel="noreferrer">
                    <img src={Spotify} alt="Spotify logo"/>
                </a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <img src={Facebook} alt="Facebook logo" />
                </a></li>
            </ul>
        </div>
    </footer>
  )
};

export default Footer;
