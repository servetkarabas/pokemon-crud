import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/axios";
import type { Pokemon } from "../types/pokemon";

// usePokemons() GET /pokemons Tüm listeyi getir

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.get<Pokemon[]>("/pokemons").then((res) => res.data),
    staleTime: 3 * 60 * 1000,
  });
};

// usePokemon(id) GET /pokemons/:id Tek pokemon detayı

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: () =>
      api.get<Pokemon>("/pokemons/" + { id }).then((res) => res.data),
    staleTime: 3 * 60 * 1000,
  });
};

// useCreatePokemon() POST /pokemons Yeni ekle

export const useCreatePokemon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (p: Omit<Pokemon, "id">) =>
      api.post<Pokemon>("/pokemons", p).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};

// useUpdatePokemon() PUT veya PATCH /pokemons/:id Güncelle
export const useUpdatePokemon = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (p) =>
      api.put<Pokemon>("/pokemons/" + { id }, p).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};

// useDeletePokemon() DELETE /pokemons/:id Sil
export const useDeletePokemon = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      api.delete<Pokemon>("/pokemons/" + { id }).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pokemons"] });
    },
  });
};
