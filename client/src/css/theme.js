import {
    createMuiTheme
} from "@material-ui/core/styles";
export default createMuiTheme({
    palette: {
        primary: {
            main: "#546e7a",
            light: "#ffc855",
            dark: "#a96900",
            contrastText: "#fff",
        },
        secondary: {
            main: "#00838f",
            light: "#663a2b",
            dark: "#2BA84A",
        },
        error: {
            main: "#ff0000",
        }
    },
});