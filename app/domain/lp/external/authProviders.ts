export type Provider = "google" | "discord"
export type LpProvider = Provider | "riot"

export const authProviders: Provider[] = [
  "riot" as Provider,
  "google",
  "discord",
]

export interface ProviderType {
  label: Provider
  class: string
  icon: string
}
export const providers: ProviderType[] = [
  {
    label: "riot" as Provider,
    class: "*:!size-5.25 *:-ml-px *:!text-white !bg-neutral/90",
    icon: "i-riot",
  },
  {
    label: "discord",
    class: " *:!text-white  bg-[#747abf]",
    icon: "i-discord",
  },
  {
    label: "google",
    class: "",
    icon: "i-google",
  },
]
