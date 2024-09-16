import { motion } from "framer-motion";
import React, { useState } from "react";

const Card = ({ value, inn }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // delay between each character
      },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="font-[NeueMontreal] px-2 max-w-screen-xl mx-auto py-10 w-1/2 flex-shrink-0">
        <div className="px-2 flex gap-3 items-center mb-3">
          <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
          <h2 className="font-medium text-md opacity-85 uppercase">
            {value.title}
          </h2>
        </div>

        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-full h-[90vh] rounded-2xl p-2 relative"
          style={{
            padding: isHovered ? "15px" : "", // smoother padding transition
            transition: "padding 0.4s ease", // adds smooth transition for padding
          }}
        >
          <motion.div className="w-full h-full overflow-hidden rounded-2xl">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={value.img}
              alt=""
            />
          </motion.div>

          <div className="absolute w-full h-full top-0 left-0  ">
            <motion.div
              className={`absolute top-1/2 ${
                (inn + 2) % 2 === 0 ? "left-full" : "left-0"
              } -translate-x-[50%] -translate-y-[50%] flex z-[9]`}
              variants={container}
              initial="hidden"
              animate={isHovered ? "show" : "hidden"}
              style={{
                pointerEvents: "none",
              }}
            >
              {value.title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="text-[#CDEA68] uppercase text-8xl font-[ff] tracking-tight"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="flex gap-2 mt-5">
          {value.btncontent.map((content, index) => (
            <div
              key={index}
              className="px-2 py-1 rounded-full border-[1px] border-zinc-500 tracking-tight"
            >
              <h2 className="text-md opacity-75 uppercase">{content}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
