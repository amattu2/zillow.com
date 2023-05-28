import React, { useEffect, useState, FC } from "react";

type ApiProviderState = {
  status: ApiProviderStatus;
  data: ApiData|null;
};

export enum ApiProviderStatus {
  LOADING = "LOADING",
  LOADED = "LOADED",
  ERROR = "ERROR",
}

export type ApiData = {
  ompData: object;
  recsData: HomeRecommendation[];
};

type HomeRecommendation = {
  bathroomCount: number;
  bedroomCount: number;
  countryCode: string;
  currencyCode: string;
  formattedAddress: FormattedAddress;
  price: Price;
  zpid: number;
};

type FormattedAddress = {
  city: string;
  line1: string;
  line2: string;
  postalCode: string;
  stateOrProvince: string;
};

type Price = {
  rawPrice: number;
};

const defaultState: ApiProviderState = { status: ApiProviderStatus.LOADING, data: null };

const Context = React.createContext<ApiProviderState>(defaultState);

export const useApi = (): ApiProviderState => {
  const contextState = React.useContext(Context);

  if (contextState === null) {
    throw new Error("useApi must be used within a ApiProvider");
  }

  return contextState;
};

export const ApiProvider: FC<any> = (props: any) => {
  const [state, setState] = useState<ApiProviderState>(defaultState);

  useEffect(() => {
    (async () => {
      const data = await fetch("/data.json");
      const parsedData = await data.json();

      setState({
        status: ApiProviderStatus.LOADED,
        data: parsedData,
      });
    })();
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
