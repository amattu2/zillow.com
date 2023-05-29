import React, { FC } from "react";
import { HomeRecommendation } from "../providers/ApiProvider";
import HouseCard from "./HouseCard";

type Props = {
  data: HomeRecommendation[];
};

const Recommendations : FC<Props> = ({ data }) => {

  return (
    <div className="bg-white">
      <div className="container mx-auto p-4 overflow-x-hidden">
        <div className="flex mt-10">
          <div className="mb-3">
            <p className="text-xl font-medium tracking-wide">Homes For You</p>
            <p className="text-sm font-light text-slate-600">Based on your view history</p>
          </div>
          <div className="flex ml-auto">
            <div className="flex items-center justify-center w-9 h-9 rounded-full mr-3 border-solid border-gray-400 border">
              <svg
                className="w-4 h-4 text-black fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 4.5l-5 3.5 5 3.5v-7z" />
              </svg>
            </div>
            <div className="flex items-center justify-center w-9 h-9 rounded-full border-solid border-gray-400 border">
              <svg
                className="w-4 h-4 text-black fill-current"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5 4.5l5 3.5-5 3.5v-7z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-x-3 overflow-x-hidden flex-row py-5">
          {data.slice(0, 4).map((home) => (
            <HouseCard {...home} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-x-3 overflow-x-hidden flex-row py-5">
          <p className="text-blue-800 cursor-pointer">
            More recommended homes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
