import React from 'react';
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';

import site from '../../content/site.json';

function openExternal(url) {
  // Per request: no <a href>. Use imperative navigation.
  window.location.assign(url);
}

export default function ContactPage() {
  const { contact, domain } = site;

  return (
    <Box>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Reach out for full-time roles, freelance work, or architecture/engineering discussions.
        </Typography>
      </Stack>

      <Card variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.12)' }}>
        <CardContent>
          <Stack spacing={1.5}>
            <Typography variant="body1">
              Email: {contact.email}
            </Typography>
            <Typography variant="body1">
              Phone: {contact.phone}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                onClick={() => openExternal(`mailto:${contact.email}`)}
                sx={{ textTransform: 'none' }}
              >
                Send Email
              </Button>
              <Button
                variant="outlined"
                onClick={() => openExternal(contact.linkedin)}
                sx={{ textTransform: 'none' }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                onClick={() => openExternal(`https://${domain}`)}
                sx={{ textTransform: 'none' }}
              >
                {domain}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
