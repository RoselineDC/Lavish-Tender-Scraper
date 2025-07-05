'use client';

import React, { useState } from "react";
import Link from "next/link";
import FilterBar from './FilterBar';
import Card from "@mui/material/Card";

interface Tender {
  id: number;
  institutionName: string;
  tender_number: string;
  description: string;
  published_date: string;
  closing_date: string;
  briefing_date: string;
  location: string;
  tender_document_url: string;
  tender_category: string;
  tender_type: string;
  tender_status: string;
  contact_person: string;
  contact_email: string;
}

const mockTenders: Tender[] = [
  {
    id: 1,
    institutionName: "Dept of Education",
    tender_number: "DOE123",
    description: "Supply of Stationery",
    published_date: "2025-06-01",
    closing_date: "2025-06-30",
    briefing_date: "2025-06-10",
    location: "Pretoria",
    tender_document_url: "http://example.com/doc.pdf",
    tender_category: "Supplies",
    tender_type: "Open",
    tender_status: "Open",
    contact_person: "John Doe",
    contact_email: "john@example.com",
  },
];


cco