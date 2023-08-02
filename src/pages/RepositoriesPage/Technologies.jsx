/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line react/function-component-definition, arrow-body-style, react/prop-types
export const Technologies = ({ languages, currentLanguage, onClicktech }) => {


  return (
    <div className='technologies mt-5'>
      <div>
        <h6>Filtrar por linguagem</h6>
        {
          languages.map((language) => (
            <span key={Math.random()} onClick={() => onClicktech(language.name)}
              className={`technology d-block ${currentLanguage === language.name ?
                'selected' : ''}`}>
              {language.name}
              <span className='float-right'>{language.count}
              </span>
            </span>
          ))
        }

        <button onClick={() => {onClicktech(null)}} className="cleaner" type='button'>
          Limpar
        </button>
      </div>
    </div>
  );
};

Technologies.defaultProps = {
  currentLanguage: null,
  onClicktech: null
}

Technologies.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentLanguage: PropTypes.string,
  onClicktech: PropTypes.func
}
