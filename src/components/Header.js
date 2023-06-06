import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

export default function Header(props) {
  const { pageName } = props;
  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={"3%"}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
