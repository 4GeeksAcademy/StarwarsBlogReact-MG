import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const VehicleDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let vehicle = store.vehicle;

  useEffect(() => {
    actions.getVehicleData(params.id);
    console.log(store.vehicle);
  }, []);

  return (
    <div className="container-fluid bg-black">
      <div className="container pt-3 bg-dark text-light">
        {store.vehicle.length == 0 ? (
          <div>loading..</div>
        ) : (
          <>
            <div className="row pb-2">
              <div className="col-md-8">
                <img
                  src={`https://www.starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  onError={(e) => {
                    e.target.src =
                      "https://www.starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  className="img-fluid"
                  alt="Responsive starship image"
                />
              </div>
              <div className="col-md-4">
                <h2 className="mb-4"> {vehicle.properties.name} </h2>
                <p>{vehicle.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>MODEL</h4>
                <p className="text-danger">{vehicle.properties.model}</p>
              </div>
              <div className="col">
                <h4>VEHICLE CLASS</h4>
                <p className="text-danger">
                  {vehicle.properties.vehicle_class}
                </p>
              </div>
              <div className="col">
                <h4>MANUFACTURER</h4>
                <p className="text-danger">{vehicle.properties.manufacturer}</p>
              </div>
              <div className="col">
                <h4>CAPACITY</h4>
                <p className="text-danger">{vehicle.properties.passengers}</p>
              </div>
              <div className="col">
                <h4>CREW</h4>
                <p className="text-danger">{vehicle.properties.crew}</p>
              </div>
              <div className="col">
                <h4>DIMENSIONS</h4>
                <p className="text-danger">{vehicle.properties.length}</p>
              </div>
              <div className="col">
                <h4>CARGO CAPACITY</h4>
                <p className="text-danger">
                  {vehicle.properties.cargo_capacity}
                </p>
              </div>
              <div className="col">
                <h4>COST IN CREDITS</h4>
                <p className="text-danger">
                  {vehicle.properties.cost_in_credits}
                </p>
              </div>
              <div className="col">
                <h4>CONSUMABLES</h4>
                <p className="text-danger">{vehicle.properties.consumables}</p>
              </div>
              <div className="col">
                <h4>MAX ATMOSPHERING SPEED</h4>
                <p className="text-danger">
                  {vehicle.properties.max_atmosphering_speed}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VehicleDetail;
