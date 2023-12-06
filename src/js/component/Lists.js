import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import CharacterCard from "./CharacterCard";
import PlanetCard from "./PlanetCard";
import StarshipCard from "./StarshipCard";
import VehicleCard from "./VehicleCard";

const cardContainerStyle = {
  display: "flex",
  overflowX: "auto",
  whiteSpace: "nowrap",
};

const cardGroupStyle = {
  flex: "0 0 auto",
  marginRight: "5px", // Adjust the margin as needed for spacing between cards
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="bg-black text-light">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            className="page-link bg-dark text-light"
            href="#"
            aria-label="Previous"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button className="page-link bg-dark text-light" onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a
            className="page-link bg-dark text-light"
            href="#"
            aria-label="Next"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Lists = () => {
  const { store, actions } = useContext(Context);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  /* ------------------------------ Pagination ------------------------------------ */
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedCharacterList = store.characterList?.slice(
    startIndex,
    endIndex
  );
  const paginatedPlanetList = store.planetList?.slice(startIndex, endIndex);
  const paginatedStarshipList = store.starshipList?.slice(startIndex, endIndex);
  const paginatedVehicleList = store.vehicleList?.slice(startIndex, endIndex);

  const totalPages =
    Math.ceil((store.characterList?.length || 0) / itemsPerPage) ||
    Math.ceil((store.planetList?.length || 0) / itemsPerPage) ||
    Math.ceil((store.starshipList?.length || 0) / itemsPerPage) ||
    Math.ceil((store.vehicleList?.length || 0) / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  /* ------------------------------------------------------------------------------ */

  return (
    <div className="container-fluid bg-black text-light">
      <div
        className="container bg-black text-light"
        id="characters"
        style={cardContainerStyle}
      >
        {paginatedCharacterList?.map((character, index) => (
          <div key={index} style={cardGroupStyle}>
            <CharacterCard
              name={character.name}
              uid={character.uid}
              path="CharacterDetail"
            />
          </div>
        ))}
      </div>

      <div
        className="container bg-black text-light mt-3"
        id="planets"
        style={cardContainerStyle}
      >
        {paginatedPlanetList?.map((planet, index) => (
          <div key={index} style={cardGroupStyle}>
            <PlanetCard
              name={planet.name}
              uid={planet.uid}
              path="PlanetDetail"
            />
          </div>
        ))}
      </div>

      <div
        className="container bg-black text-light mt-3"
        id="starships"
        style={cardContainerStyle}
      >
        {paginatedStarshipList?.map((starship, index) => (
          <div key={index} style={cardGroupStyle}>
            <StarshipCard
              name={starship.name}
              uid={starship.uid}
              path="StarshipDetail"
            />
          </div>
        ))}
      </div>

      <div
        className="container bg-black text-light mt-3"
        id="vehicles"
        style={cardContainerStyle}
      >
        {paginatedVehicleList?.map((vehicle, index) => (
          <div key={index} style={cardGroupStyle}>
            <VehicleCard
              name={vehicle.name}
              uid={vehicle.uid}
              path="VehicleDetail"
            />
          </div>
        ))}
      </div>

      <div className="pt-2 d-flex bg-black text-light justify-content-center">
        <Pagination
          className="bg-black text-light"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Lists;
