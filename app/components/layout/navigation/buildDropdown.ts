import type { ArrayOrNested, DropdownMenuItem } from "@nuxt/ui"
import {
  externalResources,
  officialResources,
} from "~/domain/lp/external/externalResources"
import { getSummonerIcon } from "~/domain/utils/img"

/* -------------- SETUP -------------- */
export const buildDropdown = computed<ArrayOrNested<DropdownMenuItem>>(() => {
  const { account } = storeToRefs(user())

  // const emit = defineEmits(["openLogIn"])
  const inGame = shallowRef<boolean>(true)
  function checkInGame() {}

  const router = useRouter()
  const routes = router.getRoutes()

  const mode = useColorMode()

  const slugRoot = computed(() => `/summoner/${account.value?.puuid}`)
  const sbu = useSupabaseUser()

  const online = computed(() => sbu.value?.session_id).value

  /* -------------- ACCOUNT -------------- */
  const accountLabel: DropdownMenuItem = {
    label: account.value?.name ?? account.value?.username ?? "Not Connected",
    slot: "user" as const,
    avatar: {
      size: "xs",
      src: getSummonerIcon(account.value?.icon) ?? null,
      icon: "i-plug",
    },
    ui: {
      item: "px-1",
      itemLabel: "opacity-100",
    },
  }

  /* -------------- PROFILE LINKS -------------- */
  const history: DropdownMenuItem = {
    icon: "i-history",
    label: "Match History",
    ui: {
      itemLeadingIcon: "scale-105 **:stroke-[2.2]",
    },
    to: `${slugRoot.value}`,
  }

  const champions: DropdownMenuItem = {
    icon: "i-lol-champ",
    ui: {
      itemLeadingIcon: "scale-100",
    },
    label: "Champions",
    to: `${slugRoot.value}/champions`,
  }

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
  const modes = colorModes
    .map<DropdownMenuItem | null>((t) => ({
      checked: mode.preference === t,
      icon: `i-${t}`,
      type: "checkbox",
      label: t,
      onUpdateChecked(checked: boolean) {
        mode.preference = t
      },
      ui: {
        item: `${t === "system" ? mode.value : t} btn group/mode  btn-2xl h-16 bg-p0 text-pc relative py-3 **:text-pc noise pl-3`,
        itemLabel: "capitalize self-start ",
        itemLeadingIcon: cn(colorModeIconClass[t], "self-start"),
        itemTrailing:
          t !== mode.value
            ? "size-4 bg-p2 self-end rounded-full absolute bottom-2 right-3 ring ring-p3 dst"
            : "",
        itemTrailingIcon:
          "size-4 bg-p2 text-pc  absolute bottom-0 right-3  **:text-pc/60 rounded-full ds-2xs ring ring-pc",
      },
    }))
    .filter((item): item is DropdownMenuItem => Boolean(item))

  const colorMode: DropdownMenuItem = {
    children: [
      {
        label: "Theme",
        class: "dropdown-label-class col-span-2",
      },
      ...modes,
    ],
    icon: "ui:none",
    label: "Theme",
    slot: "colormode" as const,
    ui: {
      content:
        "*:*:grid! *:*:grid-cols-2 *:*:grid-rows-[0.5fr_repeat(2,1fr)] *:*:gap-2",
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

  const accountLinks = [history, champions].filter(
    (item): item is DropdownMenuItem => Boolean(item)
  )

  return [
    [accountLabel],
    accountLinks,
    [inbox],
    [support, resources],
    [colorMode],
    [settings],
    [logOut],
  ]
})
