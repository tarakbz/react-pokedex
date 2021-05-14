import theme from "./theme";

const {makeStyles} = require("@material-ui/core");

const style = makeStyles(() => ({
    appBar: {
        position: "relative"
    },
    menuButton: {
        color: "white"
    },
    chips: {
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
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
