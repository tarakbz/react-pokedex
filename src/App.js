import './App.css';
import {useState} from "react";
import Pokemon from "./models/pokemon"
import POKEMONS from "./models/mock-pokemon";

function App() {

    const [pokemons] = useState(POKEMONS)

    return (
        <div>
            <h1>Pokedex</h1>
            <h3>il y a {pokemons.length} pokemons!</h3>
        </div>
    );
}

export default App;
