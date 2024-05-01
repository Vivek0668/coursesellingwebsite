import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LoginIcon from '@mui/icons-material/Login';
import DehazeIcon from '@mui/icons-material/Dehaze';
import InfoIcon from '@mui/icons-material/Info';
import InputIcon from '@mui/icons-material/Input';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Toggle() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false); 
  };

  const DrawerList = (
    <Box sx={{ backgroundColor: "#9b9596", width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Learn about-us'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={() => handleNavigation(`/${text.toLowerCase()}`)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <LoginIcon /> : <InputIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InfoIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><DehazeIcon /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
