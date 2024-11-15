import React, { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

const YearFilter = () => {
  const [params, setParams] = useSearchParams();
  const [year, setYear] = useState<string>("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    params.set("year", year);
    setParams(params);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-1"
    >
      <label className="hidden" htmlFor="year">
        Yıl
      </label>
      <input
        id="year"
        type="number"
        className="w-24 py-[6px] px-2 rounded-[4px] shadow text-black"
        placeholder="Örn: 2024"
        onChange={(e) => setYear(e!.target.value)}
      />
      <button>
        <img
          className="size-9 hover:bg-black"
          src="right-arrow.svg"
          alt="yıl arama butonu"
        />
      </button>
    </form>
  );
};

export default YearFilter;
