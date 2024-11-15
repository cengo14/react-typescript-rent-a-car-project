import React from "react";
import { CarType } from "../../utils/types";
import { motion } from "framer-motion";

const Field = ({ img, text }: { img: string; text: string }) => {
  return (
    <motion.div
      initial={{ translateY: 50, opacity: 0.3 }}
      whileInView={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-center flex-col"
    >
      <img src={img} alt={text} width={25} />
      <p>{text}</p>
    </motion.div>
  );
};

const Info = ({ car }: { car: CarType }) => {
  const transmission = car.transmission === "a" ? "Otomatik" : "Manuel";
  const drive =
    car.drive === "fwd"
      ? "Önden Çekiş"
      : car.drive === "rwd"
      ? "Arkadan İtiş"
      : car.drive === "4wd"
      ? "Sürekli 4 Çeker"
      : "4 Çeker";
  const fuel_type =
    car.fuel_type === "gas"
      ? "Benzinli"
      : car.fuel_type === "diesel"
      ? "Dizel"
      : "Elektrikli";
  return (
    <div className="flex w-full justify-between items-center">
      <Field img="/steering-wheel.svg" text={transmission} />
      <Field img="/tire.svg" text={drive} />
      <Field img="/gas.svg" text={fuel_type} />
    </div>
  );
};

export default Info;
