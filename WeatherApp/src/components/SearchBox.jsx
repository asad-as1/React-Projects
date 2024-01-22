import React from 'react'

const SearchBox = ({city, handle, search}) => {
  return (
    <div className='searchBox'>
            <input placeholder='Enter city name' type="text" value={city} onChange={handle} />
            <button onClick={search}>Search</button>
    </div>
  )
}

export default SearchBox