import {Chip, Paper} from "@material-ui/core";
import {useState} from "react";
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";

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
                <small> {formatDate(pokemon.created)}</small>
                <br/>
                {
                    pokemon.types.map(type => (
                        <Chip label={type} style={{marginRight: 5, backgroundColor: formatType(type), color: "white"}}/>
                    ))
                }
            </p>
        </Paper>
    );
}
