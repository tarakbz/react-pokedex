import theme from "./theme";

import {fade, makeStyles} from '@material-ui/core/styles';

const style = makeStyles(() => ({
    appBar: {
        position: "static",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    titleMenu: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    menuButton: {
        color: "white"
    },
    chips: {
        flexWrap: 'wrap',
        '& > *': {
            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
            marginRight: theme.spacing(1),
            color: "white"
        },

    },
    tableRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    paperForm: {
        padding: theme.spacing(4)
    },
    buttonGroupBottom: {
        marginTop: theme.spacing(4)
    }
}));

export default style;
