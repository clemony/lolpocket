<script lang="ts" setup>
import BackpackNav from "~/components/layout/navigation/content/BackpackNav.vue"
import LibraryNav from "~/components/layout/navigation/content/LibraryNav.vue"
import UserNav from "~/components/layout/navigation/content/UserNav.vue"
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["openLogIn"])
const modelValue = shallowRef<string>("")

const { account } = storeToRefs(user())

const base = "w-fit fx-0 hover:underline"

const content = shallowRef<Record<string, Component>>({
  backpack: BackpackNav,
  library: LibraryNav,
  account: UserNav,
})
const nav = ref<Record<string, NavButtonProps>>({
  // sSession().currentSummonerNav,
  nexus: {
    value: "nexus",
    ui: { base: cn(base, "px-5") },
    to: "/nexus",
    label: "Nexus",
    open: false,
  },
  library: {
    value: "library",
    ui: { base },
    label: "Library",
    //to: "/library",
    open: false,
  },
  backpack: {
    label: "Backpack",
    ui: { base },
    value: "backpack",
    // to: "/backpack",
    open: false,
  },
  account: {
    value: "account",
    ui: { base, trailingIcon: "hidden" },
    avatar: {
      src: getSummonerIcon(account.value?.icon) ?? null,
      size: "sm",
      icon: "i-plug",
    },
    open: false,
  },
})
const subOpen = shallowRef<boolean>(false)
function onSubOpenChange(next: boolean) {
  subOpen.value = next
}

function onPopoverOpen(key: string, next: boolean) {
  const item = nav.value[key]
  if (!item) return

  // Keep account popover open while nested ColorMode popover is active.
  if (key === "account" && !next && subOpen.value) {
    nav.value = {
      ...nav.value,
      [key]: { ...item, open: true },
    }
    return
  }

  if (next) {
    const updated: Record<string, NavButtonProps> = {}
    for (const [k, v] of Object.entries(nav.value)) {
      updated[k] = { ...v, open: k === key }
    }
    nav.value = updated
    return
  }

  nav.value = {
    ...nav.value,
    [key]: { ...item, open: next },
  }
}

watch(
  () => nav.value?.account?.open,
  (v) => {
    console.log("💠 - watch - newVal:", v)
  }
)

//  mode="hover"
</script>

<template>
  <div role="menu" class="flex w-fit items-center gap-2" :items="nav">
    <UPopover
      v-for="[k, v] in Object.entries(nav)"
      :key="v.value"
      mode="hover"
      :open="v.open"
      :content="{ sideOffset: 4 }"
      :ui="{
        content: 'bg-p0/92',
      }"
      :disabled="!content[k]"
      @update:open="onPopoverOpen(k, $event)">
      <UButton
        variant="ghost"
        color="p0"
        :trailing-icon="content[k] ? 'i-down' : ''"
        v-bind="v"
        active-variant="solid" />

      <template #content>
        <component
          :is="content[k]"
          @open-sub="onSubOpenChange"
          @open-log-in="emit('openLogIn')" />
      </template>
    </UPopover>
  </div>
</template>
