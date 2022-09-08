import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "./styles/Switch";
import { ThemeContext } from "./context/todos.context";

function NavBar() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "inherit",
        color: isDarkMode ? "#d6d6d6" : "black",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SKYE TODO
        </Typography>
        <Switch onChange={toggleDarkMode} checked={isDarkMode} />
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
