import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { indigo, teal } from "@mui/material/colors";
//menu
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Categories from "./Categories";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    backgroundColor: indigo[900],
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
export default function Navbar({
  handleDrawerToggle,
  theme,
  changeMode,
  navItems,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  //menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      component="nav"
      sx={{ backgroundColor: indigo[900] }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0.5, display: { xs: "none", sm: "block" } }}
        >
          hegazy
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.getContrastText(indigo[900]),
            borderRadius: 1,
            px: 1,
          }}
        >
          {theme.palette.mode}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              changeMode();
            }}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button
              size="small"
              onClick={() => {
                navigate(item.path);
              }}
              key={item.name}
              sx={{
                mx: "4px",
                backgroundColor:
                  location.pathname === item.path
                    ? theme.palette.primary.main
                    : null,
                color:
                  location.pathname === item.path
                    ? 'black'
                    : "#fff",
                
                "&:hover": { backgroundColor: theme.palette.primary.main ,color:"black"},
              }}
            >
              {item.path !== "/cart" && item.name}
              {item.path === "/cart" && item.icon}
            </Button>
          ))}

          {/* categories btn */}
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            size="small"
          >
            Categories
          </Button>

          {/* categories menu */}
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <Categories handleDrawerToggle={handleClose} />
          </StyledMenu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
