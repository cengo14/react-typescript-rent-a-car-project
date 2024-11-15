import React from "react";
import SelectFilter from "./Select";
import YearFilter from "./YearFilter";
import SearchBar from "../searchBar";

const Filter = () => {
  return (
    <div id="araba-katalogu" className="mt-12 padding-x padding-y max-width">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
        <p>Beğenebileceğin arabaları keşfet</p>
      </div>
      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <SelectFilter />
          <YearFilter />
        </div>
      </div>
    </div>
  );
};

export default Filter;
