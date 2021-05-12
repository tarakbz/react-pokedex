import './App.css';
import {AppBar, Container, CssBaseline, IconButton, Toolbar, Typography} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {ThemeProvider} from '@material-ui/core/styles';

import PokemonList from "./pages/pokemon-list";
import PokemonDetails from "./pages/pokemon-detail";
import PageNotFound from "./pages/page-not-found";
import PokemonEdit from "./pages/pokemon-edit-js";
import theme from "./styles/theme";
import style from "./styles/style";

function App() {

    const classes = style();

    return (
        <Router>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Container>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton  className={classes.menuButton}  edge="start" aria-label="menu">
                                <HomeIcon />
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
            </ThemeProvider>
        </Router>
    );
}

export default App;
