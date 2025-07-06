"use client";

import React from "react";
import Link from "next/link";

// Color class mapping to avoid dynamic Tailwind class issues
const colorMap: Record<
  string,
  { border: string; bg: string }
> = {
  blue: { border: "border-blue-500", bg: "bg-blue-500" },
  red: { border: "border-red-500", bg: "bg-red-500" },
  pink: { border: "border-pink-500", bg: "bg-pink-500" },
  green: { border: "border-green-500", bg: "bg-green-500" },
  yellow: { border: "border-yellow-500", bg: "bg-yellow-500" },
  gray: { border: "border-gray-500", bg: "bg-gray-500" },
};

type CardProps = {
  color: keyof typeof colorMap;
  title: string;
  subtitle: string;
  footer: string;
  link?: string;
};

const Card = ({ color, title, subtitle, footer, link }: CardProps) => {
  const borderClass = colorMap[color]?.border || "border-gray-500";
  const bgClass = colorMap[color]?.bg || "bg-gray-500";

  const content = (
    <div
      className={`bg-white rounded-xl shadow-md p-4 border-t-4 ${borderClass} hover:shadow-lg transition`}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{subtitle}</p>
      <div
        className={`mt-2 text-xs ${bgClass} text-white rounded p-1 text-center`}
      >
        {footer}
      </div>
    </div>
  );

  return link ? <Link href={link}>{content}</Link> : content;
};

const NewIntents = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">TENDERS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Card
          color="blue"
          title="TRANSNET"
          subtitle="Transnet Tenders Report"
          footer="Active and Closed Tenders"
          link="/tenders"
        />
        <Card
          color="red"
          title="CSIR"
          subtitle="CSIR Tenders Report"
          footer="Active and Closed Tenders"
          link="/documents"
        />
        <Card
          color="pink"
          title="DOCUMENTS"
          subtitle="Documents Report"
          footer="Pending and Paid Documents"
          link="/documents"
        />
      </div>
    </div>
  );
};

export default NewIntents;
