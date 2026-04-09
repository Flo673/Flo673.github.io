import { List, ListItem, ListItemText, Typography } from '@mui/material';

export default function HardwareList({ items }) {
  return (
    <div>
      <Typography variant="subtitle2" gutterBottom>
        Hardware
      </Typography>
      <List dense disablePadding>
        {items.map((item) => (
          <ListItem key={item} disableGutters>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
