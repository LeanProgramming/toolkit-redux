import { useEffect } from "react"
import { RootState, getPokemons } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

export const PokemonApp = () => {

    const dispatch = useAppDispatch();
    const { page, pokemons, isLoading } = useAppSelector((state: RootState) => state.pokemon)

    useEffect(() => {
        dispatch( getPokemons() );

    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>Loading: {isLoading ? 'True': 'False'}</span>

            <ul>
                {
                    pokemons.map((pkm) => (
                        <li>{pkm.name}</li>
                    ))
                }
            </ul>

            <button
                disabled = {isLoading}
                onClick={ () => dispatch(getPokemons(page))}
            >
                Next
            </button>
        </>
    )
}
