// src/components/Dashboard.tsx
import React from "react";
import { LineChart, Line, PieChart, Pie, Cell } from "recharts";

const pieData = [
  { name: "Submited", value: 16.85, color: "#ff4d4d" },
  { name: "New Intents", value: 45.36, color: "#4CAF50" },
  { name: "Not Submited", value: 50.69, color: "#2196F3" },
  { name: "Cancelled", value: 50.69, color: "#FFC107" },
  { name: "S", value: 50.69, color: "#9C27B0" },
  { name: "Approved", value: 50.69, color: "#FF9800" },
];

const lineData = [
  { name: "Mon", sales: 400 },
  { name: "Tue", sales: 600 },
  { name: "Wed", sales: 550 },
  { name: "Thu", sales: 700 },
  { name: "Fri", sales: 630 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          color="orange"
          title="$30200"
          subtitle="All Earnings"
          footer="10% changes on profit"
        />
        <Card
          color="red"
          title="145"
          subtitle="Tasks"
          footer="28% task performance"
        />
        <Card
          color="green"
          title="290+"
          subtitle="Page Views"
          footer="10k daily views"
        />
        <Card
          color="blue"
          title="500"
          subtitle="Downloads"
          footer="11k download in App store"
        />
      </div>

      {/* Charts & Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales Per Day */}
        <div className="bg-blue-500 text-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Sales Per Day</h3>
          <LineChart width={300} height={100} data={lineData}>
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#fff"
              strokeWidth={2}
            />
          </LineChart>
          <div className="mt-4 text-center">
            <p className="text-xl font-bold">$4230</p>
            <p className="text-sm">Total Revenue</p>
            <p className="text-xl font-bold">321</p>
            <p className="text-sm">Today Sales</p>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Total Revenue</h3>
          <PieChart width={300} height={200}>
            <Pie data={pieData} dataKey="value" outerRadius={80} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="flex justify-around text-xs mt-4">
            {pieData.map((item, index) => (
              <div key={index} className="text-center">
                <p style={{ color: item.color }}>{item.name}</p>
                <p className="font-semibold">{item.value}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-4">Traffic Sources</h3>
          {[
            { label: "Direct", value: 80 },
            { label: "Social", value: 50 },
            { label: "Referral", value: 20 },
            { label: "Bounce", value: 60 },
            { label: "Internet", value: 40 },
          ].map((source, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>{source.label}</span>
                <span>{source.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${source.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Boxes */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-3 shadow rounded text-sm">
          REALTY <span className="text-red-600 ml-2">-0.99</span>
        </div>
        <div className="bg-white p-3 shadow rounded text-sm">
          INFRA <span className="text-green-600 ml-2">+7.66</span>
        </div>
        <div className="bg-white p-3 shadow rounded text-sm">
          {" "}
          {/* Add another box if needed */}
        </div>
      </div>
    </div>
  );
};

const Card = ({
  color,
  title,
  subtitle,
  footer,
}: {
  color: string;
  title: string;
  subtitle: string;
  footer: string;
}) => (
  <div
    className={`bg-white rounded-xl shadow-md p-4 border-t-4 border-${color}-500`}
  >
    <h2 className="text-2xl font-bold">{title}</h2>
    <p className="text-sm text-gray-500">{subtitle}</p>
    <div
      className={`mt-2 text-xs bg-${color}-500 text-white rounded p-1 text-center`}
    >
      {footer}
    </div>
  </div>
);

export default Dashboard;
