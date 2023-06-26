import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Badge, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { convertToStartCase } from "../utils/functions";
import { useContext } from "react";
import { FavoriteContext } from "../favorites/context/favoriteContext";

export default function Header({ pageName, isFavorite, pokemonDetails }) {
  const navigate = useNavigate();
  const { favorites, setFavorites } = useContext(FavoriteContext);

  function addOrRemoveFavorite() {
    if (pokemonDetails) {
      if (isFavorite)
        setFavorites(
          favorites.filter((favorite) => pokemonDetails.name !== favorite.name)
        );
      else setFavorites([...favorites, pokemonDetails]);
    }
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
            onClick={() => navigate(`/`)}
          >
            <CatchingPokemonTwoToneIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {convertToStartCase(pageName)}
          </Typography>
          {pageName !== "Favoritos" ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() =>
                pageName !== "Pokedex"
                  ? addOrRemoveFavorite()
                  : navigate("/favoritos")
              }
            >
              <Badge badgeContent={favorites.length} color="error">
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderTwoToneIcon />}
              </Badge>
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
