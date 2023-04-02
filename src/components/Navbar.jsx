import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { indigo, teal } from "@mui/material/colors";

export default function Navbar({
  handleDrawerToggle,
  theme,
  changeMode,
  navItems,
}) {
  const navigate = useNavigate();
  const location = useLocation();
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
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
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

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              onClick={() => {
                navigate(item.path);
              }}
              key={item.name}
              sx={{
                backgroundColor: location.pathname === item.path ? teal[900] : null,
                color: "#fff",
                '&:hover':{backgroundColor:teal[900]}
              }}
            >
              {item.name}
              {item.icon}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
