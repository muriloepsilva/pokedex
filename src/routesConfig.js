import { Route, Routes } from "react-router-dom";
import Pokedex from "./pokedex/Pokedex";
import Pokemon from "./pokemon/Pokemon";

export default function RoutesConfig() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:pokemon" element={<Pokemon />} />
      </Routes>
    </div>
  );
}
