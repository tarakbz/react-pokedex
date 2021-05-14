import {Checkbox, Chip, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography} from "@material-ui/core";
import formatType from "../helpers/format-type";
import style from "../styles/style";


const PokemonForm = ({pokemon}) => {
    const classes = style();
    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    return (
        <Paper className={classes.paperForm}>
            <Typography variant="h5">Edit : {pokemon.name}</Typography>
            <form className={classes.form} noValidate>
                <Grid container direction="column" spacing={4}>
                    <Grid item style={{textAlign: "center"}}>
                        <img src={pokemon.picture} alt=""/>
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Name"
                            defaultValue={pokemon.name}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            label="HP"
                            defaultValue={pokemon.hp}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            fullWidth
                            label="CP"
                            defaultValue={pokemon.cp}
                        />
                    </Grid>
                    <Grid item>
                        <FormGroup>
                            {types.map((type) => {
                                return (
                                    <FormControlLabel
                                        key={type}
                                        control={<Checkbox/>}
                                        label={<Chip key={type}
                                                     style={{color: "white", backgroundColor: formatType(type)}}
                                                     label={type}
                                        />}
                                    />
                                );
                            })}
                        </FormGroup>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default PokemonForm;
