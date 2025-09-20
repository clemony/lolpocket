import { analyticsLinks, backpackLinks, libraryLinks } from '#shared/appdata'

export const navLinks: LinkGroup = [
  {
    // icon: "cil:briefcase",
    name: 'Backpack',
    component: 'BackpackMenu',
    icon: {
      name: 'backpack',
      class: '**:stroke-[1.6] size-5.5',
    },
    link: '/backpack',
    links: backpackLinks,
  },
  {
    name: 'Analytics',
    component: 'AnalyticsMenu',
    icon: {
      name: 'chart',
      class: 'size-4.5 ',
    },
    links: analyticsLinks,
  },
  {
    name: 'Library',
    component: 'LibraryMenu',
    icon: {
      name: 'book',
      class: '**:stroke-[1.6] size-5.5',
    },
    links: libraryLinks,
  },
]

export const userTools: Record<string, DataObject> = {
  account: {
    name: 'Account',
    component: 'AccountContent',
  },
  settings: {
    name: 'Settings',
    component: 'SettingsContent',
  },
}
