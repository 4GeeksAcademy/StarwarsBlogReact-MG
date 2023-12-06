import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import StarWarsLogo from "../../img/StarWarsLogo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    setFavorites(store.favorites);
    console.log(store.favorites);
  }, [store.favorites]);

  return (
    <nav className="navbar navbar-expand-lg navbar-black bg-black">
      <div className="container-fluid">
        <Link to="/">
          <img src={StarWarsLogo} alt="StarWars Logo" width="130" height="70" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="ms-auto navbar-nav">
            <li className="ms-auto nav-item dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Favorites ({favorites.length})
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li>
                  {favorites.length === 0
                    ? "empty..."
                    : favorites.map((fav, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between align-items-center"
                        >
                          <span>{fav}</span>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => actions.removeFavorite(fav)}
                          >
                            <i
                              className="fa-regular fa-trash-can"
                              style={{ color: "#000000" }}
                            ></i>
                          </button>
                        </div>
                      ))}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
