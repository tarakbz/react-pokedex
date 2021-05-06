import './App.css';
import {useEffect, useState} from "react";
import Pokemon from "./models/pokemon";
import {Button, Container} from "@material-ui/core";

function App() {

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
    }, [])

    function showCountPokemon(text) {
        console.log(text)
    }

    return (
        <Container>
            <h1>Pokedex</h1>
            {loading ?
                (
                    <div>
                        <h3>il y a {pokemons.length} pokemons!</h3>
                        <ul>
                            {
                                pokemons.map(pokemon => (
                                    <li key={pokemon.id}>{pokemon.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                ) :
                (
                    <h3>chargement...</h3>
                )
            }
            <Button variant="contained" onClick={() => showCountPokemon("hello event")}>Voir le nombre de
                pokemons</Button>
        </Container>
    );
}

export default App;
