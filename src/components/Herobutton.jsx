import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const hoverEffect = {
  rest: { color: "black", opacity: 0 },
  hover: { color: "white", opacity: 1 },
};
const textHoverEffect = {
  rest: { color: "black" },
  hover: { color: "white" },
};

const transitionEffect = { duration: 0.4 };

const Herobutton = () => {
  return (
    <>
      <motion.div
        className="relative flex items-center gap-3 cursor-pointer max-sm:mt-4 "
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <motion.div
          className="px-2 py-1 w-44 text-center  h-8 rounded-full border-[1px] border-zinc-600 uppercase text-md font-medium tracking-tight opacity-85 relative z-10  "
          variants={textHoverEffect}
          transition={transitionEffect}
        >
          Start the project
        </motion.div>

        <motion.div
          className="rounded-full border-[1px] border-zinc-600 bg-black absolute top-0 w-44 h-8 z-0"
          variants={hoverEffect}
          transition={transitionEffect}
        ></motion.div>

        <motion.div
          className="w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-600 relative z-10"
          variants={textHoverEffect}
          transition={transitionEffect}
        >
          <span className="rotate-45">
            <FaArrowUpLong />
          </span>
        </motion.div>

        <motion.div
          className="rounded-full border-[1px] border-zinc-600 bg-black absolute right-0 w-8 h-8 z-0"
          variants={hoverEffect}
          transition={transitionEffect}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Herobutton;
