import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function PageNotFound() {
    return (
        <div style={{textAlign :  "center"}}>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page not found"/>
            <h1>Page not found !</h1>
            <Button component={Link} to="/" >
                return to pokedex
            </Button>
        </div>
    );
}
