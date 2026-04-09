import { Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material';
import HardwareList from './HardwareList';
import JoinButton from './JoinButton';

export default function ProjectCard({ name, description, members, hardware, joined, onToggleJoin }) {
  return (
    <Card className="projectCard" variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Chip label={`${members} members`} size="small" />
          </Stack>

          <Typography variant="body2">{description}</Typography>

          <Divider />

          <HardwareList items={hardware} />

          <JoinButton joined={joined} onClick={onToggleJoin} />
        </Stack>
      </CardContent>
    </Card>
  );
}
