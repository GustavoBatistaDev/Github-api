/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import octocat from '../../assets/img/octocat.png';
import logo from '../../assets/img/GitHub_Logo_white.png';

import "./styles.css";

// eslint-disable-next-line import/order
import { FaSearch } from 'react-icons/fa';


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
          <Link to={`/repositories`} className="search-button" >
            <FaSearch className="mt-icon" fontSize={16} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
