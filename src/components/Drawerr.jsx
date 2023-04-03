import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  ListItemIcon,
} from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
export default function Drawerr({
  handleDrawerToggle,
  mobileOpen,
  drawerWidth,
  navItems,
  theme,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <List>
      <Typography variant="h6" sx={{ my: 2, color: "white" }}>
        Hegazy store
      </Typography>
      <Divider />
        {navItems.map((item) => (
          <ListItem
            onClick={() => {
              navigate(item.path);
              handleDrawerToggle()
            }}
            sx={{
              backgroundColor: location.pathname === item.path && theme.palette.primary.main,
              color: "#fff",
              "&:hover": { backgroundColor: theme.palette.primary.main },
            }}
            key={item.name}
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemIcon sx={{color:"white"}}>{item.icon}</ListItemIcon>
              <ListItemText
                sx={{ textAlign: "start", ml: 2 }}
                primary={item.name}
              />
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
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          backgroundColor: indigo[900],
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      {drawer}
      <Divider color='white'/>
      <Typography
        sx={{ fontSize:"20px", textWeight: "bold" ,color:"white",p:1}}
      >
        Categories
      </Typography>
      <Categories handleDrawerToggle={handleDrawerToggle} />
    </Drawer>
  );
}
