import React from 'react'
import { FaCartPlus} from 'react-icons/fa';
const Navbar = () => {
    return (
        <div className="navbar bg-gray-400 fixed opacity-75">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-52 text-white">
              <li>
                <a>Furniture</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Shop</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact </a></li>
            </ul>
          </div>
          <img className='w-[120px]' src="https://i.ibb.co/mqJtqpH/Asset-1-1.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white text-[18px]">
         
            <li tabIndex={0}>
              <details>
                <summary>Furniture</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Shop</a></li>
              <li><a>About Us</a></li>
              <li><a>Contact </a></li>
          </ul>
        </div>
        <div className="navbar-end">
      <FaCartPlus color="white" size="30px"/>
        </div>
      </div>
    )
}

export default Navbar;