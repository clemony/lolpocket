import { AccountContent, AnalyticsMenu, BackpackMenu, InboxContent, LibraryMenu, NavContent, SearchContent, SettingsContent, SummonerMenu } from '#components'
import { analyticsLinks, backpackLinks, libraryLinks } from '~/routes'

export const navLinks: LinkGroup = [
  {
    // icon: "cil:briefcase",
    name: 'Backpack',
    link: '/backpack',
    icon: {
      name: 'backpack',
      class: '**:stroke-[1.6] size-5.5',
    },
    links: backpackLinks,
    component: BackpackMenu,
  },
  {
    name: 'Analytics',
    icon: {
      name: 'chart',
      class: 'size-4.5 ',
    },
    links: analyticsLinks,
    component: AnalyticsMenu,
  },
  {
    name: 'Library',
    links: libraryLinks,
    icon: {
      name: 'book',
      class: '**:stroke-[1.6] size-5.5',
    },
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
