import React, { useEffect, useState } from "react";
import { fetchCars } from "../../utils/fetchCars";
import { CarType } from "../../utils/types";
import Warning from "./Warning";
import Card from "./Card";
import Button from "../button";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [cars, setCars] = useState<CarType[] | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const [params] = useSearchParams();
  const paramsObject = Object.fromEntries(params.entries());

  useEffect(() => {
    setLimit(5);
  }, [params.get("make"), params.get("model")]);

  useEffect(() => {
    fetchCars({ limit, ...paramsObject })
      .then((data) => setCars(data))
      .catch(() => setIsError(true));
  }, [limit, params]);
  console.log(paramsObject);
  return (
    <div className="padding-x max-width">
      {!cars ? (
        <Warning>Yükleniyor</Warning>
      ) : isError ? (
        <Warning>İstenmeyen bir hata oluştu</Warning>
      ) : cars.length < 1 ? (
        <Warning>Aranılan kriterlere uygun sonuç bulunamadı</Warning>
      ) : (
        cars.length >= 1 && (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card key={i} car={car} />
              ))}
            </div>

            <div className="w-full flex-center py-10">
              {limit < 30 && (
                <Button
                  ariaLabel="daha fazla gör"
                  title="Daha Fazla Gör"
                  handleClick={() => setLimit(limit + 5)}
                />
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default List;
