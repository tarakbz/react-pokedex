import theme from "./theme";

const {makeStyles} = require("@material-ui/core");

const style = makeStyles(() => ({
    appBar: {
        position: "relative"
    },
    menuButton: {
        color: "white"
    },
}));

export default style;
