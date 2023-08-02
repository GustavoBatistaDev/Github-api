import PropTypes from 'prop-types';

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


export function ProfilePhoto({ user }) {

  return (
    <div className=''>
      <div id="cursor-pointer">
        <Link className='text-white' to='/'>
          <FaArrowLeft fontSize={20} />
        </Link>
      </div>

      <div className='container-data-user'>
        <img className='user-photo' src={user.avatar_url} alt="" />
      </div>
    </div>
  );
}

ProfilePhoto.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.number,
    blog: PropTypes.string,
    location: PropTypes.string.isRequired,
  }).isRequired
}
