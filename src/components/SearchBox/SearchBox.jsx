import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <h2 htmlFor="search">Find contacts by name</h2>
      <input
        type="text"
        id="search"
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;