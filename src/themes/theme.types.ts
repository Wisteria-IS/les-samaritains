// Theme type definitions - All visual properties are configurable

export interface ColorPalette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryDark: string;
  accent: string;
  background: string;
  backgroundAlt: string;
  surface: string;
  text: string;
  textMuted: string;
  textInverse: string;
  border: string;
  error: string;
  success: string;
  warning: string;
}

export interface Typography {
  fontHeading: string;
  fontBody: string;
  fontAccent?: string;
  scale: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  weight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
  };
}

export interface Spacing {
  unit: number;
  section: {
    sm: string;
    md: string;
    lg: string;
  };
  container: string;
  gap: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface Radius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface Shadows {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  inner: string;
  colored: string;
}

export interface AnimationConfig {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    default: number[];
    bounce: number[];
    smooth: number[];
  };
}

export interface ButtonVariant {
  bg: string;
  bgHover: string;
  text: string;
  border?: string;
  shadow?: string;
}

export interface ButtonConfig {
  primary: ButtonVariant;
  secondary: ButtonVariant;
  outline: ButtonVariant;
  ghost: ButtonVariant;
  radius: string;
}

export interface CardConfig {
  bg: string;
  border: string;
  radius: string;
  shadow: string;
  hoverShadow: string;
  hoverTransform: string;
}

export interface InputConfig {
  bg: string;
  border: string;
  borderFocus: string;
  radius: string;
  text: string;
  placeholder: string;
}

export interface HeaderConfig {
  style: 'floating' | 'solid' | 'transparent';
  bg: string;
  blur: boolean;
  border?: string;
}

export interface HeroConfig {
  style: 'split' | 'fullwidth' | 'centered' | 'minimal';
  overlay?: string;
  alignment: 'left' | 'center' | 'right';
}

export interface FooterConfig {
  bg: string;
  text: string;
  border?: string;
}

export interface ComponentStyles {
  button: ButtonConfig;
  card: CardConfig;
  input: InputConfig;
  header: HeaderConfig;
  hero: HeroConfig;
  footer: FooterConfig;
}

export interface Theme {
  name: string;
  displayName: string;
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  radius: Radius;
  shadows: Shadows;
  animations: AnimationConfig;
  components: ComponentStyles;
}
