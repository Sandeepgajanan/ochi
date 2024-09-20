import React from "react";
import Card from "./Card";
import Border from "./Border";
import Button from "./Button";
const Cards = () => {
  const data = [
    {
      title: "Cardboard Spaceship",
      img: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
      btncontent: ["Branded Template", "sales deck", "social media templates"],
    },
    {
      title: "AH2 & Matt Horn",
      img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
      btncontent: ["audit", "copywriting", "sales deck", "slides design"],
    },
    {
      title: "Fyde",
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
      btncontent: ["agency", "company presentaion"],
    },
    {
      title: "Vise",
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
      btncontent: ["Pitch desk"],
    },
  ];
  return (
    <div className="w-full py-20 max-sm:py-10">
      <div className="px-2 max-w-screen-xl mx-auto  font-[NeueMontreal] mt-16 mb-14 max-sm:mt-2 max-sm:mb-2 ">
        <h1 className="capitalize font-medium opacity-85 text-5xl max-sm:text-4xl">
          Featured projects:
        </h1>
      </div>{" "}
      <Border />
      <div className="flex flex-wrap px-2 max-sm:flex-col">
        {data.map((item, index) => (
          <Card value={item} key={index} inn={index} />
        ))}
      </div>
      <Button title={"view all case studies"} />
    </div>
  );
};

export default Cards;
