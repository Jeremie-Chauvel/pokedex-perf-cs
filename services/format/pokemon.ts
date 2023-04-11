import padStart from "lodash/padStart";
import { PokemonResponse } from "../api/pokemon";

export function getPokemonId(pokemon: PokemonResponse) {
  return `#${padStart(pokemon.id.toString(), 4, "0")}`;
}
