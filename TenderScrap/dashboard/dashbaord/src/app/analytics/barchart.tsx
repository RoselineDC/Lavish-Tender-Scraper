'use client';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import { BarChart } from '@mui/x-charts/BarChart';
import { BarItemIdentifier, ChartsAxisData } from '@mui/x-charts/models';

// Optional: If you don't have HighlightedCode or it's just for debugging
// You can replace it or build your own pretty-printer
const HighlightedCode = ({ code }: { code: string }) => (
  <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '', padding: '10px', borderRadius: '4px' }}>
    {code}
  </pre>
);

const barChartsParams = {
  series: [
    {
      id: 'series-1',
      data: [3, 4, 1, 6, 5],
      label: 'SUBMITED',
      stack: 'total',
      highlightScope: {
        highlight: 'item',
      },
    },
    {
      id: 'series-2',
      data: [4, 3, 1, 5, 8],
      label: 'ADDED',
      stack: 'total',
      highlightScope: {
        highlight: 'item',
      },
    },
    {
      id: 'series-3',
      data: [4, 2, 5, 4, 1],
      label: 'NOT SUBMITED',
      highlightScope: {
        highlight: 'item',
      },
    },
  ],
  xAxis: [{ data: ['week 1', 'week 2', 'week 3', 'week 4'], id: 'axis1' }],
  height: 400,
} as const;

export default function BarClick() {
  const [itemData, setItemData] = React.useState<BarItemIdentifier>();
  const [axisData, setAxisData] = React.useState<ChartsAxisData | null>(null);

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: '100%' }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <BarChart
          {...barChartsParams}
          onItemClick={(event, d) => setItemData(d)}
          onAxisClick={(event, d) => setAxisData(d)}
        />
      </Box>

      <Stack direction="column" sx={{ width: { xs: '100%', md: '40%' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Click on the chart</Typography>
          <IconButton
            aria-label="reset"
            size="small"
            onClick={() => {
              setItemData(undefined);
              setAxisData(null);
            }}
          >
            <UndoOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
        <HighlightedCode
          code={`// Data from item click
${itemData ? JSON.stringify(itemData, null, 2) : '// The data will appear here'}

// Data from axis click
${axisData ? JSON.stringify(axisData, null, 2) : '// The data will appear here'}
`}
        />
      </Stack>
    </Stack>
  );
}
