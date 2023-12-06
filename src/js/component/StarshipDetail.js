import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const StarshipDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let starship = store.starship;

  useEffect(() => {
    actions.getStarshipData(params.id);
    console.log(store.starship);
  }, []);

  return (
    <div className="container-fluid bg-black">
      <div className="container pt-3 bg-dark text-light">
        {store.starship.length == 0 ? (
          <div>loading..</div>
        ) : (
          <>
            <div className="row pb-2">
              <div className="col-md-8">
                <img
                  src={`https://www.starwars-visualguide.com/assets/img/starships/${starship.uid}.jpg`}
                  onError={(e) => {
                    e.target.src =
                      "https://www.starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  className="img-fluid"
                  alt="Responsive starship image"
                />
              </div>
              <div className="col-md-4">
                <h2 className="mb-4"> {starship.properties.name} </h2>
                <p>{starship.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>MODEL</h4>
                <p className="text-danger">{starship.properties.model}</p>
              </div>
              <div className="col">
                <h4>STARSHIP CLASS</h4>
                <p className="text-danger">
                  {starship.properties.starship_class}
                </p>
              </div>
              <div className="col">
                <h4>MANUFACTURER</h4>
                <p className="text-danger">
                  {starship.properties.manufacturer}
                </p>
              </div>
              <div className="col">
                <h4>CAPACITY</h4>
                <p className="text-danger">{starship.properties.passengers}</p>
              </div>
              <div className="col">
                <h4>CREW</h4>
                <p className="text-danger">{starship.properties.crew}</p>
              </div>
              <div className="col">
                <h4>DIMENSIONS</h4>
                <p className="text-danger">{starship.properties.length}</p>
              </div>
              <div className="col">
                <h4>CARGO CAPACITY</h4>
                <p className="text-danger">
                  {starship.properties.cargo_capacity}
                </p>
              </div>
              <div className="col">
                <h4>COST IN CREDITS</h4>
                <p className="text-danger">
                  {starship.properties.cost_in_credits}
                </p>
              </div>
              <div className="col">
                <h4>CONSUMABLES</h4>
                <p className="text-danger">{starship.properties.consumables}</p>
              </div>
              <div className="col">
                <h4>MAX ATMOSPHERING SPEED</h4>
                <p className="text-danger">
                  {starship.properties.max_atmosphering_speed}
                </p>
              </div>
              <div className="col">
                <h4>HYPERDRIVE RATING</h4>
                <p className="text-danger">
                  {starship.properties.hyperdrive_rating}
                </p>
              </div>
              <div className="col">
                <h4>MGLT</h4>
                <p className="text-danger">{starship.properties.MGLT}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StarshipDetail;
