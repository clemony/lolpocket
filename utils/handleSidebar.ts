const boardButton = ref(null)
const analysisButton = ref(null)
const matchHistoryButton = ref(null)
const favoritesButton = ref(null)

export const summonerLinks = [
  {
    name: `board`,
    link: '/summoner',
    icon: 'material-symbols-light:newsmode-outline',
    buttonRef: boardButton,
  },
  {
    name: 'Build Analysis',
    link: '/summoner/analysis',
    icon: 'octicon:graph-24',
    buttonRef: analysisButton,
  },
  {
    name: 'Match History',
    link: '/summoner/match-history',
    icon: 'iconoir:archery-match',
    buttonRef: matchHistoryButton,
  },
  {
    name: 'Favorites',
    link: '/summoner/favorites',
    icon: 'teenyicons:heart-outline',
    buttonRef: favoritesButton,
  },
]

const generalButton = ref(null)
const accountButton = ref(null)
const themeButton = ref(null)
export const settingLinks = [
  {
    name: 'General',
    link: '/settings',
    icon: 'ph:gear-six',
  },
  {
    name: 'Account',
    link: '/settings/account',
    icon: 'ri:user-settings-line',
  },
  {
    name: 'Theme',
    link: '/settings/themes',
    icon: 'teenyicons:paintbucket-outline',
  },

    {
        name: 'Horkeys',
        link: '/settings/hotkeys',
        icon: '',
    },
]
