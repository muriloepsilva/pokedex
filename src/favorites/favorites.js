import { useContext } from "react";
import Header from "../components/Header";
import { FavoriteContext } from "./context/favoriteContext";
import PokemonCard from "../pokedex/Components/PokemonCard";
import { Grid } from "@mui/material";

export default function Favorites() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <>
      <Header pageName={"Favoritos"} />
      {favorites.map((pokemon) => {
        return (
          <>
            <Grid item xs={6} lg={3}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          </>
        );
      })}
    </>
  );
}
