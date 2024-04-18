export interface ITheme {
  colors: {
    brand: {
      primary: string;
      secondary: string;
      muted: string;
    };
    ui: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
      disabled: string;
      error: string;
      success: string;
    };
    bg: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
      error: string;
      success: string;
    };
  };
  fonts: {
    body: string;
    heading: string;
    monospace: string;
  };
  fontWeights: {
    regular: number;
    medium: number;
    bold: number;
  };
  fontSizes: {
    caption: string;
    button: string;
    body: string;
    title: string;
    h5: string;
    h4: string;
    h3: string;
    h2: string;
    h1: string;
  };
  sizes: string[];
  lineHeights: {
    title: string;
    copy: string;
  };
  space: string[];
}
