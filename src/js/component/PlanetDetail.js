import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const PlanetDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let planet = store.planet;

  useEffect(() => {
    actions.getPlanetData(params.id);
    console.log(store.planet);
  }, []);

  return (
    <div className="container-fluid bg-black">
      <div className="container pt-3 bg-dark text-light">
        {store.planet.length == 0 ? (
          <div>loading..</div>
        ) : (
          <>
            <div className="row pb-2">
              <div className="col-md-8">
                <img
                  src={`https://www.starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                  onError={(e) => {
                    e.target.src =
                      "https://www.starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  className="img-fluid"
                  alt="Responsive character image"
                />
              </div>
              <div className="col-md-4">
                <h2 className="mb-4"> {planet.properties.name} </h2>
                <p>{planet.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>TERRAIN</h4>
                <p className="text-danger">{planet.properties.terrain}</p>
              </div>
              <div className="col">
                <h4>SURFACE WATER</h4>
                <p className="text-danger">{planet.properties.surface_water}</p>
              </div>
              <div className="col">
                <h4>CLIMATE</h4>
                <p className="text-danger">{planet.properties.climate}</p>
              </div>
              <div className="col">
                <h4>POPULATION</h4>
                <p className="text-danger">{planet.properties.population}</p>
              </div>
              <div className="col">
                <h4>DIMENSIONS</h4>
                <p className="text-danger">{planet.properties.diameter}</p>
              </div>
              <div className="col">
                <h4>GRAVITY</h4>
                <p className="text-danger">{planet.properties.gravity}</p>
              </div>
              <div className="col">
                <h4>ROTATION PERIOD</h4>
                <p className="text-danger">
                  {planet.properties.rotation_period}
                </p>
              </div>
              <div className="col">
                <h4>ORBITAL PERIOD</h4>
                <p className="text-danger">
                  {planet.properties.orbital_period}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlanetDetail;
