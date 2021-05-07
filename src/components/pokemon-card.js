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

    return (
        <Paper elevation={elevation} onMouseLeave={setDown} onMouseEnter={setUp}>
            <img src={pokemon.picture} alt=""/>
            <p className={classes.name}>
                {pokemon.name} <br/>
                <small>
                    {
                        new Intl.DateTimeFormat(
                        ).format(new Date(pokemon.created))
                    }
                </small>
            </p>
        </Paper>
    );
}
