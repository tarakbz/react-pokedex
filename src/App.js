import './App.css';
import {useEffect, useState} from "react";
import Pokemon from "./models/pokemon";
import {Button, Container, Grid, makeStyles, Paper} from "@material-ui/core";

function App() {

    const [pokemons, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false)
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
        name : {
            textAlign : "center",
            padding : 20,
        }
    }));
    useEffect(() => {
        fetch('https://limitless-reef-40594.herokuapp.com/api/pokemons')
            .then(
                response => {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }
                    // Examine the text in the response
                    response.json().then(function (data) {
                        setPokemon(data.data);
                        setLoading(true);
                    });
                })
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            })
    }, []);

    const classes = useStyles();

    function showCountPokemon(text) {
        console.log(text)
    }

    return (
        <Container>
            <h1>Pokedex</h1>
            {loading ?
                (
                    <div>
                        <h3>il y a {pokemons.length} pokemons!</h3>
                        <Grid container className={classes.root} spacing={2}>
                            {
                                pokemons.map(({id, name, picture , created}) => (
                                    <Grid item key={id}>
                                        <Paper>
                                            <img src={picture} alt=""/>
                                            <p className={classes.name}>
                                                {name} <br/>
                                                <small>
                                                    {
                                                        new Intl.DateTimeFormat(
                                                        ).format(new Date(created))
                                                    }
                                                </small>
                                            </p>
                                        </Paper>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </div>
                ) :
                (
                    <h3>chargement...</h3>
                )
            }
            <Button variant="contained" onClick={() => showCountPokemon("hello event")}>Voir le nombre de
                pokemons</Button>
        </Container>
    );
}

export default App;
