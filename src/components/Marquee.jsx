import { motion } from "framer-motion";
import React from "react";
import Border from "./Border";

const Marquee = () => {
  const data = ["we are ochi", "We are ochi"];
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".05"
      className="w-full pt-20 pb-8 bg-[#004D43] mt-10 rounded-tl-2xl rounded-tr-2xl max-sm:pt-10 max-sm:pb-10 max-sm:mt-24 "
    >
      <Border />
      <div className=" flex whitespace-nowrap overflow-hidden">
        {data.map((item, index) => (
          <motion.h1
            className="font-[ff] text-[36vw] tracking-[-.05vw] leading-none font-medium pr-20 text-white uppercase  -mt-[8vw]  -mb-[4vw]"
            key={index}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {item}
          </motion.h1>
        ))}{" "}
      </div>{" "}
      <Border />
    </div>
  );
};

export default Marquee;
