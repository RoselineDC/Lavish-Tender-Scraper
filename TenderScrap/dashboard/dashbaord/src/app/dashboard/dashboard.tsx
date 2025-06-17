"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Link from "next/link";
import NewIntents from "@/app/tenders/NewIntents";
import MonthlyRecapChart from "@/app/analytics/piechart";
// Update the path below to the correct relative path based on your project structure.
// For example, if NewIntents.tsx is in src/components/tenders/NewIntents.tsx:
// import NewIntents from "../tenders/NewIntents";
/*
    If you are getting "Cannot find module '../tenders/NewIntents'" error,
    make sure the import path is correct. Based on your file structure, try:
*/
// import NewIntents from "../../app/tenders/NewIntents";

const pieData = [
  
  { name: "Submission For Tomorrow", value: 20.69, color: "#FFC107" },
  { name: "Submitted", value: 45.36, color: "#4CAF50" },
  { name: "New Intents", value: 50.69, color: "#2196F3" },
  { name: "Not Submitted", value: 16.85, color: "#ff4d4d" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
          link="/tenders"
          color="orange"
          title="Tenders"
          subtitle="All Tenders"
          footer="10% changes on profit"
        />
        <Card
          link="suppliers"
          color="blue"
          title="Daily Task progress"
          subtitle="Tasks"
          footer="28% task performance"
        />
        {/* <Card
        link="/pages/Suppliers"
        color="red"
        title="145"
        subtitle="Tasks"
        footer="28% task performance"
      /> */}
        <Card
          link="analytics"
          color="green"
          title="ANALYTICS"
          subtitle="Page Views"
          footer="10k daily views"
        />
        <Card
          link="documents"
          color="blue"
          title="ESSENTIAL "
          subtitle="Downloads"
          footer="11k download in App store"
        />
      </div>
      {/* New Intents Section */}
      <NewIntents />
      {/* Charts & Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales Per Day */}
        
        <MonthlyRecapChart />
       

        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h3 className="text-lg font-bold mb-5 p-4">Total Revenue</h3>
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
  link,
}: {
  color: string;
  title: string;
  subtitle: string;
  footer: string;
  link?: string;
}) => {
  const content = (
    <div
      className={`bg-white rounded-xl shadow-md p-4 border-t-4 border-${color}-500 hover:shadow-lg transition`}
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

  return link ? <Link href={link}>{content}</Link> : content;
};

export default Dashboard;
