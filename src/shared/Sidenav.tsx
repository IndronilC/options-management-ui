import * as React from 'react';
import '../App.css';
import KeyIcon from '@mui/icons-material/Key';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button'; // Import Button component
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";


const drawerWidth = 250;

export default function PermanentDrawerLeft() {

    const navigate = useNavigate();


    const  handleClick = () => {
        navigate("/");
    }

     function handleLookupClick() {
        navigate("/Optionlookup");
     } 
     
  return (
    
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
            
          <Typography variant="h6" noWrap component="div">
            Option Key & Lookup
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {/* {['Option Key', 'Option Lookup '].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Button fullWidth>
                <ListItemIcon>
                  {index % 2 === 0 ? <KeyIcon /> : <RemoveRedEyeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </Button>
            </ListItem>
            
          ))} */}

           {/* "Option Key" button */}
           <ListItem  key="Option Key"  >
            <Button  onClick={handleClick}>
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary="Option Key" />
            </Button>
          </ListItem>

            {/* "Option Lookup" button */}
          <ListItem  key="Option Lookup" >
            <Button  onClick={handleLookupClick}>
              <ListItemIcon>
                <RemoveRedEyeIcon />
              </ListItemIcon>
              <ListItemText primary="Option Lookup" />
            </Button>
          </ListItem>


        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}
