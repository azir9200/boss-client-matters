import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }


  const navOptions = <>
    <li><NavLink to='/'>Home</NavLink> </li>
    <li><NavLink to='/order'>Order Food</NavLink> </li>
    <li><NavLink to='/menu'>Our Menu</NavLink> </li>

    {
      user ? <>
        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      </> : <>
        <li><Link to="/login">Login</Link></li>
      </>
    }

  </>

  return (
    <div className="navbar fixed z-10 p-4 max-w-screen-xl bg-opacity-30  bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-2xl rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">Bistro Bite</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-2xl px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' > <a className="btn">Login</a> </Link>
      </div>
    </div>
  );
};

export default Navbar;