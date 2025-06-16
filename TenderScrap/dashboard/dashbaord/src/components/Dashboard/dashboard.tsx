'use client';

// src/components/Dashboard.tsx
import React from "react";
import { LineChart, Line, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";
import Tenders from '../../app/Pages/Tenders';  


const pieData = [
  { name: "Not Submitted", value: 16.85, color: "#ff4d4d" },
  { name: "Submitted", value: 45.36, color: "#4CAF50" },
  { name: "New Intents", value: 50.69, color: "#2196F3" },
//    { name: "Cancelled", value: 50.69, color: "#FFC107" },
//   { name: "Schedulled", value: 50.69, color: "#9C27B0" },
//   {name: "Awaiting", value: 50.69, color: "#F44336" },
//   { name: "Undetermined", value: 50.69, color: "#FF9800" },
 
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
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <Link href="//Tenders">
    <div className="bg-white rounded-xl shadow-md p-4 border-t-4 border-blue-500 hover:shadow-lg transition">
      <h2 className="text-2xl font-bold">Tenders</h2>
      <p className="text-sm text-gray-500">All Tenders</p>
      <div className="mt-2 text-xs bg-blue-500 text-white rounded p-1 text-center">
        10% changes on profit
      </div>
    </div>
  <Card color="orange" title="Tenders" subtitle="All Tenders" footer="10% changes on profit" />
  </Link>

  <Card
    link="/tasks"
    color="blue"
    title="145"
    subtitle="Tasks"
    footer="28% task performance"
  />
  <Card
    link="/tasks"
    color="red"
    title="145"
    subtitle="Tasks"
    footer="28% task performance"
  />
  <Card
    link="/analytics"
    color="green"
    title="290+"
    subtitle="Page Views"
    footer="10k daily views"
  />
  <Card
    link="/downloads"
    color="blue"
    title="500"
    subtitle="Downloads"
    footer="11k download in App store"
  />
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
