import React from 'react';
import { Link, Outlet } from "react-router-dom";


const MainPage = () => {
 return (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/one">Page One</Link>
      </li>
      <li>
        <Link to="/two">Page Two</Link>
      </li>
      <li>
        <Link to="/three">Page Three</Link>
      </li>
      <li>
        <Link to="/four">Page Four</Link>
      </li>
    </ul>
  </nav>
  <hr />
  <Outlet />
  </>
  )
};

export default MainPage;
