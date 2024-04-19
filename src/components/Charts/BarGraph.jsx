import React from "react";
import { BarChart, Title } from "@tremor/react";

const BarGraph = ({ data, x, y, color, title }) => {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    payload.map((c, i) => console.log(c, i));
    return (
      <div className="rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
        {payload.map((category, idx) => (
          <div key={idx} className="flex flex-1 space-x-2.5">
            <div
              className={`flex w-1 flex-col bg-${category.color}-500 rounded`}
            />
            <div className="space-y-1">
              <p className="text-tremor-content">{category.payload.date}</p>
              <p className="font-medium text-tremor-content-emphasis">
                $ {category.value} k
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <>
      <Title>{title}</Title>
      <BarChart
        className="mt-6"
        data={data}
        index={x}
        categories={[y]}
        colors={[color]}
        yAxisWidth={48}
        customTooltip={customTooltip}
      />
    </>
  );
};

export default BarGraph;
