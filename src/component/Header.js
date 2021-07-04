import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 
const Header = () => {
   return (
       <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/BookTable">BookTable</Link>
            </li>
            <li>
              <Link to="/AddBook">AddBook</Link>
            </li>
          </ul><hr />
          <h1>Book List</h1>
        </nav>
       </>
   );
};
 
export default Header;