import {useParams} from "react-router-dom";
import usePokemon from "../hooks/pokemon.hook";
import PokemonForm from "../components/pokemon-form";
import {LinearProgress} from "@material-ui/core";

const PokemonEdit = ({classes}) => {
    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id);
    return (
        <>
            {loading ?
                (
                    <>
                        <h2>Edit : {pokemon.name}</h2>
                        <PokemonForm pokemon={pokemon} classes={classes}/>
                    </>
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