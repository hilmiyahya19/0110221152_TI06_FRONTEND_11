/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */

import {Link} from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to = "/">Home</Link>
              </li>
            <li>
            <Link to = "/movie/create/">Movie</Link>
              </li>
            <li >
            <Link  to = "/movie/popular">popular</Link>
              </li>
            <li>
            <Link  to = "/movie/now">  Now Playing</Link> 
              </li>
            <li >
            <Link  to ="/movie/top"> Top Rated</Link> 
              </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
