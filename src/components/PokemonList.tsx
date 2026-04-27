import { usePokemons } from "../hooks/usePokemon";

const PokemonList = () => {
  const { data: pokemons } = usePokemons();

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {pokemons?.map((p) => (
        <li key={p.id} className="list-row">
          {" "}
          {p.name}{" "}
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
