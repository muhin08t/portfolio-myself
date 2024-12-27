// NavBar.js

import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    return (
 <div className="navbar bg-[#f8f9fa] py-5 sticky top-0 z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn text-black rounded-md btn-ghost lg:hidden">
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
        <li className='text-black text-lg'> <Link smooth to="#home">Home</Link></li>
        <li className='text-black text-lg'><Link smooth to="#skills">Skills</Link></li>
        <li className='text-black text-lg'><Link smooth to="#experience">Experience</Link></li>
        <li className='text-black text-lg'><Link smooth to="#projects">Projects</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1">
        <li className='text-black text-lg'> <Link smooth to="#home">Home</Link></li>
        <li className='text-black text-lg'><Link smooth to="#skills">Skills</Link></li>
        <li className='text-black text-lg'><Link smooth to="#experience">Experience</Link></li>
        <li className='text-black text-lg'><Link smooth to="#projects">Projects</Link></li>
    </ul>
  </div>
  <div class="navbar-end"></div>

</div>

    );
}

export default Navbar;
