import type { Provider } from '@supabase/supabase-js'

const user = useSupabaseUser()
const providerMap = computed(() => user.value?.app_metadata?.providers ?? null)
export const authProviders: Provider[] = ['riot' as Provider, 'google', 'discord']
export const providers = [
  {
    name: 'riot',
    icon: 'riot',
    class: '*:!size-5.25 *:-ml-px *:!text-white bg-neutral/90',
  },
  {
    name: 'discord',
    icon: 'discord',
    class: ' *:!text-white  bg-[#747abf]',

  },
  {
    name: 'google',
    icon: 'devicon:google',

    class: '',
  },
]
