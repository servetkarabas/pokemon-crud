import { usePokemons } from "../hooks/usePokemon";
import DeleteConfirmModal from "./DeleteConfirmModal";

const PokemonList = () => {
  const { data: pokemons } = usePokemons();
  const warning = DeleteConfirmModal;

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {pokemons?.map((p) => (
        <li key={p.id} className="list-row">
          {" "}
          {p.name}{" "}
        
        <button
        className="btn"
        onClick={() => document.getElementById("deleteModal").showModal()}
      >
        sil
      </button>
        
              <button>Duzenle</button>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
