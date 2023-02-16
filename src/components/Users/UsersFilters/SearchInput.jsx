export const SearchInput = ({ onChangeSearch, onResetSearch, search }) => {
  return (
    <div className="input-group input-group-lg mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Type to search ..."
        onChange={onChangeSearch}
        value={search}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={onResetSearch}>
        Reset
      </button>
    </div>
  );
};
