import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

export const Experience = () => {
  return (
    <div className="mb-20" id="experience">
      <h1 className="font-bold text-4xl md:text-5xl text-center">
        My
        <span className="text-purple-300"> work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex text-white border-neutral-200 dark:border-slate-800 "
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-purple-400">
                  {card.title}
                </h1>
                <h2 className="text-start text-xl md:text-xl font-bold">
                  {card.Company}
                </h2>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc}
                </p>
                <p className="text-start text-white mt-3 font-semibold">
                  {card.desc2}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
