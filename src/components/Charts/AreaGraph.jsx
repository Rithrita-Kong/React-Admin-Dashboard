import { AreaChart, Text, Title } from "@tremor/react";

export default function AreaGraph({ data, x, y, color, title }) {
  const customTooltip = (props) => {
    const { payload, active } = props;
    if (!active || !payload) return null;
    return (
      <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
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
      <AreaChart
        className="mt-4"
        data={data}
        index={x}
        categories={[y]}
        colors={[color]}
        yAxisWidth={30}
        customTooltip={customTooltip}
      />
    </>
  );
}
