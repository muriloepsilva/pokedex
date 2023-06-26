import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { convertToStartCase } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { CardActions, Chip, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FavoriteContext } from "../../favorites/context/favoriteContext";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function PokemonCard({ pokemon }) {
  console.log(pokemon);
  const navigate = useNavigate();
  const { favorites, setFavorites } = React.useContext(FavoriteContext);

  const pokemonIsFavorite = favorites.some(
    (favorite) => pokemon.name === favorite.name
  );

  function addOrRemoveFavorite() {
    if (pokemonIsFavorite)
      setFavorites(
        favorites.filter((favorite) => pokemon.name !== favorite.name)
      );
    else setFavorites([...favorites, pokemon]);
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="194"
        image={pokemon.sprites.front_default}
        onClick={() => navigate(`/pokemon/${pokemon.name}`)}
        style={{ cursor: "pointer" }}
      />
      <CardHeader
        title={convertToStartCase(pokemon.name)}
        subheader={pokemon.types.map((type) => (
          <Chip
            label={type.type.name}
            variant="outlined"
            style={{ margin: "0.1em" }}
          />
        ))}
      />
      <CardActions disableSpacing>
        <IconButton onClick={() => addOrRemoveFavorite()}>
          {pokemonIsFavorite ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <IconButton
          onClick={() => navigate(`/pokemon/${pokemon.name}`)}
          style={{ cursor: "pointer" }}
        >
          <OpenInFullIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
