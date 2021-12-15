import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="link-style" to="/">
              Principal
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/favoriteAlbums">
              Albumes Favoritos
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/social">
              Redes Sociales
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}