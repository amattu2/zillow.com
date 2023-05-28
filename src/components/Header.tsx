import React, { FC } from "react";

type Props = {

};

const Header : FC<Props> = () => {
  return (
    <div className="flex items-center justify-center py-7 w-full bg-white">
      {/* Section One */}
      <div className="grid grid-cols-5 gap-3 ml-auto">
        <div>
          Buy
        </div>
        <div>
          Rent
        </div>
        <div>
          Sell
        </div>
        <div>
          Home Loans
        </div>
        <div>
          Agent Finder
        </div>
      </div>

      {/* Icon */}
      <div className="flex items-center justify-center mx-auto">
        <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="logo" height={25} width={120} />
      </div>

      {/* Section Two */}
      <div className="grid grid-cols-5 gap-3 mr-auto">
        <div>
          Manage Rentals
        </div>
        <div>
          Advertise
        </div>
        <div>
          Help
        </div>
      </div>
    </div>
  );
};

export default Header;
