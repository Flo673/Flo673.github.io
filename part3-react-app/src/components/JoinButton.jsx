import { Button } from '@mui/material';

export default function JoinButton({ joined, onClick }) {
  return (
    <Button variant={joined ? 'outlined' : 'contained'} onClick={onClick}>
      {joined ? 'Leave project' : 'Join project'}
    </Button>
  );
}
