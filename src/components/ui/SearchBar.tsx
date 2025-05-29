import '../../styles/SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search event, location, etc"
        className="search-input"
      />
      <i className="bi bi-search search-icon" />
    </div>
  )
}

export default SearchBar