import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer, ListItemIcon } from '@mui/material';
import { indigo, teal } from '@mui/material/colors';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Drawerr({handleDrawerToggle,mobileOpen,drawerWidth,navItems,theme}) {
  const navigate = useNavigate();
  const location = useLocation();
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2,color:"white" }}>
            Hegazy store
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                backgroundColor: location.pathname === item.path && teal[900],
                color: "#fff",
                '&:hover':{backgroundColor:teal[900]}
              }}
              key={item.name} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemIcon>
                {item.icon}
                </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
  return (
    <Drawer
    variant="temporary"
    open={mobileOpen}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true, // Better open performance on mobile.
    
    }}
    sx={{
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': {backgroundColor: indigo[900], boxSizing: 'border-box', width: drawerWidth },
      
    }}
  >
    {drawer}
  </Drawer>
  )
}
