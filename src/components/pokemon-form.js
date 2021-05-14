import {Checkbox, Chip, FormControlLabel, FormGroup, TextField} from "@material-ui/core";

import formatType from "../helpers/format-type";


const PokemonForm = ({pokemon}) => {

    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    return (
        <form>
            <img src={pokemon.picture} alt=""/>
            <TextField
                label="Name"
                defaultValue={pokemon.name}
            />
            <FormGroup>
                {types.map((type) => {
                    return (
                        <FormControlLabel
                            key={type}
                            control={<Checkbox/>}
                            label={<Chip key={type} style={{color: "white", backgroundColor: formatType(type)}}
                                         label={type}
                            />}
                        />
                    );
                })}
            </FormGroup>
        </form>
    );
}

export default PokemonForm;
