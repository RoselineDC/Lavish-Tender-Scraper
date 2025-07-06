"use client";

import React, { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type Tender = {
  id: number;
  institution: string;
  number: string;
  description: string;
  closingDate: string;
  location: string;
  documentUrl: string;
  category: string;
};

const TenderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tenders: Tender[] = [
    {
      id: 1,
      institution: "Department of Health",
      number: "DOH/2023/001",
      description: "Supply and delivery of medical equipment.",
      closingDate: "2025-07-15",
      location: "Pretoria, Gauteng",
      documentUrl: "https://example.com/tender1",
      category: "Medical",
    },
    {
      id: 2,
      institution: "Department of Education",
      number: "DOE/2023/002",
      description: "Construction of new classrooms.",
      closingDate: "2025-07-20",
      location: "Durban, KZN",
      documentUrl: "https://example.com/tender2",
      category: "Construction",
    },
    {
      id: 3,
      institution: "Department of Public Works",
      number: "DPW/2023/003",
      description: "Renovation of government buildings.",
      closingDate: "2025-07-22",
      location: "Cape Town, Western Cape",
      documentUrl: "https://example.com/tender3",
      category: "Infrastructure",
    },
    {
      id: 4,
      institution: "Department of Transport",
      number: "DOT/2023/004",
      description: "Maintenance of provincial roads.",
      closingDate: "2025-07-25",
      location: "Polokwane, Limpopo",
      documentUrl: "https://example.com/tender4",
      category: "Transport",
    },
  ];

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredTenders = useMemo(() => {
    if (!normalizedSearch) return tenders;

    return tenders.filter((tender) =>
      ["institution", "number", "description", "category", "location"].some(
        (key) =>
          (tender as Record<string, string>)[key]
            .toLowerCase()
            .includes(normalizedSearch)
      )
    );
  }, [normalizedSearch, tenders]);

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between space-x-4">
        <Input
          placeholder="Search tenders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline">Refresh</Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTenders.map((tender) => (
          <Card
            key={tender.id}
            className="p-4 rounded-xl shadow-md border border-gray-200"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-bold">{tender.institution}</h3>
              <p className="text-sm text-gray-600">{tender.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge>{tender.number}</Badge>
                <Badge>{tender.category}</Badge>
              </div>
              <div className="text-sm text-gray-500">
                Closing Date: {tender.closingDate}
              </div>
              <div className="text-sm text-gray-500">
                Location: {tender.location}
              </div>
              <a
                href={tender.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm hover:underline"
              >
                View Document
              </a>
              <div className="flex justify-end gap-2 mt-2">
                <Button size="sm" variant="outline">
                  Delete
                </Button>
                <Button size="sm">Approve</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TenderPage;
