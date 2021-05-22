import {useState} from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Link} from "react-router-dom";

import PokemonService from "../services/pokemon-service";
import style from "../styles/style";
import {Paper} from "@material-ui/core";


const PokemonSearch = () => {
    const classes = style();

    const [term, setTerm] = useState('');
    const [pokemons, setPokemons] = useState([])

    function handleInputChange(e) {
        const term = e.target.value;
        setTerm(term);
        if (term.length <= 1) {
            setPokemons([]);
            return
        }
        PokemonService.searchPokemons(term).then(pokemons => setPokemons(pokemons));
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <Autocomplete
                freeSolo
                debug
                disableClearable
                options={pokemons}
                getOptionLabel={(pokemon) => pokemon.name}
                renderOption={(pokemon) =>
                    <Paper component={Link} className={classes.autocompleteItem} to={`/pokemons/${pokemon.id}`}>
                        <img className={classes.autocompleteImage} src={pokemon.picture} alt=""/>
                        {pokemon.name}
                    </Paper>
                }
                renderInput={(params) => (
                    <div ref={params.InputProps.ref}>
                        <InputBase
                            placeholder="Search..."
                            {...params.inputProps}
                            classes={{
                                root: classes.inputSearchRoot,
                                input: classes.inputSearchInput,
                            }}
                            value={term}
                            onChange={e => handleInputChange(e)}
                        />
                    </div>
                )}
            />
        </div>
    );
}

export default PokemonSearch;
