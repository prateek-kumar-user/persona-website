import React from 'react';
import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';

import profile from '../../content/profile.json';

function ProjectCard({ title, project }) {
  return (
    <Card variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.12)' }}>
      <CardContent>
        <Stack spacing={1.5}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {title}
          </Typography>

          {project.context && (
            <Typography variant="body2" color="text.secondary">
              {project.context}
            </Typography>
          )}

          {project.core_shift && (
            <Typography variant="body1">{project.core_shift}</Typography>
          )}

          {project.judgment_call && (
            <Typography variant="body1">{project.judgment_call}</Typography>
          )}

          {project.system_role && (
            <Typography variant="body2" color="text.secondary">
              Role: {project.system_role}
            </Typography>
          )}

          {project.scope && (
            <Typography variant="body2" color="text.secondary">
              Scope: {project.scope}
            </Typography>
          )}

          {project.decisions?.length ? (
            <>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  Decisions
                </Typography>
                <Stack spacing={0.5} sx={{ mt: 1 }}>
                  {project.decisions.map((d) => (
                    <Typography key={d} variant="body2">
                      • {d}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </>
          ) : null}

          {project.outcomes?.length ? (
            <>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  Outcomes
                </Typography>
                <Stack spacing={0.5} sx={{ mt: 1 }}>
                  {project.outcomes.map((o) => (
                    <Typography key={o} variant="body2">
                      • {o}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </>
          ) : null}

          {project.result?.length ? (
            <>
              <Divider sx={{ borderColor: 'rgba(255,255,255,0.10)' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>
                  Result
                </Typography>
                <Stack spacing={0.5} sx={{ mt: 1 }}>
                  {project.result.map((o) => (
                    <Typography key={o} variant="body2">
                      • {o}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </>
          ) : null}

          {project.status && (
            <Typography variant="caption" color="text.secondary">
              Status: {project.status}
            </Typography>
          )}

          {project.durability && (
            <Typography variant="caption" color="text.secondary">
              Durability: {project.durability}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function ProjectsPage() {
  const projects = profile.signature_projects;

  return (
    <Box>
      <Stack spacing={2} sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800 }}>
          Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Case studies focused on system boundaries, durability, and operational clarity.
        </Typography>
      </Stack>

      <Stack spacing={2}>
        <ProjectCard title="Cargo Web" project={projects.cargo_web} />
        <ProjectCard title="Platform Consolidation" project={projects.platform_consolidation} />
        <ProjectCard title="AWTAR / KSRTC" project={projects.awtar_ksrtc} />
      </Stack>
    </Box>
  );
}
