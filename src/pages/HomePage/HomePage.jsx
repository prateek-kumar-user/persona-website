import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';

import profile from '../../content/profile.json';

export default function HomePage() {
  const { identity, engineering_philosophy } = profile;

  return (
    <Box>
      <Stack spacing={2}>
        <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
          {identity.name}
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 900 }}>
          {identity.primary_title} — {identity.positioning}
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 900 }}>
          {identity.core_trait}.
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Chip label={identity.engineering_identity} />
          <Chip label={identity.location} variant="outlined" />
          {identity.availability?.remote && <Chip label="Remote" variant="outlined" />}
          {identity.availability?.full_time && <Chip label="Full-time" variant="outlined" />}
          {identity.availability?.freelance && <Chip label="Freelance" variant="outlined" />}
        </Stack>

        <Box sx={{ pt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            How I work
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 900 }}>
            {engineering_philosophy.problem_solving_style.join(' • ')}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
