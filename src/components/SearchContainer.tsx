import React, { FC } from "react";

type Props = {};

const SearchContainer: FC<Props> = () => {
  return (
    <div className="search-banner pt-12 text-center h-96">
      <div className="text-4xl font-medium text-white my-5">
        Find it. Tour it. Own it.
      </div>

      <div>
        <input
          className="p-4 py-5 w-2/6 rounded shadow-xl focus:outline-none focus:ring-4 placeholder-gray-500 font-medium"
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
        />
      </div>
    </div>
  );
};

export default SearchContainer;
