import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography
} from '@mui/material';

import resumeText from '../../content/resume.txt?raw';

import styles from './ResumePage.module.scss';

function Section({ title, children, className }) {
  return (
    <Card
      variant="outlined"
      className={className}
      sx={{ borderColor: 'rgba(255,255,255,0.12)' }}
    >
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

function pickBlock(text, heading) {
  // very lightweight extractor: finds a heading line and returns text until next blank+capital heading
  const lines = text.split(/\r?\n/);
  const idx = lines.findIndex((l) => l.trim() === heading);
  if (idx === -1) return '';
  const out = [];
  for (let i = idx + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (line.trim() === '') continue;

    // stop at next known heading
    if (
      ['Experience', 'Education', 'Summary', 'Top Skills', 'Languages', 'Certifications', 'Contact'].includes(
        line.trim()
      )
    ) {
      break;
    }
    out.push(line.trim());
  }
  return out.join('\n');
}

function pickBullets(text) {
  // Extract lines starting with "❖" or "➞" as bullets.
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.startsWith('❖') || l.startsWith('➞'))
    .map((l) => l.replace(/^[❖➞]\s*/, ''));
}

export default function ResumePage() {
  const summary = pickBlock(resumeText, 'Summary');
  const topSkills = pickBlock(resumeText, 'Top Skills');
  const languages = pickBlock(resumeText, 'Languages');
  const certifications = pickBlock(resumeText, 'Certifications');
  const bullets = pickBullets(resumeText);

  return (
    <Box>
      <Box className={styles.header}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Resume
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Structured view derived from your PDF text. (Copy/ATS polishing is scheduled for later.)
        </Typography>
      </Box>

      <Box className={styles.grid}>
        <Section title="Summary" className={styles.card}>
          <Typography variant="body2" color="text.secondary">
            {summary || '—'}
          </Typography>
        </Section>

        <Section title="Highlights" className={styles.card}>
          {bullets?.length ? (
            <Stack spacing={0.75}>
              {bullets.slice(0, 8).map((b) => (
                <Typography key={b} variant="body2">
                  • {b}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary">
              —
            </Typography>
          )}
        </Section>

        <Section title="Top skills" className={styles.card}>
          <Typography component="pre" className={styles.pre}>
            {topSkills || '—'}
          </Typography>
        </Section>

        <Section title="Languages" className={styles.card}>
          <Typography component="pre" className={styles.pre}>
            {languages || '—'}
          </Typography>
        </Section>

        <Section title="Certifications" className={styles.card}>
          <Typography component="pre" className={styles.pre}>
            {certifications || '—'}
          </Typography>
        </Section>

        <Section title="Raw extracted text" className={styles.full}>
          <Typography component="pre" className={styles.pre}>
            {resumeText}
          </Typography>
        </Section>
      </Box>
    </Box>
  );
}
