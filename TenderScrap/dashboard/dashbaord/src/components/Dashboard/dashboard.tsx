'use client';

import React from "react";
import { LineChart, Line, PieChart, Pie, Cell } from "recharts";
import Link from "next/link";

const pieData = [
  { name: "Not Submitted", value: 16.85, color: "#ff4d4d" },
  { name: "Submitted", value: 45.36, color: "#4CAF50" },
  { name: "New Intents", value: 50.69, color: "#2196F3" },
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
      <Card
        link="/Pages/Tenders"
        color="orange"
        title="Tenders"
        subtitle="All Tenders"
        footer="10% changes on profit"
      />
      <Card
        link="/Pages/Suppliers"
        color="blue"
        title="145"
        subtitle="Tasks"
        footer="28% task performance"
      />
      <Card
        link="/Pages/Suppliers"
        color="red"
        title="145"
        subtitle="Tasks"
        footer="28% task performance"
      />
      <Card
        link="/Pages/Analytics"
        color="green"
        title="290+"
        subtitle="Page Views"
        footer="10k daily views"
      />
      <Card
        link="/Pages/Documents"
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
      className={`bg-white rounded-xl shadow-md p-4 border-t-4 border-${color}-500 ho
