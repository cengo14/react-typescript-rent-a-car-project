import React from "react";
import Images from "./Images";
import { carDetail, CarType } from "../../utils/types";
import { type } from "./../../utils/types";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  car: CarType;
  isOpen: boolean;
  close: () => void;
};

const Modal = ({ car, isOpen, close }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 grid place-items-center backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.1, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white relative p-6 max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
          >
            <button
              onClick={close}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" alt="close" />
            </button>
            <Images car={car} />
            {Object.entries(car).map(([key, value]) => (
              <p className="flex justify-between">
                <span className="font-semibold">
                  {key === "city_mpg"
                    ? carDetail.city_mpg
                    : key === "class"
                    ? carDetail.class
                    : key === "combination_mpg"
                    ? carDetail.combination_mpg
                    : key === "cylinders"
                    ? carDetail.cylinders
                    : key === "displacement"
                    ? carDetail.displacement
                    : key === "drive"
                    ? carDetail.drive
                    : key === "fuel_type"
                    ? carDetail.fuel_type
                    : key === "highway_mpg"
                    ? carDetail.highway_mpg
                    : key === "make"
                    ? carDetail.make
                    : key === "model"
                    ? carDetail.model
                    : key === "transmission"
                    ? carDetail.transmission
                    : carDetail.year}
                </span>
                <span className="font-bold capitalize">{value}</span>
              </p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
