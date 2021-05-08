import './App.css';
import {AppBar, Container, CssBaseline, IconButton, Toolbar, Typography} from "@material-ui/core";
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
import PokemonEdit from "./pages/pokemon-edit-js";

function App() {
    return (
        <Router>
            <CssBaseline/>
            <Container>
                <AppBar style={{backgroundColor: "#67A2B6" , position: "relative"}}>
                    <Toolbar>
                        <IconButton component={Link} to={`/`}>
                            <HomeIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            POKEDEX
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route exact path="/">
                        <PokemonList/>
                    </Route>
                    <Route exact path="/pokemons/:id">
                        <PokemonDetails/>
                    </Route>
                    <Route exact path="/pokemons/edit/:id">
                        <PokemonEdit/>
                    </Route>
                    <Route path="*">
                        <PageNotFound/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
