import { pokemonApi } from "../../../api/pokemonApi";
import { AppDispatch, RootState } from "../../store";
import { setPokemons, startLoadingPokemon } from "./pokemonSlices";


export const getPokemons = ( page: number = 0 ) => {
    
    return async ( dispatch: AppDispatch ): Promise<any> => {
        dispatch( startLoadingPokemon() );

        // const resp = await fetch( url )
        // const data = await resp.json();

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        
        dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
    }

}