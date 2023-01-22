import PropTypes from 'prop-types';
import css from './Filter.styled.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className='Filter'>
      <p className='Filter__descr'>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Search contact"
        value={value}
        onChange={onChange}
        className='Filter__input'
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;