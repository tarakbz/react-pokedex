import {useParams} from "react-router-dom";
import usePokemon from "../hooks/pokemon.hook";
import PokemonForm from "../components/pokemon-form";
import {LinearProgress} from "@material-ui/core";


const PokemonEdit = () => {
    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id);

    return (
        <>
            {loading ?
                (
                        <PokemonForm pokemon={pokemon}/>
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
