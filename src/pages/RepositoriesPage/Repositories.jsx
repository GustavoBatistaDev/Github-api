/* eslint-disable react/jsx-curly-brace-presence */
import PropTypes from 'prop-types';
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
// eslint-disable-next-line react/function-component-definition
export const Repositories = ({ repositories, currentLanguage }) => {

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        (
          repositories
            .filter((repository) =>  currentLanguage === null || currentLanguage === '' || repository.language === currentLanguage)
            .map((repository) => (
              <div key={repository.id} className="card-repo col-md-3">
                <h5>{repository.name}</h5>
               
                <div>
                  <p className='tecnology'>{repository.language}</p>
                  <a className='float-right view-more' href={`${repository.html_url}`}> Ver mais</a>
                </div>
              </div>
            ))
        )
      }
    </>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    })
  ).isRequired,
  currentLanguage: PropTypes.string.isRequired
};
