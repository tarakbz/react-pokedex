import {Chip, LinearProgress, Paper} from "@material-ui/core";
import {Link} from 'react-router-dom';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import usePokemon from "../hooks/pokemon.hook";

export default function PokemonDetails({match, classes}) {

    const [pokemon, loading] = usePokemon(match.params.id)

    return (
        <>
            {loading ?
                (
                    <Paper>
                        <img src={pokemon.picture} alt=""/>
                        <div className={classes.name}>
                            {pokemon.name} <br/>
                            <small> {formatDate(pokemon.created)}</small>
                            <br/>
                            {
                                pokemon.types.map((type, index) => (
                                    <Chip key={index} label={type}
                                          style={{marginRight: 5, backgroundColor: formatType(type), color: "white"}}/>
                                ))
                            }
                        </div>
                    </Paper>
                )
                :
                (
                    <LinearProgress/>
                )
            }
            <Link to="/">Retour</Link>
        </>
    );
}
