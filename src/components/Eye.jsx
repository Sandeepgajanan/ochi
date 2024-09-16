import React, { useEffect, useState } from "react";
const Eye = ({ title = "" }) => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
      <div className=" relative w-[60%] h-[60%] rounded-full bg-zinc-900 -mt-6">
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
          }}
          className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
        >
          <div className="w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100"></div>
        </div>{" "}
        <div>
          <h3 className="text-zinc-100 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-medium">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Eye;
