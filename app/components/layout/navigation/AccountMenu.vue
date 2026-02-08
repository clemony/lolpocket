<script lang="ts" setup>
import type {
  ArrayOrNested,
  BadgeProps,
  ButtonProps,
  ChipProps,
  DropdownMenuItem,
} from "@nuxt/ui"

const emit = defineEmits(["openLogIn"])
const inGame = shallowRef<boolean>(true)
function checkInGame() {}

/* -------------- SETUP -------------- */

const { account } = storeToRefs(as())

const router = useRouter()
const routes = router.getRoutes()

const mode = useColorMode()

const slugRoot = computed(() => `/summoner/${account.value?.puuid}`)
const domains = ["summoner-region-slug", "summoner-region-slug-champions"]
const user = useSupabaseUser()

const online = computed(() => user.value?.session_id).value
const navDropdown = computed<ArrayOrNested<DropdownMenuItem>>(() => [
  [
    /* -------------- ACCOUNT -------------- */
    {
      label: `${account.value?.name}`,
      slot: "live" as const,
      avatar: {
        size: "xs",
        src: getSummonerIcon(account.value?.icon),
      },
      ui: {
        item: "px-1",
        itemLabel: "opacity-100",
      },
    },
  ],
  [
    {
      icon: "i-mail",
      label: "Inbox",
      ui: { itemLeadingIcon: "**:stroke-[2.1]" },
    },
  ],
  /* -------------- PROFILE LINKS -------------- */

  domains.map((d) => {
    const c = routes.find((r) => r.name === d)
    if (!c) return null
    return {
      icon: c.meta?.icon,
      label: c.meta?.title,
      ui: {
        leadingIcon:
          c.meta?.title === "Champions" ?
            "scale-140"
          : "scale-110 **:stroke-[2.2]",
      },
      to: `${slugRoot.value}/${c.meta?.slug}`,
      content: { sideOffset: -8 },
    }
  }),
  [
    /* -------------- SUPPORT -------------- */
    {
      icon: "i-prime-question-circle",
      label: "Support",
      children: [
        {
          label: "Help & Support",
          class: "dropdown-label-class",
        },
        { type: "separator" },
        ...(routes.find((r) => r.path === "/support")?.children ?? []).map(
          (r) => ({
            icon: r.meta?.icon,
            label: String(r.meta?.title),
            to: r.path,
          })
        ),
      ],
      ui: {
        itemLeadingIcon: "scale-128 **:stroke-[2.2]",
      },
    },

    {
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
    },
  ],
  [
    /* -------------- COLOR MODE -------------- */
    {
      children: [
        {
          label: "Theme",
          class: "dropdown-label-class",
        },
        { type: "separator" },
        ...colorModes.map((t) => ({
          checked: mode.value === t,
          icon: `i-${t}`,
          label: t,
          onSelect(e: Event) {
            e.preventDefault()
            mode.preference = t
          },
          onUpdateChecked(checked: boolean) {
            mode.preference = t
          },
          slot: "theme" as const,
          // type: 'checkbox',
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
        })),
      ],
      icon: "ui:none",
      label: "Theme",
      slot: "colormode" as const,
      ui: {
        itemLabel: "justify-between items-center flex",
      },
    },
  ],
  [
    {
      icon: "i-gear",
      content: { sideOffset: -8 },
      label: "Settings",
      ui: {
        itemLeadingIcon: "**:stroke-[2.2] scale-98",
      },
    },
  ],
  [
    /* -------------- LOG OUT -------------- */
    {
      icon: online ? "i-lucide-log-out" : "i-lucide-log-in",
      label: online ? "Log out" : "Log in ",
      kbds: online ? ["shift", "meta", "q"] : ["shift", "meta", "s"],
      ui: {
        itemLeadingIcon: "**:stroke-[2.2] scale-90",
      },
      onSelect(e: Event) {
        e.preventDefault()
        online ? useSignOut() : emit("openLogIn")
      },
    },
    {
      label: "open sign in anyway",
      onSelect(e: Event) {
        emit("openLogIn")
      },
    },
  ],
])
</script>

<template>
  <UDropdownMenu
    arrow
    :external-icon="true"
    :content="{ sideOffset: 4 }"
    :items="navDropdown"
    :ui="{
      itemLeadingAvatar: 'rounded-md',
      content: 'w-64 **:disabled:opacity-100',
      item: 'px-2',
    }"
    @update:open="checkInGame()">
    <UButton
      :color="(!account?.icon ? 'neutral' : 'p3') as ButtonProps['color']"
      :variant="!account?.icon ? 'solid' : 'ghost'"
      size="md"
      square
      :ui="{
        base: 'shadow-none transition-all ease-out duration-200 size-9.5 p-0.5 shrink-0 rounded-full open:btn-active  open:noise',
        leadingIcon: cn('', {
          hidden: account?.icon,
        }),
      }">
      <Icon
        v-if="!account?.icon"
        name="i-plug"
        :class="
          cn(
            'size-5 text-nc duration-200 **:stroke-[1.8]',
            !account?.icon ? 'animate-in fade-in' : 'animate-out fade-out'
          )
        " />
      <SummonerIcon
        v-else
        :class="
          cn(
            'size-full rounded-full shadow-xs dss',
            account.icon ? 'animate-in fade-in' : 'animate-out fade-out'
          )
        " />
    </UButton>

    <template #live-trailing>
      <UBadge
        size="xs"
        :ui="{
          base: cn('mr-2 items-center', inGame ? '' : 'text-pc/50'),
        }"
        :color="(inGame ? 'neutral' : 'p3') as BadgeProps['color']"
        :variant="inGame ? 'solid' : 'outline'">
        <template #leading>
          <UChip
            :size="'dot' as ChipProps['size']"
            square
            :color="(inGame ? 'p0' : 'p3') as ChipProps['color']"
            inset
            standalone />
        </template>
        {{ inGame ? "Live" : "afk" }}
      </UBadge>
    </template>

    <template #colormode-label>
      Theme
      <UBadge
        size="xs"
        :ui="{ label: 'capitalize' }"
        :label="mode.value"
        :icon="`i-${mode.value}`"
        :color="'p0' as BadgeProps['color']" />
    </template>
  </UDropdownMenu>
</template>
