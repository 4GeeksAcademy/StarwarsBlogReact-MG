import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let character = store.character;
  let homeworld = store.planet;

  useEffect(() => {
    actions.getCharacterData(params.id);
    console.log(store.character);
  }, []);

  return (
    <div className="container-fluid bg-black">
      <div className="container pt-3 bg-dark text-light">
        {character.length == 0 ? (
          <div>loading..</div>
        ) : (
          <>
            <div className="row pb-2">
              <div className="col-md-8">
                <img
                  src={`https://www.starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                  onError={(e) => {
                    e.target.src =
                      "https://www.starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}
                  className="img-fluid"
                  alt="Responsive character image"
                />
              </div>
              <div className="col-md-4">
                <h2 className="mb-4">{character.properties.name}</h2>
                <p>{character.description}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h4>GENDER</h4>
                <p className="text-danger">{character.properties.gender}</p>
              </div>
              <div className="col">
                <h4>HEIGHT</h4>
                <p className="text-danger">{character.properties.height}</p>
              </div>
              <div className="col">
                <h4>MASS</h4>
                <p className="text-danger">{character.properties.mass}</p>
              </div>
              <div className="col">
                <h4>HAIR COLOR</h4>
                <p className="text-danger">{character.properties.hair_color}</p>
              </div>
              <div className="col">
                <h4>SKIN COLOR</h4>
                <p className="text-danger">{character.properties.skin_color}</p>
              </div>
              <div className="col">
                <h4>EYE COLOR</h4>
                <p className="text-danger">{character.properties.eye_color}</p>
              </div>
              <div className="col">
                <h4>BIRTH YEAR</h4>
                <p className="text-danger">{character.properties.birth_year}</p>
              </div>
              <div className="col">
                <h4>HOMEWORLD</h4>
                {homeworld.length == 0 ? (
                  <p className="text-danger">loading..</p>
                ) : (
                  <p className="text-danger">{homeworld.properties.name}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
