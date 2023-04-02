import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Drawerr from "./components/Drawerr";
import Navbar from "./components/Navbar";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { getDesignTokens } from "./styles/theme";
//drawer width
const drawerWidth = 240;
export default function Root() {
  //navbar and drawer functions
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navItems = ["Home", "About", "Contact"];

  //darkmood functions
  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const changeMode = () => {
    localStorage.setItem(
      "currentMode",
      theme.palette.mode === "dark" ? "light" : "dark"
    );

    setMode(theme.palette.mode === "light" ? "dark" : "light");
  };
  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        {...{
          navItems,
          theme,
          changeMode,
          handleDrawerToggle,
          mobileOpen,
          drawerWidth,
        }}
      />
      <Drawerr {...{ navItems, handleDrawerToggle, mobileOpen, drawerWidth }} />
      <Box sx={{ px: 2, py: 4}}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
