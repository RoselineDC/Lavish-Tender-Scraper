"use client";

import React from "react";
import Link from "next/link";

// Tailwind-compatible color map
const colorMap: Record<string, { border: string; bg: string }> = {
  blue: { border: "border-blue-500", bg: "bg-blue-500" },
  yellow: { border: "border-red-500", bg: "bg-yellow-600" },
  green: { border: "border-green-500", bg: "bg-g-500" },
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
      <div className="grid grid-cols-3 gap-4">
        <Card
          color="yellow"
          title="TRANSNET"
          subtitle="Transnet Tenders Report"
          footer="Active and Closed Tenders"
          link="/tenders"
        />
        <Card
          color="blue"
          title="CSIR"
          subtitle="CSIR Tenders Report"
          footer="Active and Closed Tenders"
          link="/documents"
        />
        <Card
          color="green"
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
