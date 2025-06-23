import { AnalyticsMenu, BackpackMenu, LibraryMenu } from "#components"

const accountName = computed(() => {
  const as = useAccountStore()
  if (!as.currentSession.session || !as.userAccount.riot.name) return null

  return as.userAccount.riot.name
})

export const navLinks: LinkGroup = [
  {
    name: "Nexus",
    link: "/nexus",
  },
  {
    name: "Library",
    links: libraryLinks,
    component: LibraryMenu,
  },
  {
    name: "Summoners",
    link: "/summoner",
  },
  {
    name: "Backpack",
    links: backpackLinks,
    component: BackpackMenu,
  },
  {
    name: "Calculator",
    link: "/calculator",
  },
  {
    name: accountName.value ?? "Analysis",
    links: analyticsLinks,
    component: AnalyticsMenu,
  },
]
