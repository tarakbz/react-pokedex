import {Link} from "react-router-dom";
import {Button, Paper} from "@material-ui/core";

export default function PageNotFound() {
    return (
        <Paper>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page not found"/>
            <h1>Page not found !</h1>
            <Button component={Link} to="/" >
                return to pokedex
            </Button>
        </Paper>
    );
}
