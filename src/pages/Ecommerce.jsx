import React from "react";
import { Cards, AreaGraph, BarGraph } from "../components";

import { useStateContext } from "../contexts/ContextProvider";
import {
  RiCashFill as Revenue,
  RiUserFill as Customer,
  RiInstanceFill as Product,
  RiPriceTag3Fill as Sale,
} from "@remixicon/react";
import { econRevenueData } from "../data/dummy";

const Ecommerce = () => {
  const { currentColorName } = useStateContext();
  console.log(currentColorName);
  return (
    <>
      <div className="flex justify-around">
        <Cards
          color={currentColorName}
          title="Revenue"
          text="$534,743"
          icon={Revenue}
        />
        <Cards
          color={currentColorName}
          title="Customer"
          text="34,743"
          icon={Customer}
        />
        <Cards
          color={currentColorName}
          title="Product"
          text="4,345"
          icon={Product}
        />
        <Cards
          color={currentColorName}
          title="Sales"
          text="$5,400"
          icon={Sale}
        />
      </div>
      <div className="mt-10 flex justify-around">
        <div className="w-1/2 h-72">
          <AreaGraph
            data={econRevenueData}
            x="date"
            y="Revenue"
            color={currentColorName}
            title="Revenue"
          />
        </div>
        <div className="w-1/2 h-72">
          <BarGraph
            data={econRevenueData}
            x="date"
            y="Revenue"
            color={currentColorName}
          />
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
