import {useParams} from "react-router-dom";
import PokemonForm from "../components/pokemon-form";
import {Divider, LinearProgress, Paper, Typography} from "@material-ui/core";
import style from "../styles/style";
import {useEffect, useState} from "react";
import PokemonService from "../services/pokemon-service";


const PokemonEdit = () => {

    let {id} = useParams();

    const classes = style();

    const [loaded, setLoaded] = useState(false);
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        PokemonService.getPokemon(id).then(pokemon => {
            setPokemon(pokemon)
            setLoaded(true)
        });
    }, [id]);

    return (
        <>
            {loaded ?
                (
                    <Paper className={classes.paperForm}>
                        <Typography align="center" variant="h2">Edit {pokemon.name}</Typography>
                        <Divider/>
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
