import { AccountContent, AnalyticsMenu, BackpackMenu, InboxContent, LibraryMenu, NavContent, NotificationContent, SearchContent, SettingsContent, SummonerMenu } from '#components'
import { analyticsLinks, backpackLinks, libraryLinks } from '~/routes'

function getSummonerLink(): LinkObject | null {
  const as = useAccountStore()
  if (!as?.userAccount?.riot?.name) {
    return {
      name: 'Connect Riot ID',
      icon: {
        name: 'plug',
      },
    }
  }
  const { summoner } = useSummoner(as.userAccount.riot.puuid)

  return {
    name: `${as.userAccount.riot.name}'s Profile`,
    icon: {
      name: getSummonerIcon(summoner.value.profileIcon),
      class: 'size-6 rounded-full drop-shadow-sm shadow-sm',
    },
    link: `/summoner/${as.userAccount.riot.region}/${as.userAccount.riot.name}_${as.userAccount.riot.tag}`,
  }
}

export const navLinks: LinkGroup = [
  {
    name: 'Nexus',
    link: '/nexus',
  },
  {
    // icon: "cil:briefcase",
    name: 'Backpack',
    icon: {
      name: 'i-lol-backpack',
      class: 'size-6 opacity-70',
    },
    links: backpackLinks,
    component: BackpackMenu,
  },
  {
    name: 'Summoner',
    /*     link: '/summoner', */
    component: SummonerMenu,
    links: [
      getSummonerLink(),
    ],
  },
  {
    name: 'Analytics',
    icon: {
      name: 'ri:bar-chart-fill',
      class: 'size-5.75 scale-x-112 opacity-80',
    },
    links: analyticsLinks,
    component: AnalyticsMenu,
  },
  {
    name: 'Library',
    links: libraryLinks,
    component: LibraryMenu,
  },
]

export const userTools: Record<string, DataObject> = {
  account: {
    name: 'Account',
    component: AccountContent,
  },
  settings: {
    name: 'Settings',
    component: SettingsContent,
  },
}

export const userMenu: Record<string, DataObject> = {

  search: {
    name: 'Search',
    icon: {
      name: 'lucide:search',
    },
    component: SearchContent,
  },
  navigation: {
    name: 'Navigation',
    icon: {
      name: 'lucide:compass',
      class: '**:stroke-[1.6]',
    },
    component: NavContent,
  },
  pinned: {
    name: 'Pinned',
    icon: {
      name: 'pin',
      class: '**:stroke-[1.6] !size-5.25',
    },
    component: NavContent,
  },
  news: {
    name: 'News',
    icon: {
      name: 'lucide:newspaper',
      class: '**:stroke-[1.6] ',
    },
  },
  empty: null,
  inbox: {
    name: 'Inbox',
    icon: {
      name: 'lucide:inbox',
      class: ' **:stroke-[1.6] ',
    },
    value: 0,
    component: InboxContent,
  },
  notifications: {
    name: 'Notifications',
    icon: {
      name: 'lucide:message-square',
      class: '**:stroke-[1.7]  ',
    },
    value: 0,
    component: NotificationContent,
  }, /*
  {
    name: '',
    icon: {
      name: '',
      class: '',
    },
    component: ,
  }, */
}
