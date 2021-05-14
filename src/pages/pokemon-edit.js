import {useParams} from "react-router-dom";
import usePokemon from "../hooks/pokemon.hook";
import PokemonForm from "../components/pokemon-form";
import {LinearProgress, Paper, Typography} from "@material-ui/core";
import style from "../styles/style";


const PokemonEdit = () => {
    const classes = style();
    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id);
    return (
        <>
            {loading ?
                (
                    <Paper className={classes.paperForm}>
                        <Typography variant="h5">Edit : {pokemon.name}</Typography>
                        <PokemonForm pokemon={pokemon}/>
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

export default PokemonEdit;
