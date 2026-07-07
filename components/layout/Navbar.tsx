import React from 'react'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='span-2 w-full bg-gray-700 text-white p-4'>
      <ul className='flex justify-evenly'><li>Home
      </li>
      <li>
        {/* <input className="bg-gray-800 p-2 w-4xl test-white-700 placeholder:text-gray-500  border-gray-300 focus:outline-none focus:ring-2 focus:gray-500" type="text" placeholder='Search github username'/> */}
        <SearchBar/>
      </li>
      <li></li>
      <li>
        Favorites
      </li>
      <li>
        Compare
      </li>
      <li>
        About
      </li>
      <li>
        Profile
      </li>
      </ul>
    </div>
  )
}

export default Navbar