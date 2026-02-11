import type { ArrayOrNested, DropdownMenuItem } from "@nuxt/ui"

/* -------------- SETUP -------------- */
export const buildDropdown = computed<ArrayOrNested<DropdownMenuItem>>(() => {
  const { account } = storeToRefs(as())

  // const emit = defineEmits(["openLogIn"])
  const inGame = shallowRef<boolean>(true)
  function checkInGame() {}

  const router = useRouter()
  const routes = router.getRoutes()

  const mode = useColorMode()

  const slugRoot = computed(() => `/summoner/${account.value?.puuid}`)
  const domains = ["summoner-region-slug", "summoner-region-slug-champions"]
  const user = useSupabaseUser()

  const online = computed(() => user.value?.session_id).value

  /* -------------- ACCOUNT -------------- */
  const accountLabel: DropdownMenuItem = {
    label: String(account.value?.name) || "Summoner",
    slot: "live" as const,
    avatar: {
      size: "xs",
      src: getSummonerIcon(account.value?.icon),
    },
    ui: {
      item: "px-1",
      itemLabel: "opacity-100",
    },
  }

  /* -------------- PROFILE LINKS -------------- */
  const profileItems = domains
    .map<DropdownMenuItem | null>((d) => {
      const c = routes.find((r) => r.name === d)
      if (!c) return null
      return {
        icon: c.meta?.icon,
        label: String(c.meta?.title),
        ui: {
          itemLeadingIcon:
            c.meta?.title === "Champions" ?
              "scale-140"
            : "scale-110 **:stroke-[2.2]",
        },
        to: `${slugRoot.value}/${c.meta?.slug}`,
        content: { sideOffset: -8 },
      }
    })
    .filter((item): item is DropdownMenuItem => Boolean(item))

  const inbox: DropdownMenuItem = {
    icon: "i-mail",
    label: "Inbox",
    ui: { itemLeadingIcon: "**:stroke-[2.1]" },
  }

  /* -------------- SUPPORT -------------- */
  const support: DropdownMenuItem = {
    icon: "i-prime-question-circle",
    label: "Support",
    children: [
      {
        label: "Help & Support",
        class: "dropdown-label-class",
      },
      { type: "separator" },
      ...(routes.find((r) => r.path === "/support")?.children ?? [])
        .map<DropdownMenuItem | null>((r) => ({
          icon: r.meta?.icon,
          label: String(r.meta?.title),
          to: r.path,
        }))
        .filter((item): item is DropdownMenuItem => Boolean(item)),
    ],
    ui: {
      itemLeadingIcon: "scale-128 **:stroke-[2.2]",
    },
  }

  const resources: DropdownMenuItem = {
    icon: "i-i",
    label: "Resources",
    children: [
      {
        label: "Official",
        class: "dropdown-label-class",
      },
      { type: "separator" },
      ...officialResources,
      {
        label: "External",
        class: "dropdown-label-class",
      },
      { type: "separator" },
      ...externalResources,
    ],
    ui: {
      itemLeadingAvatar: "rounded-sm",
      itemLeadingIcon: "scale-130",
    },
  }

  /* -------------- COLOR MODE -------------- */
  const colorMode: DropdownMenuItem = {
    children: [
      {
        label: "Theme",
        class: "dropdown-label-class",
      },
      { type: "separator" },
      ...colorModes
        .map<DropdownMenuItem | null>((t) => ({
          checked: mode.value === t,
          icon: `i-${t}`,
          label: t,
          /*           onSelect(e: Event) {
            e.preventDefault()
            mode.preference = t
          },
          onUpdateChecked(checked: boolean) {
            mode.preference = t
          }, */
          slot: "theme" as const,
          ui: {
            item: `${t}`,
            itemLabel: "capitalize ",
            itemLeadingIcon: colorModeIconClass[t],
            itemTrailing:
              t !== mode.value ?
                "size-4 bg-p0 rounded-full ring ring-pc/60 dst"
              : "",
            itemTrailingIcon:
              "size-4 bg-p0 text-pc **:text-pc/60 rounded-full dst ring ring-pc",
          },
        }))
        .filter((item): item is DropdownMenuItem => Boolean(item)),
    ],
    icon: "ui:none",
    label: "Theme",
    slot: "colormode" as const,
    ui: {
      itemLabel: "justify-between items-center flex",
    },
  }

  const settings: DropdownMenuItem = {
    icon: "i-gear",
    content: { sideOffset: -8 },
    to: "/settings",
    label: "Settings",
    ui: {
      itemLeadingIcon: "**:stroke-[2.2] scale-98",
    },
  }
  /* -------------- LOG OUT -------------- */
  const logOut: DropdownMenuItem = {
    icon: online ? "i-lucide-log-out" : "i-lucide-log-in",
    label: online ? "Log out" : "Log in ",
    kbds: online ? ["shift", "meta", "q"] : ["shift", "meta", "s"],
    ui: {
      itemLeadingIcon: "**:stroke-[2.2] scale-90",
    },
    /*  onSelect(e: Event) {
        e.preventDefault()
        online ? useSignOut() : emit("openLogIn")
      }, */
  }
  /*  {
      label: "open sign in anyway",
      onSelect(e: Event) {
        emit("openLogIn")
      },
    }, */

  const a: ArrayOrNested<DropdownMenuItem> = []
  const b = [
    accountLabel.value,
    inbox,
    profileItems,
    support,
    resources,
    colorMode,
    settings,
    logOut,
  ]

  b.forEach((item) => {
    if (item) a.push([item])
  })
  return a
})
