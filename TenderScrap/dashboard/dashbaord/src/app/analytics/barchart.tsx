"use client";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarItemIdentifier, ChartsAxisData } from "@mui/x-charts/models";

// Optional: If you don't have HighlightedCode or it's just for debugging
// You can replace it or build your own pretty-printer
const HighlightedCode = ({ code }: { code: string }) => (
  <pre
    style={{
      whiteSpace: "pre-wrap",
      backgroundColor: "#f5f5f5",
      padding: "10px",
      borderRadius: "4px",
    }}
  >
    {code}
  </pre>
);

const barChartsParams = {
  series: [
    {
      id: "series-1",
      data: [3, 4, 1, 6, 5, 2, 7, 4, 6, 5, 8],
      label: "SUBMITED",
      stack: "total",
      color: "#4CAF50",
      highlightScope: {
        highlight: "item",
      },
    },
    {
      id: "series-2",
      data: [4, 3, 1, 5, 8, 2, 6, 3, 5, 4, 7],
      label: "ADDED",
      stack: "total",
      color: "#2196F3",
      highlightScope: {
        highlight: "item",
      },
    },
    {
      id: "series-3",
      data: [4, 2, 5, 4, 1, 3, 2, 4, 5, 6],
      label: "NOT SUBMITED",
      color: "#ff4d4d",
      highlightScope: {
        highlight: "item",
      },
    },
  ],
  xAxis: [{ data: ["week 1", "week 2", "week 3", "week 4", "week 5", "week 6", "week 7", "week 8", "week 9", "week 10"], id: "axis1" }],
  height: 400,
} as const;

export default function BarClick() {
  const [itemData, setItemData] = React.useState<BarItemIdentifier>();
  const [axisData, setAxisData] = React.useState<ChartsAxisData | null>(null);

  return (
    <Stack
      className="bg-white rounded-xl p-4 shadow-md border-t-4 border-green-500 hover:shadow-lg transition"
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 4, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box
     
    </Stack>
  );
}
