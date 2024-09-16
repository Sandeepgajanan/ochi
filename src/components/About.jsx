import { motion } from "framer-motion";
import React, { useState } from "react";
import Border from "./Border";
import Button from "./Button";

const About = () => {
  const [val, setVal] = useState(false);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.05"
      className="w-full bg-[#CDEA68] rounded-tl-2xl rounded-tr-2xl -mt-5"
    >
      <div className="max-w-screen-xl mx-auto px-2 p-20 font-[NeueMontreal]">
        <h1 className="text-[4.2vw] leading-[4.5vw] opacity-85">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to
          <span className="underline pl-5">
            raise funds, sell products, explain complex ideas, and hire great
            people.
          </span>
        </h1>
      </div>
      <Border />
      <div className="max-w-screen-xl mx-auto px-2  py-5 pb-20 font-[NeueMontreal] flex ">
        <div className="mr-[36vw]  ">
          <h3 className="text-lg opacity-85">What you can expect:</h3>
        </div>
        <div className="w-1/4 mr-36">
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
        <div className="mt-20">
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
      <div className="max-w-screen-xl mx-auto px-2 py-5 font-[NeueMontreal] flex justify-between ">
        <div>
          <h1 className="text-5xl font-medium opacity-85 mb-6 ">
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
          className="h-[80vh] w-1/2 rounded-md overflow-hidden"
          style={{
            padding: val ? "15px" : "0px",
            transition: "padding 0.4s ease",
          }}
        >
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            className="w-full h-full rounded-md object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
