import React, { FC } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
};

const AdCard : FC<Props> = ({ icon, title, description, buttonText }) => (
  <div className="bg-white rounded p-10 shadow-xl grow text-center">
    <div>
      <img src={icon} alt="icon" style={{ height: "188px", width: "auto" }} />
    </div>
    <div className="text-center py-4 text-gray-700 mx-auto" style={{ maxWidth: "335px", height: "180px" }}>
      <h1 className="text-2xl font-medium mb-5">{title}</h1>
      <p>{description}</p>
    </div>
    <button className="bg-white border border-blue-600 text-blue-600 rounded px-4 p-3 font-medium">
      {buttonText}
    </button>
  </div>
);

export default AdCard;
