
import { useCreatePokemon } from "../hooks/usePokemon";
import type { Pokemon } from "../types/pokemon";

const PokemonForm = () => {
  const { mutate: addPokemon } = useCreatePokemon();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    addPokemon(values as Pokemon);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="type" />
      <input name="level" />
      <input name="imageUrl" />
      <button>Ekle</button>
    </form>
  );
};

export default PokemonForm;

// name: string;
// type: string;
// level: number;
// imageUrl?: string;
