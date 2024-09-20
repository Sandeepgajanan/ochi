import React from "react";
import Finalcard from "./Finalcard";

const Finalcards = () => {
  const data = [
    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
      title: "@2019-2022",
      w: "52%",
      imgh: "18%",
    },

    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg",
      title: "Rating 5.0 on clutch",
      w: "24%",
      imgh: "24%",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
      title: "bussiness bootcamp alumini",
      w: "24%",
      imgh: "30%",
    },
  ];
  return (
    <div className="w-full h-screen overflow-hidden py-20 max-sm:hidden">
      {" "}
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.6"
        className="max-w-screen-xl px-2 mx-auto py-14  flex gap-3 flex-nowrap max-sm:flex-col max-sm:flex-wrap"
      >
        {data.map((item, index) => (
          <Finalcard val={item} key={index} inn={index} />
        ))}
      </div>
    </div>
  );
};

export default Finalcards;
