<script lang="ts" setup>
import ColorMode from "#components"
import { getSummonerIcon } from "~/domain/utils/img"
import { colorModeIconClass } from "~~/layers/ui/app/config/colorMode"
import { helpNav, resourceNav, userNav } from "../../../../utils/routes"

const emit = defineEmits(["openSub", "openLogIn"])

const { account } = storeToRefs(user())
const sbu = useSupabaseUser()

const online = computed(() => sbu.value?.session_id)
const inGame = shallowRef<boolean>(true)
const modelValue = shallowRef<string>("")
function checkInGame() {}
function handleOpen() {
  if (modelValue.value === "account") checkInGame()
}

const kbds = computed(() =>
  online.value ? ["shift", "meta", "q"] : ["shift", "meta", "s"]
)

const supNav = [
  {
    icon: "i-f7-info",
    label: "Resources",
    ui: {
      leadingIcon: "scale-120",
    },
    items: resourceNav,
  },
  {
    label: "Support",
    icon: "i-lucide-circle-question-mark",
    items: helpNav.filter((i) => i !== undefined),
  },
]
</script>

<template>
  <ul class="menu w-60 gap-1 overflow-hidden p-1">
    <UButton
      variant="highlight"
      to="/account/settings"
      class="flex flex-nowrap items-center justify-between rounded-md p-1.5 hover:bg-p1 hover:noise">
      <UUser
        :name="account?.name ?? account?.username ?? 'Not Connected'"
        :avatar="{
          src: getSummonerIcon(account?.icon) ?? null,
          icon: 'i-plug',
        }"
        :ui="{
          root: '  grow',
          name: 'opacity-100 w-full',
        }" />

      <UBadge
        size="xs"
        :ui="{
          base: cn('items-center justify-self-end', inGame ? '' : 'text-pc/50'),
        }"
        :color="inGame ? 'neutral' : 'p3'"
        :variant="inGame ? 'solid' : 'outline'">
        <template #leading>
          <UChip
            size="dot"
            square
            :color="inGame ? 'p0' : 'p3'"
            inset
            standalone />
        </template>
        {{ inGame ? "Live" : "afk" }}
      </UBadge>
    </UButton>

    <PopoverSeparator />
    <li>
      <ul>
        <li v-for="item in userNav" :key="item.label">
          <UButton variant="highlight" size="sm" v-bind="item" />
        </li>
      </ul>
    </li>
    <li>
      <UButton
        variant="highlight"
        size="sm"
        icon="i-mail"
        label="Inbox"
        :ui="{ leadingIcon: '**:stroke-[1.9] scale-98' }" />
    </li>

    <PopoverSeparator />
    <li v-for="item in supNav" :key="item.label">
      <PopoverSub
        v-bind="item"
        @update:open="(e: boolean) => emit('openSub', e)" />
    </li>
    <PopoverSeparator />
    <li>
      <PopoverSub
        :component="mode"
        :icon="$colorMode.preference"
        :label="$colorMode.preference"
        :ui="{
          label: 'capitalize',
          leadingIcon: colorModeIconClass[$colorMode.preference],
        }"
        @update:open="(e: boolean) => emit('openSub', e)">
      </PopoverSub>
    </li>
    <li>
      <UButton
        variant="highlight"
        size="sm"
        icon="i-gear"
        to="/settings"
        label="Settings"
        :ui="{ leadingIcon: ' **:stroke-[1.9] ' }" />
    </li>

    <PopoverSeparator />
    <li>
      <UButton
        variant="highlight"
        size="sm"
        :icon="online ? 'i-lucide-log-out' : 'i-lucide-log-in'"
        :label="online ? 'Log out' : 'Log in '"
        :ui="{
          leadingIcon: '**:stroke-[2.2] scale-90',
        }"
        @click="emit('openLogIn')">
        <template #trailing>
          <span class="flex items-center gap-0.5">
            <UKbd
              v-for="k in kbds"
              :key="k"
              square
              :value="k"
              class="w-5 max-w-5 min-w-5" />
          </span>
        </template>
      </UButton>
    </li>
  </ul>
</template>
