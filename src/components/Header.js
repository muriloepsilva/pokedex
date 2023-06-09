import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

import { convertToStartCase } from "../utils/functions";

export default function Header({ pageName }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/`);
  }

  return (
    <Box sx={{ flexGrow: 1 }} marginBottom={"3%"}>
      <AppBar position="static" style={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleClick()}
          >
            <CatchingPokemonTwoToneIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {convertToStartCase(pageName)}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
