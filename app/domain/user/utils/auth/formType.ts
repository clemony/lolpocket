export interface AuthLink {
  label: string
  to: string
}

export interface AuthFormType {
  autocomplete: string
  submit: {
    label?: string
  }
  swap?: AuthLink[]
}

export const formType: Record<string, AuthFormType> = {
  logIn: {
    autocomplete: "current-password",
    submit: {
      label: "Login",
    },
    swap: [
      {
        label: "Signing up?",
        to: "/sign-up",
      },
    ],
  },
  signUp: {
    autocomplete: "new-password",
    submit: {
      label: "Sign up with Email",
    },
    swap: [
      {
        label: "Signing up?",
        to: "/login",
      },
      {
        label: "Forgot Password?",
        to: "/password-reset",
      },
    ],
  },
}
