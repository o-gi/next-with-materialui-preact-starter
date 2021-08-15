import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    // custom my own color palettes. if u want add another colors, plz edit types -> createPalette.d.ts
    gray: {
      dark: "#484848",
      main: "#E5E7EB",
      light: "#F9FAFB",
    },
  },
});

export default theme;
