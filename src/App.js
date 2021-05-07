import './App.css';
import {Container, makeStyles} from "@material-ui/core";
import PokemonList from "./components/pokemon-list";

function App() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
        name: {
            textAlign: "center",
            padding: theme.spacing(2),
        }
    }));

    const classes = useStyles();

    return (
        <Container>
            <h1>Pokedex</h1>
            <PokemonList classes={classes}/>
        </Container>
    );
}

export default App;
