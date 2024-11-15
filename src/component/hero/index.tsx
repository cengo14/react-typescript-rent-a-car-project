import React from "react";
import Button from "../button";
import { motion } from "framer-motion";
const Hero = () => {
  const scroll = () => {
    const scroll = document.querySelector("#araba-katalogu");
    scroll.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="pt-12 padding-x flex-1 max-h-[920px]">
        <h1 className="hero__title">Özgürlüğü Hisset, Yolculuğa Başla</h1>
        <p className="hero__subtitle">
          Altın standartta hizmetle unutulmaz bir yolculuğa hazır mısınız? Araç
          kiralama deneyimini Altın Seçenekleri ile taçladırarak her anını özel
          kılabilirsiniz
        </p>

        <Button
          title="Arabaları Keşfet"
          designs="mt-10"
          type="button"
          disabled={false}
          handleClick={scroll}
        />
      </div>
      <div className="flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="/hero.png"
          alt="gray bmw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
