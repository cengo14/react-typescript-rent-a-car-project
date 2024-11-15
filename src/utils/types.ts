export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "rwd" | "fwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: "a" | "m";
  year: number;
};
// carDetail nesnesine özel bağımsız bir tip tanımı yapıyoruz
type CarDetailType = {
  city_mpg: string;
  class: string;
  combination_mpg: string;
  cylinders: string;
  displacement: string;
  drive: string;
  fuel_type: string;
  highway_mpg: string;
  make: string;
  model: string;
  transmission: string;
  year: string;
};

// carDetail nesnesine CarDetailType tipini atıyoruz
export const carDetail: CarDetailType = {
  city_mpg: "Şehir İçi Yakıt Tüketimi",
  class: "Sınıf",
  combination_mpg: "Ortalama tüketim",
  cylinders: "Silindir",
  displacement: "Yer Değiştirme",
  drive: "Çekiş",
  fuel_type: "Yakıt Tipi",
  highway_mpg: "Şehirler Arası Yakıt Tüketimi",
  make: "Marka",
  model: "Model",
  transmission: "Vites Türü",
  year: "Yıl",
};
