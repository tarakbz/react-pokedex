/**
 *
 */
export default class PokemonService {

    static url = "https://limitless-reef-40594.herokuapp.com/api/pokemons/"

    static getPokemons() {
        return fetch(this.url)
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static searchPokemons(term) {
        return fetch(`${this.url}?name=${term}`)
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static getPokemon(id) {
        return fetch(`${this.url}${id}`)
            .then(response => {
                if (response.status !== 200) {
                    return null;
                }
                return response.json()
                    .then(json => json.data)
            })
            .catch(error => this.handleError(error));
    }

    static addPokemon(pokemon) {
        return fetch(`${this.url}`,
            {
                method: 'POST',
                body: JSON.stringify(pokemon),
                headers: {'Content-Type': 'application/json'}
            }
        )
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static updatePokemon(pokemon) {
        return fetch(`${this.url}${pokemon.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(pokemon),
                headers: {'Content-Type': 'application/json'}
            }
        )
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static deletePokemon(pokemon) {
        return fetch(`${this.url}${pokemon.id}`,
            {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }
        )
            .then(response => response.json())
            .then(json => json.data)
            .catch(error => this.handleError(error));
    }

    static handleError(error) {
        console.error(error);
    }

}
