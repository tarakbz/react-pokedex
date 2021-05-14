import theme from "./theme";

const {makeStyles} = require("@material-ui/core");

const style = makeStyles(() => ({
    appBar: {
        position: "relative",
        marginTop : theme.spacing(4),
        marginBottom : theme.spacing(4)
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
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },
    }
}));

export default style;