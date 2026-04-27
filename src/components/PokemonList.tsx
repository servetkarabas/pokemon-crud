import { useDeletePokemon, usePokemons } from "../hooks/usePokemon";

const PokemonList = () => {
  const { data: pokemons } = usePokemons();
  const { mutate: deletePokemon } = useDeletePokemon();
  const modal = document.getElementById("deleteModal");

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {pokemons?.map((p) => (
        <li key={p.id} className="list-row">
          {p.name} + "  "+ {p.id}
          <button className="btn" onClick={() => deletePokemon(p.id)}>sil</button>

          <button>Duzenle</button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
