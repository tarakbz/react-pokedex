/**
 *
 */
export default class PokemonService {


    static getPokemons() {
        return fetch('https://limitless-reef-40594.herokuapp.com/api/pokemons')
            .then(response => response.json())
            .then(json => json.data)
    }

    static getPokemon(id) {
        return fetch(`https://limitless-reef-40594.herokuapp.com/api/pokemons/${id}`)
            .then(response => response.json())
            .then(json => json.data)
    }

}
