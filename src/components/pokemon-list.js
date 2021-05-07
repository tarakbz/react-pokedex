import {Grid, LinearProgress} from "@material-ui/core";
import {useEffect, useState} from "react";
import PokemonCard from "./pokemon-card";

export default function PokemonList({classes}) {

    const [pokemons, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://limitless-reef-40594.herokuapp.com/api/pokemons')
            .then(
                response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    // Examine the text in the response
                    response.json().then(function (data) {
                        setPokemon(data.data);
                        setLoading(true);
                    });
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            })
    }, []);

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
                ) :
                (
                    <LinearProgress/>
                )
            }
        </>
    );
}
