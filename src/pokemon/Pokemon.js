import { useContext, useEffect, useState } from "react";
import { requestPokemonDetails } from "../infra/requests";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

import { convertToStartCase } from "../utils/functions";
import { FavoriteContext } from "../favorites/context/favoriteContext";

export default function Pokemon() {
  const { pokemon } = useParams();
  const { favorites } = useContext(FavoriteContext);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    requestPokemonDetails(pokemon).then((response) =>
      setPokemonDetails(response)
    );
  }, [pokemon]);

  const isFavorite = favorites.some((favorite) => pokemon === favorite.name);

  return (
    <>
      <Header
        pageName={pokemon}
        isFavorite={isFavorite}
        pokemonDetails={pokemonDetails}
      />
      <Container maxWidth="lg">
        <Box mt={2}>
          <img
            width="100%"
            height="auto"
            src={`${pokemonDetails?.sprites.front_default}`}
            alt=""
          />
        </Box>
        <Typography variant="h3">
          {convertToStartCase(pokemonDetails?.name)}
        </Typography>

        {/* <Typography>Tipo: </Typography>
        <Typography>
          {pokemonDetails?.types.map((type) => type.type.name)}{" "}
        </Typography> */}

        <Box display="flex" flexDirection="row">
          <Typography variant="body2">Espécie: </Typography>
          <Typography>{pokemonDetails?.species.name}</Typography>
        </Box>

        <Box display="flex" flexDirection="row">
          <Typography variant="body2">Altura: </Typography>
          <Typography>{pokemonDetails?.height}</Typography>
        </Box>

        <Box display="flex" flexDirection="row">
          <Typography variant="body2">Peso: </Typography>
          <Typography>{pokemonDetails?.weight}</Typography>
        </Box>

        <Typography>Habilidades: </Typography>
        {pokemonDetails?.abilities.map((ability) => (
          <Typography>{ability.ability.name}</Typography>
        ))}
      </Container>
    </>
  );
}
