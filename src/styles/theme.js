import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#190233",
      drawer: "#11022e",
      border: "#36224d",
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
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#20083b"
        },
      }
    },
  }
});

export default darkTheme;
