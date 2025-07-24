import { AnalyticsMenu, BackpackMenu, LibraryMenu } from '#components'

function getAccountName() {
  const as = useAccountStore()
  if (!as?.userAccount?.riot?.name)
    return null

  return as.userAccount.riot.name
}

export const navLinks: LinkGroup = [
  {
    name: 'Nexus',
    link: '/nexus',
  },
  {
    name: 'Library',
    links: libraryLinks,
    component: LibraryMenu,
  },
  {
    name: 'Summoners',
    link: '/summoner',
  },
  {
    name: 'Calculator',
    link: '/calculator',
  },
]

export const userLinks = [
  {
    // icon: "cil:briefcase",
    name: 'backpack',
    icon: {
      name: 'i-lol-backpack',
      class: 'size-6 opacity-70',
    },
    links: backpackLinks,
    component: BackpackMenu,
  },
  {
    name: 'analytics',
    icon: {
      name: 'ri:bar-chart-fill',
      class: 'size-5.75 scale-x-112 opacity-80',
    },
    links: analyticsLinks,
    component: AnalyticsMenu,
  },
]
