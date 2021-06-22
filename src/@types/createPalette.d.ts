import * as createPalette from "@material-ui/core/styles/createPalette";
declare module "@material-ui/core/styles/createPalette" {
  interface Shadows {
    xssmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  }
  interface CommonColors {
    blue?: string;
    orange?: string;
  }
  interface PaletteOptions {
    gradients?: {
      primary: string;
      secondary: string;
    };
    shadows?: Shadows;
  }
}
