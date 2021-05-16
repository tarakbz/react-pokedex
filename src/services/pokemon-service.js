/**
 *
 */
export default class PokemonService {

    static getPokemons() {
        return fetch('https://limitless-reef-40594.herokuapp.com/api/pokemons')
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static getPokemon(id) {
        return fetch(`https://limitless-reef-40594.herokuapp.com/api/pokemons/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                }
                return response.json()
                    .then(json => json.data)
            })
            .catch(error => this.handleError(error));

    }

    static handleError(error) {
        console.error(error);
    }

}
