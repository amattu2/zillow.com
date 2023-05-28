import React, { FC } from "react";

type Props = {

};

const SearchContainer : FC<Props> = () => {
  return (
    <div>
      Find it. Tour it. Own it.

      <div>
        <input type="text" placeholder="Enter an address, neighborhood, city, or ZIP code" />
      </div>
    </div>
  );
};

export default SearchContainer;
