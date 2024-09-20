import React from "react";
import Eye from "./Eye";
import Button from "./Button";

const Startproject = () => {
  return (
    <div className="w-full min-h-screen bg-[#CDEA68] relative  py-10 max-sm:min-h-[60vh]">
      <div className="relative w-full flex items-center justify-center">
        <h1 className="flex  text-[18vw] leading-[14vw]  tracking-normal  uppercase font-[ff]  text-center opacity-85 max-sm:text-[22vw] max-sm:leading-[19vw] ">
          Ready <br />
          to start
          <br />
          the project?
        </h1>
      </div>
      <div className="flex gap-4 absolute top-[10%] left-1/2 -translate-x-[50%]  max-sm:hidden">
        <Eye />
        <Eye />
      </div>
      <Button title={"start the project"} />
    </div>
  );
};

export default Startproject;
