import React from "react";
import { Card, Text, Metric, Icon } from "@tremor/react";

const Cards = ({ color, title, text, icon }) => {
  return (
    <Card className=" w-72" decoration="top" decorationColor={color}>
      <div className="flex items-start space-x-6">
        <Icon
          icon={icon}
          color={color}
          variant="solid"
          tooltip={title}
          size="lg"
        />
        <div>
          <Text>{title}</Text>
          <Metric>{text}</Metric>
        </div>
      </div>
    </Card>
  );
};

export default Cards;
