import {Avatar, Card, CardContent, CardHeader, CardMedia, Chip} from "@material-ui/core";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import style from "../styles/style";

export default function PokemonCard({pokemon}) {

    const classes = style();

    const [elevation, setElevation] = useState(1)
    const history = useHistory();

    const setUp = () => {
        setElevation(24)
    }

    const setDown = () => {
        setElevation(1)
    }

    const goToPokemon = (id) => {
        history.push(`/pokemons/${id}`)
    }
    return (
        <Card elevation={elevation} onClick={() => goToPokemon(pokemon.id)} onMouseLeave={setDown}
              onMouseEnter={setUp}>
            <CardHeader
                avatar={
                    <Avatar>
                        {pokemon.name.charAt(0)}
                    </Avatar>
                }
                title={pokemon.name}
                subheader={"Created: " + formatDate(pokemon.created)}
            />
            <CardMedia style={{height: 0, paddingTop: '100%'}}
                       image={pokemon.picture}
                       title={pokemon.name}
            />
            <CardContent className={classes.chips}>
                {
                    pokemon.types.map((type, index) => (
                        <Chip key={index} label={type}
                              style={{backgroundColor: formatType(type)}}/>
                    ))
                }
            </CardContent>

        </Card>
    );
}
