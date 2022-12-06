import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      /** BREAKPOINTS FOR PLAYLIST GRID **/
      pxxl: 2200
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#190233",
      drawer: "#11022e",
      border: "#36224d",
    },
    primary: {
      main: "#cd5dde",
    },
    secondary: {
      main: "#19c0e7",
    },
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
