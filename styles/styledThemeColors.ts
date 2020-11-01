type StyledTheme = typeof styled;
export type Theme = {
  [k in keyof StyledTheme]: string;
};

export const secondary = '#00a3be';
export const secondaryHover = '#0fb4d2';
export const secondaryActive = '#0a7083';
export const secondaryColorLight = '#01b6d6';
export const secondaryColorDark = '#02ccf1';
export const secondaryColorActive = '#13a9c3';
export const secondaryColorDarkActive = '#34d4ee';
export const secondaryColorHover = secondaryColorDark;
export const secondaryColorDarkHover = secondaryColorLight;
export const black = '#161616';
export const white = '#eaeaea';
export const gray = '#3f3f3f';

const styled = {
  secondary,
  secondaryHover,
  secondaryActive,
  border: white,
  color: white,
  logo: white,
};

export const styledDark: Theme = {
  ...styled,
  secondary: secondaryColorDark,
  secondaryHover: secondaryColorDarkHover,
  secondaryActive: secondaryColorDarkActive,
};

export const styledLight: Theme = {
  ...styled,
  secondary: secondaryColorLight,
  secondaryHover: secondaryColorHover,
  secondaryActive: secondaryColorActive,
};
