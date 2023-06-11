import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { convertToStartCase } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { Chip } from "@mui/material";

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pokemon/${pokemon.name}`);
  }

  return (
    <Card onClick={() => handleClick()} style={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="194"
        image={pokemon.sprites.front_default}
        alt="Paella dish"
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
    </Card>
  );
}
