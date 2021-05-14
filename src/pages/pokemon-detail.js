import {
    Button, ButtonGroup,
    Chip,
    LinearProgress,
    Paper, Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow
} from "@material-ui/core";
import {Link, useParams} from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import formatDate from "../helpers/format-date";
import formatType from "../helpers/format-type";
import usePokemon from "../hooks/pokemon.hook";
import style from "../styles/style";
import {ArrowBackIos} from "@material-ui/icons";

export default function PokemonDetails() {

    let {id} = useParams();
    const [pokemon, loading] = usePokemon(id);
    const classes = style();

    return (
        <>
            {loading ?
                (
                    <>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell colSpan={2} align="center">
                                            <img src={pokemon.picture} alt=""/>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>
                                            Name:
                                        </TableCell>
                                        <TableCell>
                                            {pokemon.name}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>
                                            HP:
                                        </TableCell>
                                        <TableCell>
                                            {pokemon.hp}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>
                                            CP:
                                        </TableCell>
                                        <TableCell>
                                            {pokemon.cp}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>
                                            Type:
                                        </TableCell>

                                        <TableCell className={classes.chips}>
                                            {
                                                pokemon.types.map((type, index) => (
                                                    <Chip key={index} label={type}
                                                          style={{backgroundColor: formatType(type)}}/>
                                                ))
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell>
                                            Created:
                                        </TableCell>
                                        <TableCell>
                                            {formatDate(pokemon.created)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className={classes.tableRow}>
                                        <TableCell colSpan={2}>
                                            <ButtonGroup variant="contained">
                                                <Button
                                                    color="primary"
                                                    startIcon={<ArrowBackIos/>}
                                                    component={Link} to="/">
                                                    Return to pokedex
                                                </Button>
                                                <Button
                                                    color="secondary"
                                                    startIcon={<EditIcon/>}
                                                    component={Link} to={`/pokemons/edit/${id}`}>
                                                    Edit
                                                </Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                )
                :
                (
                    <LinearProgress/>
                )
            }
        </>
    );
}
