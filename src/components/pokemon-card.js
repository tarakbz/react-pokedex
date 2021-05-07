import {Paper} from "@material-ui/core";
import {useState} from "react";

export default function PokemonCard({pokemon, classes}) {

    const [elevation, setElevation] = useState(1)

    const setUp = () => {
        setElevation(6)
    }

    const setDown = () => {
        setElevation(1)
    }
    const formatDate = (date) => {
        return new Intl.DateTimeFormat().format(new Date(date));
        // on peut aussi faire
        // const dateObject = new Date(date);
        // return `${dateObject.getDate()}-${dateObject.getMonth() + 1 }-${dateObject.getFullYear()}`
    }
    return (
        <Paper elevation={elevation} onMouseLeave={setDown} onMouseEnter={setUp}>
            <img src={pokemon.picture} alt=""/>
            <p className={classes.name}>
                {pokemon.name} <br/>
                <small> {formatDate(pokemon.created)}</small>
            </p>
        </Paper>
    );
}
