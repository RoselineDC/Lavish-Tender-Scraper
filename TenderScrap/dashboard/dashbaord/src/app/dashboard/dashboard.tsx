"use client";

import dynamic from "next/dynamic";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import Link from "next/link";
import FilterBar from "@/app/tenders/FilterBar"; 
import  BarClick from "../analytics/barchart";
import Footer from "./footer";

const PieChartRevenue = dynamic(() => import("@/app/analytics/PieChartRevenue"), {
  ssr: false,
});


const pieData = [
  { name: "New Intents", value: 50.69, color: "#2196F3" },
  { name: "Submitted", value: 45.36, color: "#4CAF50" },
  { name: "Submission For Tomorrow", value: 20.69, color: "#FFC107" },
  { name: "Not Submitted", value: 16.85, color: "#ff4d4d" },
];


const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        
        <Card
          link="suppliers"
          color="green"
          title="Daily Progress"
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
          color="green"
          title="ORDERS"
          subtitle="Purchase Orders REPORT"
          footer="Pending and Paid Orders"
        />
        <Card
          link="../tenders/approved/"
          color="green"
          title="Tenders"
          subtitle="All Tenders"
          footer="10% changes on profit"
        />
      </div>
      {/* New Intents Section */}
      <FilterBar/>
      {/* Charts & Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Sales Per Day */}
        <div className="lg:col-span-2">
          <BarClick />
        </div>

        {/* Pie Chart */}
        
        
            
            <PieChartRevenue />
          
        </div>
        {/* Traffic Sources */}
      

      {/* Bottom Boxes */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-3 shadow rounded text-sm">
          Transnet <span className="text-red-600 ml-2">-0.99</span>
        </div>
        <div className="bg-white p-3 shadow rounded text-sm">
          csir <span className="text-green-600 ml-2">+7.66</span>
        </div>
        <div className="bg-white p-3 shadow rounded text-sm">
          Others <span className="text-green-600 ml-2">+7.66</span>{" "}
          {/* Add another box if needed */}
        </div>
      </div>
    {/* footer */}
      <div className="mt-6">
        <Footer />
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
