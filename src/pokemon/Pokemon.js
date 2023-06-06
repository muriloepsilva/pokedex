import { useEffect, useState } from "react";
import { requestPokemonDetails } from "../infra/requests";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const { pokemon } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    requestPokemonDetails(pokemon).then((response) =>
      setPokemonDetails(response)
    );
  }, [pokemon]);

  return (
    <>
      <Header pageName={pokemon.toUpperCase()}></Header>
      <img src={`${pokemonDetails?.sprites.front_default}`} alt="" />
    </>
  );
}
