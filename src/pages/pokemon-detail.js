import {Chip, LinearProgress, Paper} from "@material-ui/core";
import {useParams} from 'react-router-dom';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import usePokemon from "../hooks/pokemon.hook";

export default function PokemonDetails({classes}) {

    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id)

    return (
        <>
            {loading ?
                (
                    <Paper style={{textAlign: "center"}}>
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
        </>
    );
}
