import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface PokemonState {
  page: number;
  pokemons: any[];
  isLoading: boolean;
}

const initialState: PokemonState = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    startLoadingPokemon: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action: PayloadAction<any>) => {
        state.isLoading = false
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons;
    }
  },
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemon, setPokemons } = pokemonSlice.actions;
