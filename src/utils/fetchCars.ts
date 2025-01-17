import { CarType } from "./types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
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
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${make}&year=${year}&fuel_type=${fuel_type}`;
  try {
    const res = await fetch(url, options);

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Üzgünüz bir hata oluştu");
  }
};
