import PropTypes from 'prop-types';

/* eslint-disable react/function-component-definition */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line arrow-body-style
export const PersonalInfo = ({ user }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className='pt-3'>
        <p className='name text-white'>{user.login}</p>
        <p className='city text-white'>{user.location}</p>
        <a target='_blank' href={user.blog} className='site text-white' rel="noreferrer"> {user.blog}</a>
      </div>
    </>
  );
};


PersonalInfo.propTypes = {
  user: PropTypes.shape({

    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    blog: PropTypes.string

  }).isRequired
}
