const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="col-sm-4">
      <input
        type="text"
        className="form-controll"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type to search...."
      />
    </div>
  );
};

export default SearchBox;
