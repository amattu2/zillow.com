import React, { FC } from "react";
import { ApiData } from "../../providers/ApiProvider";
import SearchContainer from "../../components/SearchContainer";
import Recommendations from "../../components/Recommendations";
import Card from "../../components/Card";

type Props = {
  data: ApiData;
};

const HomeView : FC<Props> = ({ data }) => {
  const { recsData: recs } = data;

  return (
    <>
      <SearchContainer />

      <Recommendations data={recs} />

      <div>
        <Card
          icon="🏠"
          title="Buy a home"
          description="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
          buttonText="Search homes"
        />

        <Card
          icon="💰"
          title="Sell a home"
          description="No matter what pathyou take to sell your home, we can help navigate a successful sale."
          buttonText="See your options"
        />

        <Card
          icon="🏢"
          title="Rent a home"
          description="We're creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent."
          buttonText="Find rentals"
        />
      </div>
    </>
  );
};

export default HomeView;
