import React, { useRef, useState } from 'react'
import Content from '../../components/content/Content'
import { useGetMovieBySearchQuery } from '../../redux/api/movie-api'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const searchValue = useRef(null)
  const [search, setSearch] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const {data, isLoading, error} = useGetMovieBySearchQuery({query: search}, {skip: !search})
  
  const handleSearch = e => {
    e.preventDefault()
    setSearch(searchValue.current.value)
  }
  
  return (
    <div>
      <div className="bg-black py-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
          <div className={`relative transition-all duration-300 ease-in-out ${isFocused ? 'scale-105' : ''}`}>
            <input
              ref={searchValue}
              type="search"
              placeholder="Search for movies..."
              className="w-full bg-gray-900 text-white border-2 border-red-600 rounded-full py-4 px-6 pr-16 text-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 ease-in-out"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-3 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out hover:scale-110"
            >
              <FaSearch className="w-6 h-6 transition-transform duration-300 ease-in-out hover:rotate-12" />
            </button>
          </div>
        </form>
      </div>
      <Content data={data}/>
    </div>
  )
}

export default Search