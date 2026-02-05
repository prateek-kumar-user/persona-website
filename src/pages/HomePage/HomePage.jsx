import React from 'react';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';

import profile from '../../content/profile.json';
import avatar from '../../assets/avatar.png';

export default function HomePage() {
  const { identity, engineering_philosophy } = profile;

  return (
    <Box>
      <Stack spacing={2}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
        >
          <Avatar
            src={avatar}
            alt={identity.name}
            sx={{ width: 72, height: 72, border: '1px solid rgba(255,255,255,0.18)' }}
          />

          <Box>
            <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.1 }}>
              {identity.name}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 900, mt: 0.5 }}>
              {identity.primary_title}
            </Typography>
          </Box>
        </Stack>

        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 950 }}>
          {identity.positioning}
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
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 950 }}>
            {engineering_philosophy.problem_solving_style.join(' • ')}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
