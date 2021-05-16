import {Grid, LinearProgress} from "@material-ui/core";
import PokemonCard from "../components/pokemon-card";

import PokemonService from "../services/pokemon-service";
import {useEffect, useState} from "react";

export default function PokemonList() {

    const [loaded, setLoaded] = useState(false)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
      PokemonService.getPokemons().then(pokemons => {
          setPokemons(pokemons)
          setLoaded(true)
      });
    }, []);

    return (
        <>
            {loaded ?
                (

                    <Grid container spacing={4}>
                        {
                            pokemons.map((pokemon) => (
                                <Grid item xs={12} sm={6} md={3} key={pokemon.id}>
                                    <PokemonCard pokemon={pokemon}/>
                                </Grid>
                            ))
                        }
                    </Grid>

                )
                :
                (
                    <LinearProgress/>
                )
            }
        </>
    );
}
