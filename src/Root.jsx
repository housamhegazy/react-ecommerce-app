import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Drawerr from "./components/Drawerr";
import Navbar from "./components/Navbar";
import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { getDesignTokens } from "./styles/theme";
import { ShoppingCart } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
//drawer width
const drawerWidth = 240;
export default function Root() {
  //navbar and drawer functions
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // @ts-ignore
  const { insertedProducts } = useSelector((state) => state.counter);

  const navItems = [
    {
      name: "cart",
      path: "/cart",
      icon: (
        <StyledBadge badgeContent={insertedProducts.length} color="secondary">
          <ShoppingCart />
        </StyledBadge>
      ),
    },
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

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
      <Drawerr
        {...{ theme, navItems, handleDrawerToggle, mobileOpen, drawerWidth }}
      />
      <Box sx={{ px: 2, py: 4 }}>
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}
