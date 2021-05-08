import {Chip, Paper, TextField} from "@material-ui/core";

import formatType from "../helpers/format-type";

const PokemonForm = ({pokemon, classes}) => {
    const types = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
    return (
        <form style={{textAlign: "center"}}>
            <img src={pokemon.picture} alt=""/>
            <div>
                <TextField
                    label="Name"
                    defaultValue={pokemon.name}
                />
            </div>
            <div>
                <Paper component="ul" style={{listStyle: "none"}}>
                    {types.map((type) => {
                        return (
                            <li key={type}>
                                <Chip style={{
                                    margin: 5,
                                    backgroundColor: formatType(type),
                                    color: "white",
                                    float: "left"
                                }}
                                      label={type}
                                />
                            </li>
                        );
                    })}
                </Paper>
            </div>
        </form>
    );
}

export default PokemonForm;
