export const ui = {
  light: {
    "base-100": "oklch( 100% 0 0)",
    "base-200": "oklch( 93% 0 0)",
    "base-300": "oklch( 86% 0 0)",
    "base-content": "oklch( 22.3899% 0.031305 278.07229)",
    neutral: "oklch( 22.3899% 0.031305 278.07229)",
    "neutral-content": "oklch( 95.8796% 0.008588 247.915135)",
  },
  dark: {
    "base-100": "oklch( 24.3535% 0 0)",
    "base-200": "oklch( 22.6487% 0 0)",
    "base-300": "oklch( 20.944% 0 0)",
    "base-content": "oklch( 84.8707% 0 0)",
    neutral: "oklch( 27.441% 0.01325 253.041249)",
    "neutral-content": "oklch( 85.4882% 0.00265 253.041249)",
  },
  dim: {
    "base-100": "oklch( 30.8577% 0.023243 264.149498)",
    "base-200": "oklch( 28.0368% 0.01983 264.182074)",
    "base-300": "oklch( 26.3469% 0.018403 262.177739)",
    "base-content": "oklch( 82.9011% 0.031335 222.959324)",
    neutral: "oklch( 24.7311% 0.020483 264.094728)",
    "neutral-content": "oklch( 82.9011% 0.031335 222.959324)",
  },
};

export interface palettes { 
  name: string, 
  colors: {
    primary: colors,
    secondary: colors,
    accent:colors,
    info: colors,
    success: colors,
    warning: colors,
    error: colors,
  }
}

export interface colors {
  primary: string,
  secondary: string,
  accent:string,
  info: string,
  success: string,
  warning: string,
  error: string,
}
export const colors = {
  aesthetic: {
    primary: "oklch(88.03% 0.046 187.85)",
    secondary: "oklch(82.91% 0.09 37.7)",
    accent: "oklch(91.18% 0.089 87.56)",
    info: "oklch(91.19% 0.07 104.16)",
    success: "oklch(87.28% 0.051 133.44)",
    warning: "oklch(86.95% 0.081 62.79)",
    error: "oklch(79.62% 0.109 21.85)",
  },
};