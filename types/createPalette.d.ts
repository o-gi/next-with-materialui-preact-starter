import { PaletteColorOptions } from "@material-ui/core/styles/createPalette";

interface CustomPalette {
  gray: PaletteColorOptions;
}

declare module "@material-ui/core/styles/createPalette" {
  interface PaletteOptions {
    gray?: PaletteColorOptions;
  }
  interface Palette {
    gray: PaletteColor;
  }
}
