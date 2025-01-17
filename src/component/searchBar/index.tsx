import React, { FormEvent, useMemo, useState } from "react";
import ReactSelect from "react-select";
import { makes } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [params, setParams] = useSearchParams();
  const options = useMemo(
    () => makes.map((make) => ({ label: make, value: make })),
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams({ make, model });
  };
  const selectedMake = {
    label: params.get("make"),
    value: params.get("make"),
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      <div className="searchbar__item">
        <ReactSelect
          defaultValue={selectedMake}
          onChange={(e) => setMake(e!.value as string)}
          options={options}
          placeholder="Marka Seçiniz"
          className="w-full text-black"
        />
        <button className="ml-3 sm:hidden" aria-label="model search">
          <img src="/search.svg" className="size-10" alt="marka arama butonu" />
        </button>
      </div>
      <div className="searchbar__item">
        <label htmlFor="model" className="absolute ml-4">
          <img width={25} src="/model-icon.png" alt="model arama ikonu" />
        </label>
        <input
          title="model arama alanı"
          id="model"
          defaultValue={params.get("model") || ""}
          onChange={(e) => setModel(e!.target.value as string)}
          type="text"
          className="searchbar__input rounded text-black"
          placeholder="Model ismi giriniz.. Örn: Civic"
        />
        <button className="ml-3" aria-label="search">
          <img
            src="/search.svg"
            className="size-10"
            alt="büyüteç arama ikonu"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
