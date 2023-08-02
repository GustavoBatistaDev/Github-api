/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import octocat from '../../assets/img/octocat.png';
import logo from '../../assets/img/GitHub_Logo_white.png';

import "./styles.css";

// eslint-disable-next-line import/order



// eslint-disable-next-line react/function-component-definition
const Main = () => {
  const [login, setLogin] = useState('');

  return (
    <div className="containerr">
      <div>
        <div className="container-image">
          <img height={200} src={octocat} alt="" />
          <img height={100} src={logo} alt="" />
        </div>
        <div className="container-input">
          <input value={login} onChange={e => setLogin(e.target.value)} placeholder="Search user..." className="search-user" type="text" />
          <Link to={`${login}/repositories`} className="search-button" >
            <i className="fa-solid fa-magnifying-glass text-white"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
