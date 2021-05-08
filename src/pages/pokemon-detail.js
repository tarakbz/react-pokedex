import {Button, Chip, IconButton, LinearProgress, Paper} from "@material-ui/core";
import {Link, useParams} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import usePokemon from "../hooks/pokemon.hook";

export default function PokemonDetails() {

    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id)

    return (
        <>
            {loading ?
                (
                    <Paper>
                        <IconButton component={Link} to={`/pokemons/edit/${id}`}>
                            <EditIcon/>
                        </IconButton>
                        <img src={pokemon.picture} alt=""/>

                            {pokemon.name} <br/>
                            {formatDate(pokemon.created)}
                            {
                                pokemon.types.map((type, index) => (
                                    <Chip key={index} label={type}
                                          style={{backgroundColor: formatType(type)}}/>
                                ))
                            }
                        <Button component={Link} to="/">
                            Return to pokedex
                        </Button>
                    </Paper>
                )
                :
                (
                    <LinearProgress/>
                )
            }
        </>
    );
}
