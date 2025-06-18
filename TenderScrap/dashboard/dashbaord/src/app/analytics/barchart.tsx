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
      data: [3, 4, 1, 6, 5, 2, 7, 4, 6, 5, 8, 9],
      label: "SUBMITED",
      stack: "total",
      color: "#4CAF50",
      highlightScope: {
        highlight: "item",
      },
    },
    {
      id: "series-2",
      data: [4, 3, 1, 5, 8, 2, 6, 3, 5, 4, 7, 2],
      label: "ADDED",
      stack: "total",
      color: "#2196F3",
      highlightScope: {
        highlight: "item",
      },
    },
    {
      id: "series-3",
      data: [4, 2, 5, 4, 1, 3, 2, 4, 5, 6, 8, 7],
      label: "NOT SUBMITED",
      color: "#ff4d4d",
      highlightScope: {
        highlight: "item",
      },
    },
  ],
  xAxis: [{ data: ["Jan", "Feb", "Mar", "Apri", "May", "June", "July", "August", "September", "October", "November", "December"], id: "axis1" }],
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
        <Typography variant="h6" flexDirection={"row"} align="center" fontWeight={"bold"} gutterBottom>
         MONTHLY OVERVIEW
        </Typography>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>
     
    </Stack>
  );
}
