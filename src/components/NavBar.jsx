// NavBar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div> 
 <div className="navbar bg-[#663399]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn text-white rounded-md btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </div>
    <div className="avatar ml-10">
  <div className="w-10 rounded-full">
    <img src="/book-logo.png" alt='logo site' />
  </div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className='text-white text-lg'> <Link to="/">Home</Link></li>
        <li className='text-white text-lg'><Link to="/about">About</Link></li>
        <li className='text-white text-lg'><Link to="/blog">Blog</Link></li>
        <li className='text-white text-lg'><Link to="/faq">FAQ</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <button className='w-24 h-11 bg-[#eab676] rounded-md'>Buy book</button>
    <button className='w-24 h-11 bg-[#eab676] rounded-md ml-5 mr-12'>Sign In</button>
  </div>
</div>

</div>

    );
}

export default Navbar;
