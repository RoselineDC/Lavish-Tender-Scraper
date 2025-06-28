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

