import { motion } from "framer-motion";
import React, { useState } from "react";
import Border from "./Border";
import Button from "./Button";
import founders from "../assets/founders.jpg";

const About = () => {
  const [val, setVal] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.05"
      className="w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl -mt-5 "
    >
      <div className="max-w-screen-xl mx-auto px-2 p-20 font-[NeueMontreal] max-sm:p-0 max-sm:px-2 max-sm:py-7">
        <h1 className="text-[4.2vw] leading-[4.5vw] opacity-85 max-sm:text-[6vw] max-sm:leading-[6.2vw]">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to
          <span className="underline pl-5">
            raise funds, sell products, explain complex ideas, and hire great
            people.
          </span>
        </h1>
      </div>
      <Border />
      <div className="max-w-screen-xl mx-auto px-2  py-5 pb-20 font-[NeueMontreal] flex max-sm:flex-col ">
        <div className="mr-[36vw]  ">
          <h3 className="text-lg opacity-85 max-sm:pb-10">
            What you can expect:
          </h3>
        </div>
        <div className="w-1/4 mr-36 max-sm:w-full">
          <p className="text-lg opacity-85">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <br />
          <br />

          <p className="text-lg opacity-85">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="mt-20 max-sm:mt-8 max-sm:w-1/2">
          {["S:", "Instagram", "Behance", "Facebook", "LinkedIn"].map(
            (item, index) => (
              <h3
                key={index}
                className={`text-lg opacity-85 ${
                  index === 0 ? "" : "border-b-[1px] border-b-zinc-900 "
                } mt-1`}
              >
                {item}
              </h3>
            )
          )}
        </div>
      </div>
      <Border />
      <div className="max-w-screen-xl mx-auto px-2 py-5 font-[NeueMontreal] flex justify-between max-sm:flex-col-reverse max-sm:pb-10">
        <div>
          <h1 className="text-5xl font-medium opacity-85 mb-6  max-sm:pt-5 max-sm:text-4xl">
            Our approach:
          </h1>

          <motion.div
            onHoverStart={() => setVal(true)}
            onHoverEnd={() => setVal(false)}
          >
            {" "}
            <Button title={"read more"} />
          </motion.div>
        </div>
        <div
          className="h-[80vh] w-1/2 rounded-md overflow-hidden max-sm:h-[40vh] max-sm:w-full"
          style={{
            padding: val ? "15px" : "0px",
            transition: "padding 0.4s ease",
          }}
        >
          <img
            src={founders}
            className="w-full h-full rounded-md object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
