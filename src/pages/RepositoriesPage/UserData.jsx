/* eslint-disable react/function-component-definition */
import React from "react";
import PropTypes from 'prop-types';


// eslint-disable-next-line arrow-body-style
export const UserData = ({ user }) => {

  return (
    <>
      <span className='followers' style={{ fontSize: '15px', color: 'darkgray' }}>{user.followers}</span>
      <h6 style={{ fontSize: '14px' }} className='ml-1 follower font-italic'>Followers</h6>
      <h6 style={{ fontSize: '15px' }} className='ml-1 follower font-italic followers'>
        <span className='followers mr-1' style={{ fontSize: '15px', color: 'darkgray' }}>{user.following}</span>seguindo.
      </h6>
    </>
  );
}

UserData.propTypes = {
  user: PropTypes.shape({

    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,

  }).isRequired
}
