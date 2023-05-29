import React, { FC, useId } from "react";
import { HomeRecommendation } from "../providers/ApiProvider";

const HouseCard : FC<HomeRecommendation> = (data) => {
  const id = useId();
  const {
    formattedAddress: { city, line1, postalCode, stateOrProvince },
    bedroomCount, bathroomCount,
    price: { rawPrice }, livingAreaSquareFeet,
    primaryPhoto: { p_e: { url } },
    currencyType, homeStatus: { isNewConstruction }
  } = data;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyType.toUpperCase(),
    minimumFractionDigits: 0,
  }).format(rawPrice);

  const formattedSqft = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 0,
  }).format(livingAreaSquareFeet);


  return (
    <div key={id} className="shadow-md bg-white rounded" style={{width: "350px"}}>
      <div className="relative">
        <img
          className="w-full h-44 object-cover rounded-t object-center"
          src={url}
          alt="House"
        />
      </div>
      <div className="p-2 pb-5 text-gray-700">
        <p className="text-xl text-gray-900 leading-7">{formattedPrice}</p>
        <div className="flex align-center gap-1 leading-7">
          <p className="text-sm">{bedroomCount} bds</p>
          <p className="text-sm text-gray-300">|</p>
          <p className="text-sm">{bathroomCount} ba</p>
          <p className="text-sm text-gray-300">|</p>
          <p className="text-sm">{formattedSqft} sqft</p>
          <p className="text-sm text-gray-300">|</p>
          <p className="text-sm">
            {isNewConstruction ? "New construction" : "House for sale"}
          </p>
        </div>
        <p className="text-sm leading-7">{line1}, {city}, {stateOrProvince} {postalCode}</p>
      </div>
    </div>
  );
};

export default HouseCard;
