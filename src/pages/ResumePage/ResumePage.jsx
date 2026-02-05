import React from 'react';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';

import resumeText from '../../content/resume.txt?raw';

function Section({ title, children }) {
  return (
    <Card variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.12)' }}>
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />
          {children}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function ResumePage() {
  return (
    <Box>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Resume
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Extracted text (we can replace this with a nicer structured layout next).
        </Typography>
      </Stack>

      <Section title="Resume (raw text)">
        <Typography
          component="pre"
          sx={{
            whiteSpace: 'pre-wrap',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: 13,
            margin: 0
          }}
        >
          {resumeText}
        </Typography>
      </Section>
    </Box>
  );
}
