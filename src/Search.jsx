function Search(props) {
    const searchQuery = props.searchQuery
    const setSearchQuery = props.setSearchQuery

    return (
        <div className="search">
          <input className="search-bar" placeholder="Search mail" value={searchQuery} onChange={
            (e) => setSearchQuery(e.target.value)
          }/>
        </div>
    )
}

export default Search