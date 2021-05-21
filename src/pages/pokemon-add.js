import PokemonForm from "../components/pokemon-form";
import {Paper, Typography} from "@material-ui/core";
import style from "../styles/style";
import Pokemon from "../models/pokemon";

const PokemonAdd = () => {

    const classes = style();

    const pokemon = new Pokemon();

    return (
        <>
            <Paper className={classes.paperForm}>
                <Typography align="center" variant="h2">Add Pokemon</Typography>
                <PokemonForm pokemon={pokemon} isEditForm={false} />
            </Paper>
        </>
    );

}

export default PokemonAdd;
