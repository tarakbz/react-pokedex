import {Grid, LinearProgress} from "@material-ui/core";
import PokemonCard from "../components/pokemon-card";
import usePokemons from "../hooks/pokemons.hook";

export default function PokemonList({classes}) {

    const [pokemons, loading] = usePokemons()

    return (
        <>
            {loading ?
                (
                    <div>
                        <h3>il y a {pokemons.length} pokemons!</h3>
                        <Grid container className={classes.root} spacing={2}>
                            {
                                pokemons.map((pokemon) => (
                                    <Grid item key={pokemon.id}>
                                        <PokemonCard pokemon={pokemon} classes={classes}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                )
                :
                (
                    <LinearProgress/>
                )
            }
        </>
    );
}
