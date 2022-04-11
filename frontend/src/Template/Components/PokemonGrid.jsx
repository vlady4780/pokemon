import pokemons from '../Data/pokemons.json'
import PokemonCard from './PokemonCard'

export const PokemonGrid = () =>{

    return(
        <div>
            <ul>
                {
                    pokemons.map((pokemon)=>(
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))
                }
            </ul>
        </div>
    ) 
}

export default PokemonGrid