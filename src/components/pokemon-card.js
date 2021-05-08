import {Chip, Paper} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";

export default function PokemonCard({pokemon}) {

    const [elevation, setElevation] = useState(1)
    const history = useHistory();

    const setUp = () => {
        setElevation(6)
    }

    const setDown = () => {
        setElevation(1)
    }

    const goToPokemon = (id) => {
        history.push(`/pokemons/${id}`)
    }
    return (
        <Paper elevation={elevation} onClick={() => goToPokemon(pokemon.id)} onMouseLeave={setDown}
               onMouseEnter={setUp}>
            <img src={pokemon.picture} alt=""/>
            {pokemon.name}
            {formatDate(pokemon.created)}
            {
                pokemon.types.map((type, index) => (
                    <Chip key={index} label={type}
                          style={{backgroundColor: formatType(type)}}/>
                ))
            }
        </Paper>
    );
}
