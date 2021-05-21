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
import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
import {useState} from "react";
import {useHistory} from "react-router-dom";
import PokemonService from "../services/pokemon-service";

const PokemonForm = ({pokemon, isEditForm}) => {
    const classes = style();

    const [form, setForm] = useState({
        picture: {value: pokemon.picture, isValid: true},
        name: {value: pokemon.name, isValid: true},
        hp: {value: pokemon.hp, isValid: true},
        cp: {value: pokemon.cp, isValid: true},
        types: {value: pokemon.types, isValid: true},
    });

    const history = useHistory();

    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];

    const isAddForm = () => {
        return !isEditForm;
    }

    const hasType = (type) => {
        return form.types.value.includes(type);
    }

    const handleInputChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const newField = {[fieldName]: {value: fieldValue, isValid: true}};
        setForm({...form, ...newField});
    }

    const selectType = (type, e) => {
        const checked = e.target.checked;
        let newField;
        if (checked) {
            const newTypes = form.types.value.concat([type]);
            newField = {value: newTypes};
        } else {
            const newTypes = form.types.value.filter((currentType) => currentType !== type);
            newField = {value: newTypes};
        }
        setForm({...form, ...{types: newField}});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (isFormValid) {
            pokemon.picture = form.picture.value;
            pokemon.name = form.name.value;
            pokemon.hp = form.hp.value;
            pokemon.cp = form.cp.value;
            pokemon.types = form.types.value;
            isEditForm ? updatePokemon() : addPokemon();
        }
    }

    const addPokemon = () => {
        PokemonService.addPokemon(pokemon).then(() => {
            history.push(`/`)
        });
    }

    const updatePokemon = () => {
        PokemonService.updatePokemon(pokemon).then(() => {
            history.push(`/pokemons/${pokemon.id}`)
        });
    }

    const handleCancel = () => {
        history.push(`/pokemons/${pokemon.id}`)
    }

    const handleDelete = e => {
        e.preventDefault();
        PokemonService.deletePokemon(pokemon).then(() => {
            history.push(`/`)
        });
    }

    const validateForm = () => {
        let newForm = form;

        // Validate picture
        if (isAddForm()) {
            const start = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
            const end = ".png";
            if (!form.picture.value.startsWith(start) || !(form.picture.value.endsWith(end))) {
                const errorMsg = "Url of picture not valid.";
                const newField = {value: form.picture.value, error: errorMsg, isValid: false};
                newForm = {...newForm, ...{picture: newField}}
            } else {
                const newField = {value: form.picture.value, error: "", isValid: true};
                newForm = {...newForm, ...{picture: newField}}
            }
        }

        // Validator name
        if (!/^[a-zA-Z]{3,25}$/.test(form.name.value)) {
            const errorMsg = "The name is required (3-25) and without number or special character.";
            const newField = {value: form.name.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{name: newField}}
        } else {
            const newField = {value: form.name.value, error: "", isValid: true};
            newForm = {...newForm, ...{name: newField}}
        }

        // Validator hp
        if (!/^[0-9]{1,2}$/.test(form.hp.value)) {
            const errorMsg = "The hp must be between 0 and 99.";
            const newField = {value: form.hp.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{hp: newField}}
        } else {
            const newField = {value: form.hp.value, error: "", isValid: true};
            newForm = {...newForm, ...{hp: newField}}
        }

        // Validator cp
        if (!/^[0-9]{1,2}$/.test(form.cp.value)) {
            const errorMsg = "The cp must be between 0 and 99.";
            const newField = {value: form.cp.value, error: errorMsg, isValid: false};
            newForm = {...newForm, ...{cp: newField}}
        } else {
            const newField = {value: form.cp.value, error: "", isValid: true};
            newForm = {...newForm, ...{cp: newField}}
        }

        setForm(newForm);
        return newForm.picture.isValid && newForm.name.isValid && newForm.hp.isValid && newForm.cp.isValid;
    }

    const isTypesValid = (type) => {
        // si le user selectionne une case sinon il peut choisir d'avoir aucun type
        // en gros , il faut au moins un type valide
        if (form.types.value.length === 1 && hasType(type)) {
            return false;
        }

        // si le user selectionne 3 case , il faut l'empecher de selectionner d'autre case
        // il peut deselectionne les case grace a hasType
        // voir les case a cocher pour comprendre
        if (form.types.value.length >= 3 && !hasType(type)) {
            return false;
        }

        return true;
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={classes.form}
            noValidate
        >
            <Grid container direction="column" spacing={4}>
                {isEditForm ?
                    <Grid item style={{textAlign: "center"}}>
                        <img src={pokemon.picture} alt=""/>
                    </Grid>
                    :
                    <Grid item>
                        <TextField
                            fullWidth
                            label="Picture"
                            name="picture"
                            value={form.picture.value}
                            onChange={e => handleInputChange(e)}
                            required
                            error={!form.picture.isValid}
                            helperText={form.picture.isValid ? "Ex : https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png" : form.picture.error}
                        />
                    </Grid>
                }
                <Grid item>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name.value}
                        onChange={e => handleInputChange(e)}
                        required
                        error={!form.name.isValid}
                        helperText={form.name.error}
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
                        required
                        error={!form.hp.isValid}
                        helperText={form.hp.error}
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
                        required
                        error={!form.cp.isValid}
                        helperText={form.cp.error}
                    />
                </Grid>
                <Grid item>
                    <FormGroup row>
                        {types.map((type) => {
                            return (
                                <FormControlLabel
                                    key={type}
                                    control={<Checkbox
                                        value={type}
                                        checked={hasType(type)}
                                        onChange={e => selectType(type, e)}
                                        disabled={!isTypesValid(type)}
                                    />}
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
                    <Grid container justify="space-between"
                    >
                        <Grid item>
                            <ButtonGroup variant="contained">
                                <Button
                                    color="primary"
                                    startIcon={<SaveIcon/>}
                                    type="submit"
                                >
                                    Save
                                </Button>
                                <Button
                                    startIcon={<CancelIcon/>}
                                    onClick={() => handleCancel()}
                                >
                                    Cancel
                                </Button>
                            </ButtonGroup>
                        </Grid>
                        {isEditForm &&
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon/>}
                                onClick={(e) => handleDelete(e)}
                            >
                                Delete
                            </Button>
                        </Grid>
                        }
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
}

export default PokemonForm;
