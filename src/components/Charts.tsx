
"use client"
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Example = () => {
  const [data] = useState([
    {
      name: "Page A",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 90,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 80,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 30,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 10,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 90,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 40,
      pv: 4300,
      amt: 2100,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data: any, index: any) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div style={{ width: "100%" }}>
      <p>Click each rectangle</p>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
          {/* <Tooltip formatter={(value) => `${value}%`} /> */}
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(tick) => `${tick}%`} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Example;
