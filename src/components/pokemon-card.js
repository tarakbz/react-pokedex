import {Chip, Paper} from "@material-ui/core";
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
    const formatType = (type) => {
        let color;
        switch (type) {
            case 'Feu':
                color = '#F47D56';
                break;
            case 'Eau':
                color = '#67A2B6';
                break;
            case 'Plante':
                color = 'green';
                break;
            case 'Insecte':
                color = '#8BC979';
                break;
            case 'Normal':
                color = 'grey';
                break;
            case 'Vol':
                color = '#669DAF';
                break;
            case 'Poison':
                color = '#89607F';
                break;
            case 'Fée':
                color = 'pink';
                break;
            case 'Psy':
                color = 'purple';
                break;
            case 'Electrik':
                color = 'lime';
                break;
            case 'Combat':
                color = 'orange';
                break;
            default:
                color = 'grey';
                break;
        }
        return color;
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
                        <Chip  label={type} style={{marginRight: 5 , backgroundColor: formatType(type) , color : "white"}}/>
                    ))
                }
            </p>
        </Paper>
    );
}
