import React, { useState } from "react";
import { CarType } from "../../utils/types";
import Info from "./Info";
import Button from "../button";
import { motion } from "framer-motion";
import Modal from "../modal";
import generateImage from "../../utils/generateImage";

type Props = {
  car: CarType;
};

const Card = ({ car }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="car-card group"
    >
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      <div className="flex mt-6 text-xl">
        <span className="font-semibold">₺</span>
        <span className="text-3xl">
          {Math.round(Math.random() * 7000) + 1500}
        </span>
        <span className="font-semibold self-end">/gün</span>
      </div>
      <div className="w-full">
        <img
          src={generateImage(car)}
          className="w-full h-full object-contain"
          alt={car.make + " " + car.model}
        />
      </div>
      <div className="w-full ">
        <div className="group-hover:hidden">
          <Info car={car} />
        </div>
        <div className="mt-1 hidden group-hover:flex transition">
          <Button
            handleClick={() => {
              setIsOpen(true);
              document.body.style.overflow = "hidden";
            }}
            type="button"
            designs="w-full py-[25px] text-white"
            title="Daha Fazla"
            icon="right-arrow.svg"
            ariaLabel="Daha fazla butonu"
          />
        </div>
      </div>
      <Modal isOpen={isOpen} close={handleClose} car={car} />
    </motion.div>
  );
};

export default Card;
