// import original module declarations
import 'styled-components';

// and extend DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    dark: {
      primary: string;
      border: string;
      color: string;
    };
    light: {
      primary: string;
      border: string;
      color: string;
    };
  }
}
