import api from "./api";

export async function requestPokemons() {
  const response = await api.get("/");
  if (response.data.results) {
    return Promise.all(
      response.data.results.map(async ({ name }) => {
        return requestPokemonDetails(name);
      })
    );
  }
  return null;
}

export async function requestPokemonDetails(pokemon) {
  const response = await api.get(`/${pokemon}`);
  if (response.data) return response.data;
  return null;
}
