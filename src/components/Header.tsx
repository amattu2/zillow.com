import React, { FC } from "react";

type Props = {

};

const Header : FC<Props> = () => {
  return (
    <div className="flex items-center justify-center py-6 w-full bg-white text-gray-700 cursor-pointer">
      {/* Section One */}
      <div className="flex items-center justify-center gap-x-5 ml-auto">
        <div className="hover:text-blue-600">
          Buy
        </div>
        <div className="hover:text-blue-600">
          Rent
        </div>
        <div className="hover:text-blue-600">
          Sell
        </div>
        <div className="hover:text-blue-600">
          Home Loans
        </div>
        <div className="hover:text-blue-600">
          Agent Finder
        </div>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center mx-auto">
        <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="logo" height="auto" width={160} />
      </div>

      {/* Section Two */}
      <div className="flex items-center justify-center gap-x-5 mr-auto">
        <div className="hover:text-blue-600">
          Manage Rentals
        </div>
        <div className="hover:text-blue-600">
          Advertise
        </div>
        <div className="hover:text-blue-600">
          Help
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
