import React from "react";

const Button = ({ title }) => {
  return (
    <div className="flex items-center justify-center mt-10">
      <button className="px-8 py-4 bg-zinc-900 rounded-full flex items-center gap-3 text-md font-medium opacity-85 uppercase text-zinc-100">
        {title}
        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
      </button>
    </div>
  );
};

export default Button;
