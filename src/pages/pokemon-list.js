import {Grid, LinearProgress, Typography} from "@material-ui/core";
import PokemonCard from "../components/pokemon-card";
import usePokemons from "../hooks/pokemons.hook";

export default function PokemonList() {

    const [pokemons, loading] = usePokemons()

    return (
        <>
            {loading ?
                (
                    <>
                        <Typography variant={"h4"}>il y a {pokemons.length} pokemons!</Typography>
                        <Grid container spacing={4}>
                            {
                                pokemons.map((pokemon) => (
                                    <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
                                        <PokemonCard pokemon={pokemon}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
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
