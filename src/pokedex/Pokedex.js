import { requestPokemons } from "../infra/requests";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../components/Header";
import PokemonCard from "./Components/PokemonCard";
import { useQuery } from "react-query";
import Loading from "../components/Loading";

export default function Pokedex() {
  const { data, isLoading } = useQuery(`requestPokemons`, requestPokemons);

  return (
    <>
      <Header pageName="Pokedex" />
      {!isLoading ? (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {data?.map((pokemon) => (
              <Grid item xs={6} lg={3}>
                <PokemonCard pokemon={pokemon} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
