import React, { FC } from "react";
import { ApiData } from "../../providers/ApiProvider";
import SearchContainer from "../../components/SearchContainer";
import Recommendations from "../../components/Recommendations";
import AdCard from "../../components/AdCard";

type Props = {
  data: ApiData;
};

const HomeView : FC<Props> = ({ data }) => {
  const { recsData: recs } = data;

  return (
    <>
      <SearchContainer />

      <Recommendations data={recs} />

      <div className="bg-gray-50 py-10">
        <div className="container mx-auto p-4 flex justify-start items-center gap-x-6 flex-row">
          <AdCard
            icon="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Buy_a_home.webp"
            title="Buy a home"
            description="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
            buttonText="Search homes"
          />

          <AdCard
            icon="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/07/Finance_a_home.webp"
            title="Finance a home"
            description="Zillow Home Loans can get you pre-approved so you’re ready to make an offer quickly when you find the right home."
            buttonText="Start now"
          />

          <AdCard
            icon="https://wp-tid.zillowstatic.com/bedrock/app/uploads/sites/5/2022/08/Rent_a_home.webp"
            title="Rent a home"
            description="We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
            buttonText="Find rentals"
          />
        </div>
      </div>
    </>
  );
};

export default HomeView;
