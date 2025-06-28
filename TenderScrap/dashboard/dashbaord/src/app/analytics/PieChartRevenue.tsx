"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const pieData = [
  { name: "New Intents", value: 50.69, color: "#2196F3" },
  { name: "Submitted", value: 45.36, color: "#4CAF50" },
  { name: "Submission For Tomorrow", value: 20.69, color: "#FFC107" },
  { name: "Not Submitted", value: 16.85, color: "#ff4d4d" },
];

const PieChartRevenue: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md  border-t-4 border-green-500 hover:shadow-lg transition">
       <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 flex flex-col items-center">Total Revenue</h3>
        <PieChart width={300} height={300}>
          <Pie data={pieData} dataKey="value" outerRadius={80} label>
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      <div className="flex justify-around text-xs mt-4">
        {pieData.map((item, index) => (
          <div key={index} className="text-center flex flex-col items-center">
            <p style={{ color: item.color }}>{item.name}</p>
            <p className="font-semibold">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartRevenue;
'use client';

import { useEffect, useRef } from 'react';

// @ts-ignore – if no type definitions available
import 'https://drilldowncharts.com/lib/drilldown.min.js'; // for external CDN usage

const PieChartRevenue = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).PieChart && chartRef.current) {
      const chart = new (window as any).PieChart({
        container: chartRef.current,
        area: { height: null },
        data: {
          preloaded: {
            subvalues: [
              {
                value: 35,
                name: 'Apples',
                subvalues: [
                  { value: 25, name: 'Red apples' },
                  { value: 10, name: 'Green apples' },
                ],
              },
              {
                value: 20,
                name: 'Grapes',
                subvalues: [
                  { value: 15, name: 'Sweet grapes' },
                  { value: 5, name: 'Sour grapes' },
                ],
              },
              { value: 50, name: 'Vegetables' },
            ],
          },
        },
      });
    }
  }, []);

  return (
    <div
      ref={chartRef}
      id="chart"
      className="w-full h-[400px]"
    ></div>
  );
};

export default PieChartComponent;

