import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const StarshipCard = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const isFavorite = store.favorites.includes(props.name);

  return (
    <div className="card bg-dark text-light">
      <img
        src={`https://www.starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`}
        onError={(e) => {
          e.target.src =
            "https://www.starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        style={{ height: "500px", width: "400px" }}
        className="card-img-top"
        alt="starship image"
      />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex">
          <Link to={`/starshipDetails/${props.uid}`}>
            <button href="#" className="btn btn-primary">
              See More
            </button>
          </Link>
          <button
            href="#"
            className="ms-auto btn btn-primary"
            onClick={() => {
              if (!isFavorite) {
                actions.addFavorite(props.name);
              }
            }}
          >
            {isFavorite ? (
              <i className="fa-solid fa-heart" style={{ color: "#000000" }}></i>
            ) : (
              <i className="far fa-heart" style={{ color: "#000000" }}></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StarshipCard;
