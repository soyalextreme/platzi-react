import React from 'react';

// styles 
import "../assets/styles/components/Header.scss";

// img

import Logo from "../assets/static/logo-platzi-video-BW2.png"
import UserIcon from "../assets/static/user-icon.png"

// Return explicito
const Header = () => (
  <header className="header">
    <img className="header__img" src={Logo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={UserIcon} alt=""/>
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

);


export default Header;