import React, { FC } from "react";
import { ApiProviderStatus, useApi } from "../../providers/ApiProvider";
import HomeView from "./HomeView";

type Props = {

};

const HomeController : FC<Props> = () => {
  const { status, data } = useApi();

  if (status === ApiProviderStatus.LOADING) {
    return <div>Loading...</div>;
  }

  if (status === ApiProviderStatus.ERROR || !data) {
    return <div>Something went wrong</div>;
  }

  return <HomeView data={data} />;
};

export default HomeController;
