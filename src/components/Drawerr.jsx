import { Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from '@mui/material';
import React from 'react'

export default function Drawerr({handleDrawerToggle,mobileOpen,drawerWidth,navItems}) {
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MUI
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
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
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    }}
  >
    {drawer}
  </Drawer>
  )
}
