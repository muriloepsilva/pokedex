import { useEffect, useState } from "react";
import { requestPokemons } from "../infra/requests";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Header from "../components/Header";
import PokemonCard from "./Components/PokemonCard";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (pokemons.length > 0) return;
    requestPokemons().then((response) => setPokemons(response));
  });

  return (
    <>
      <Header pageName="Pokedex" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <Grid item xs={6} lg={3}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
