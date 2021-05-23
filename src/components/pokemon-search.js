// import {useState} from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import {Link} from "react-router-dom";

// import PokemonService from "../services/pokemon-service";
import style from "../styles/style";
// import {Paper} from "@material-ui/core";


const PokemonSearch = () => {
    const classes = style();

    // const [term, setTerm] = useState('');
    // const [pokemons, setPokemons] = useState([])
    //
    // function handleInputChange(e) {
    //     const term = e.target.value;
    //     setTerm(term);
    //     if (term.length <= 1) {
    //         setPokemons([]);
    //         return
    //     }
    //     PokemonService.searchPokemons(term).then(pokemons => setPokemons(pokemons));
    // }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
    );
}

export default PokemonSearch;
