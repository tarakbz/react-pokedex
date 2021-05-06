import './App.css';
import {useEffect, useState} from "react";
import Pokemon from "./models/pokemon"
import POKEMONS from "./models/mock-pokemon";

function App() {

    const [pokemons, setPokemon] = useState([]);

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
                        setPokemon(data.data)
                    });
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            })
    }, [])

    return (
        <div>
            <h1>Pokedex</h1>
            <h3>il y a {pokemons.length} pokemons!</h3>
        </div>
    );
}

export default App;
