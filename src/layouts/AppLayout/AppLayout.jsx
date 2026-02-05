import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

import site from '../../content/site.json';

import styles from './AppLayout.module.scss';

function NavButton({ to, label, selected }) {
  const navigate = useNavigate();

  return (
    <Button
      variant={selected ? 'contained' : 'text'}
      color={selected ? 'primary' : 'inherit'}
      onClick={() => navigate(to)}
      sx={{ textTransform: 'none' }}
    >
      {label}
    </Button>
  );
}

export default function AppLayout() {
  const location = useLocation();

  return (
    <Box className={styles.root}>
      <AppBar position="sticky" color="transparent" elevation={0} className={styles.appBar}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            {site.domain}
          </Typography>

          <Box className={styles.nav}>
            {site.routes.map((r) => (
              <NavButton
                key={r.path}
                to={r.path}
                label={r.label}
                selected={location.pathname === r.path}
              />
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" className={styles.container}>
        <Outlet />
      </Container>

      <Box className={styles.footer}>
        <Container maxWidth="lg">
          <Box className={styles.footerInner}>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} {site.domain}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
