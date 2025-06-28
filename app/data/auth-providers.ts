import { Discord, EmailTrigger, Google, Riot } from "#components"

export const providers = [
  {
    name: "Riot",
    icon: {
      name: "riot",
    },
    component: Riot,
  },
  {
    name: "Discord",
    icon: {
      name: "discord",
    },
    component: Discord,
  },
  {
    name: "Google",
    icon: {
      name: "devicon:google",
    },
    component: Google,
  },
  {
    name: "Email",
    icon: {
      name: "at",
    },
    component: EmailTrigger,
  },
]
