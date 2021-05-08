import './App.css';
import {AppBar, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PokemonList from "./pages/pokemon-list";
import PokemonDetails from "./pages/pokemon-detail";
import PageNotFound from "./pages/page-not-found";

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
        },
        icon: {
            marginRight: theme.spacing(2),
        },
    }));

    const classes = useStyles();

    return (
        <Router>
            <Container>
                <AppBar position="relative" style={{backgroundColor: "#67A2B6"}}>
                    <Toolbar>
                        <Link to="/" style={{color: "#fff"}}>
                            <HomeIcon className={classes.icon}/>
                        </Link>
                        <Typography variant="h6" color="inherit" noWrap>
                            POKEDEX
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/" >
                        <PokemonList classes={classes}/>
                    </Route>
                    <Route exact path="/pokemons/:id" >
                        <PokemonDetails classes={classes}/>
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
