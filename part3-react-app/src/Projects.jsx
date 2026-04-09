import { useState } from 'react';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import ProjectCard from './components/ProjectCard';

const initialProjects = [
  {
    id: 1,
    name: 'Alpha Rover',
    description: 'Field testing for the rover team.',
    members: 4,
    hardware: ['Camera kit', 'Motor driver', 'Battery pack'],
    joined: true,
  },
  {
    id: 2,
    name: 'Lab Monitor',
    description: 'A small system for tracking lab hardware.',
    members: 3,
    hardware: ['Sensor node', 'Display', 'Raspberry Pi'],
    joined: false,
  },
  {
    id: 3,
    name: 'Build Bench',
    description: 'Shared bench for quick tests and checks.',
    members: 5,
    hardware: ['Tool set', 'Power supply', 'Breadboard'],
    joined: false,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);

  const handleToggleJoin = (projectId) => {
    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              joined: !project.joined,
              members: project.joined ? project.members - 1 : project.members + 1,
            }
          : project,
      ),
    );
  };

  const joinedCount = projects.filter((project) => project.joined).length;

  return (
    <Box className="page">
      <Container maxWidth="md">
        <Box className="hero">
          <Stack spacing={2}>
            <Chip label="React Homework Part 3" sx={{ alignSelf: 'flex-start' }} />
            <Typography variant="h3" component="h1">
              Projects
            </Typography>
            <Typography variant="body1">
              This page shows a few projects, the hardware in each set, and a simple join button.
            </Typography>
            <Typography variant="body2">
              Joined projects: {joinedCount}
            </Typography>
          </Stack>
        </Box>

        <Stack spacing={2}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              members={project.members}
              hardware={project.hardware}
              joined={project.joined}
              onToggleJoin={() => handleToggleJoin(project.id)}
            />
          ))}
        </Stack>

        <Box className="footerBar">
          <Button variant="contained" onClick={() => setProjects(initialProjects)}>
            Reset
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
