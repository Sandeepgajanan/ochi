import React from "react";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 flex justify-between py-[5vw] font-[ff]">
      <div className=" h-full flex w-full justify-between ">
        <h1 className=" tracking-tight leading-[7.5vw] text-[10vw] opacity-85">
          EYE-
          <br /> OPENING
        </h1>

        <div className="w-[50%]">
          <h1 className=" tracking-tight leading-[7.5vw] text-[10vw] opacity-85">
            PRESENTATIONS
          </h1>
          <div className="flex items-start flex-col">
            <div className="mt-20">
              {["S:", "Instagram", "Behance", "Facebook", "LinkedIn"].map(
                (item, index) => (
                  <h3
                    key={index}
                    className={`text-xl [NeueMontreal_Regular]  opacity-85 ${
                      index === 0 ? "" : "border-b-[1px] border-b-zinc-900 "
                    } mt-1 `}
                  >
                    {item}
                  </h3>
                )
              )}
            </div>
            <div className="flex  w-full justify-between">
              <div className="mt-20">
                {[
                  "L:",
                  "202-1965 W 4th Ave",
                  "Vancouver,Canada",
                  "30 Chukarina St",
                  " Lviv, Ukraine",
                ].map((item, index) => (
                  <h3
                    key={index}
                    className={`text-xl font-[NeueMontreal_Regular] opacity-85 ${
                      (index === 0 ? "" : "border-b-[1px] border-b-zinc-900 ",
                      index === 3 && "mt-10")
                    } mt-1 `}
                  >
                    {item}
                  </h3>
                ))}
              </div>{" "}
              <div className="mt-20">
                {[
                  "M:",
                  "Home",
                  "Services",
                  "Our work",
                  "About us",
                  "Insights",
                  "Contact us",
                ].map((item, index) => (
                  <h3
                    key={index}
                    className={`text-xl font-[NeueMontreal_Regular] opacity-85 ${
                      index === 0 ? "" : "border-b-[1px] border-b-zinc-900 "
                    } mt-1 `}
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
            <div className="mt-20 ">
              <h1 className="text-xl font-[NeueMontreal_Regular] opacity-85 inline-block">
                E:
              </h1>
              <h3 className="text-xl opacity-85">
                Redesigned-by@sandeepgajanan
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
