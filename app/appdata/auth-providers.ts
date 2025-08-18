import { Discord, EmailTrigger, Google, Riot } from '#components'

const user = useSupabaseUser()
const providerMap = computed(() => user.value?.app_metadata?.providers ?? null)

export const providers = [
  {
    name: 'Riot',
    icon: {
      name: 'riot',
    },
    // model: providerMap.value.includes(),
    component: Riot,
    class: '',
  },
  {
    name: 'Discord',
    icon: {
      name: 'logos:discord-icon',
      class: 'size-8',
    },
    model: providerMap.value?.includes('discord'),
    component: Discord,
    class: '',
  },
  {
    name: 'Google',
    icon: {
      name: 'devicon:google',
    },
    model: providerMap.value?.includes('google'),
    component: Google,
    class: '',
  },
  {
    name: 'Email',
    icon: {
      name: 'at',
    },
    model: user.value?.email != null,
    id: user.value?.email,
    component: EmailTrigger,
    class: '',
  },
]
