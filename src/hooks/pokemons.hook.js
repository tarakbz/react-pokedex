import {useEffect, useState} from "react";

const usePokemons = () => {
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
    return [pokemons, loading];
}
export default usePokemons;
