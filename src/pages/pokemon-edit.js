import {useParams} from "react-router-dom";
import usePokemon from "../hooks/pokemon.hook";
import PokemonForm from "../components/pokemon-form";
import {Divider, LinearProgress, Paper, Typography} from "@material-ui/core";
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
                        <Typography align="center" variant="h2">Edit {pokemon.name}</Typography>
                        <Divider />
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
