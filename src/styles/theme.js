import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#190233",
      drawer: "#11022e",
      border: "#2e2248",
    },
    primary: {
      main: "#f0ced4",
    },
    secondary: {
      main: "#19c0e7",
    },
    typography: {
      // logo: {
      //   fontFamily: "Comfortaa"
      // }
    },
    // text: {
    //   primary: "#f2efed"
    // }
  },
});

export default darkTheme;