import { Link } from "react-router-dom";

const Header =() =>{ 
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">Bookself
      {/* Sidebar content here */}
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><a>My Bookself</a></li>
      <li><a>My Library</a></li>
      <li><a>Favorites</a></li>
      <li><Link to ='/Signin'>Signin</Link></li>


    </ul>
  </div>
</div>
    )
}

export default Header;