import {
    Button, ButtonGroup,
    Checkbox,
    Chip,
    FormControlLabel,
    FormGroup,
    Grid,
    TextField
} from "@material-ui/core";
import formatType from "../helpers/format-type";
import style from "../styles/style";
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {useState} from "react";

const PokemonForm = ({pokemon}) => {
    const classes = style();

    const [form, setForm] = useState({
        name: {value: pokemon.name, isValid: true},
        hp: {value: pokemon.hp, isValid: true},
        cp: {value: pokemon.cp, isValid: true},
        types: {value: pokemon.types, isValid: true},
    });

    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];

    const hasType = (type) => {
        return form.types.value.includes(type);
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = {[fieldName]: {value: fieldValue}};
        setForm({...form, ...newField});
    }

    return (
        <form className={classes.form} noValidate>
            <Grid container direction="column" spacing={4}>
                <Grid item style={{textAlign: "center"}}>
                    <img src={pokemon.picture} alt=""/>
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name.value}
                        onChange={e => handleInputChange(e)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="HP"
                        name="hp"
                        value={form.hp.value}
                        type="number"
                        onChange={e => handleInputChange(e)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        fullWidth
                        label="CP"
                        name="cp"
                        value={form.cp.value}
                        type="number"
                        onChange={e => handleInputChange(e)}
                    />
                </Grid>
                <Grid item>
                    <FormGroup row>
                        {types.map((type) => {
                            return (
                                <FormControlLabel
                                    key={type}
                                    control={<Checkbox value={type} checked={hasType(type)}/>}
                                    label={<Chip key={type}
                                                 style={{color: "white", backgroundColor: formatType(type)}}
                                                 label={type}
                                    />}
                                />
                            );
                        })}
                    </FormGroup>
                </Grid>
                <Grid item>
                    <ButtonGroup variant="contained">
                        <Button
                            color="primary"
                            startIcon={<SaveIcon/>}
                        >
                            Save
                        </Button>
                        <Button
                            color="secondary"
                            startIcon={<CancelIcon/>}
                        >
                            Cancel
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </form>
    );
}

export default PokemonForm;
