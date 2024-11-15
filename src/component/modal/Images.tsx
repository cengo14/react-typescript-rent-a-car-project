import React from "react";
import { CarType } from "../../utils/types";
import generateImage from "../../utils/generateImage";

const Images = ({ car }: { car: CarType }) => {
  return (
    <div className="flex-1 flex-col gap-3">
      <div className="w-full h-40 bg-pattern bg-center">
        <img
          src={generateImage(car)}
          alt="car detail full picture"
          className="h-full mx-auto object-contain"
        />
      </div>
      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "29")}
            alt="car detail picture 1"
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "33")}
            alt="car detal picture 2"
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "13")}
            alt="car detail picture 3"
            className="mx-auto object-contain min-w-[146px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
