import { CarType } from "./types";

const options = {
  headers: {
    "x-rapidapi-key": "ea669ca93bmsh43ae66e51841c73p116cedjsn4eea6e398e5a",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

type Parameters = {
  limit: number;
  make?: string;
  model?: string;
  fuel_type?: string;
  year?: string;
};

export const fetchCars = async ({
  limit,
  make = "ford",
  model = "mustang",
  fuel_type = "",
  year = "",
}: Parameters): Promise<CarType[]> => {
  try {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=${limit}&make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}`;
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Üzgünüz bir hata oluştu");
  }
};
