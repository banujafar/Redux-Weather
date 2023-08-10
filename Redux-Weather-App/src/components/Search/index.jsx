import styles from "./SearchBar.module.scss";
const Search = (props) => {
  return (
    <form onSubmit={props.onSearch} className={styles["form-search"]}>
      <input
        type="text"
        value={props.value}
        onChange={(e) => props.onChangeValue(e.target.value)}
        className={styles["form-search__input"]}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.onSearch();
        }}
        className={styles["form-search__btn"]}
      >
        Search
      </button>
    </form>
  );
};
export default Search;
