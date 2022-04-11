export const PokemonCard = ({pokemon}) =>{

    return(
        <li>
            <figure>
                <img src={pokemon.img} alt={pokemon.nombre} />
            </figure>
            N°: {pokemon.numero}
            <hr />
            Nombre: {pokemon.nombre}
            <br />
            Tipo: {pokemon.tipo}
        </li>
    ) 
}

export default PokemonCard