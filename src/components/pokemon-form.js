import {Chip, TextField} from "@material-ui/core";

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
            {types.map((type) => {
                return (
                    <Chip key={type} style={{backgroundColor: formatType(type)}}
                          label={type}
                    />
                );
            })}
        </form>
    );
}

export default PokemonForm;
