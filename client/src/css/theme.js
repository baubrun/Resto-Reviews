import {
    createMuiTheme
} from "@material-ui/core/styles";



export default createMuiTheme({
    palette: {
        primary: {
            main: "#546e7a",
            light: "#1565c0",
            dark: "#c62828",
            contrastText: "#fff",
        },
        secondary: {
            main: "#00838f",
            light: "#4fb3bf",
            dark: "#Dark",
            contrastText: "#fff",
        },
        error: {
            main: "#ff0000",
        }
    },
});