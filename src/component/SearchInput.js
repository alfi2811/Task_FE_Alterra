import React, { useState } from 'react'

const SearchInput = ({handleSearch}) => {
  const [searchText, setSearchText] = useState("")

  return (
    <div style={{marginBottom: '20px'}}>
      <input type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={() => handleSearch(searchText)} >Search</button>
    </div>
  )
}

export default SearchInput
