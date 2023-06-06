import { useEffect, useState } from "react";
import { requestPokemons } from "../infra/requests";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (pokemons.length > 0) return;
    requestPokemons().then((response) => setPokemons(response));
  });

  function handleClick(pokemonName) {
    navigate(`/pokemon/${pokemonName}`);
  }

  return (
    <>
      <Header pageName="Pokedex" />
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {pokemons.map((pokemon) => (
            <Grid item xs={6} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {pokemon.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleClick(pokemon.name)}
                  >
                    Abrir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
