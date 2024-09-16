import React from "react";

const Finalcard = ({ val, inn }) => {
  return (
    <div
      className={`h-[55vh] ${
        inn === 0 ? "bg-[#004D43]" : " bg-[#212121] "
      } rounded-2xl flex-shrink-0`}
      style={{ width: val.w }}
    >
      <div className="flex items-center justify-center p-2 w-full h-[48vh]  ">
        <img
          className={`object-cover`}
          style={{ height: val.imgh }}
          src={val.img}
          alt=""
        />
      </div>
      <div
        className={`px-3  border-2 border-zinc-500 w-fit rounded-full ml-7 tracking-tight
     ${inn === 0 ? "text-[#CDEA68]" : " text-zinc-100"} uppercase`}
      >
        {val.title}
      </div>
    </div>
  );
};

export default Finalcard;
