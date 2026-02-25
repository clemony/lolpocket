<script setup lang="ts">
import { getSummonerIcon } from "~/domain/utils/img"

const emit = defineEmits(["openLogIn"])
const modelValue = shallowRef<string>("")

const { account } = storeToRefs(user())

const base = "w-fit fx-0 hover:underline px-2! "

const content = shallowRef<Record<string, Component>>({
  backpack: defineAsyncComponent(
    () => import("~/components/layout/navigation/content/BackpackNav.vue")
  ),
  library: defineAsyncComponent(
    () => import("~/components/layout/navigation/content/LibraryNav.vue")
  ),
  account: defineAsyncComponent(
    () => import("~/components/layout/navigation/content/UserNav.vue")
  ),
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
    ui: { base: cn(base, "pr-1.5!") },
    label: "Library",
    //to: "/library",
    open: false,
  },
  backpack: {
    label: "Backpack",
    ui: { base: cn(base, "-ml-1.5 px-1.5!") },
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

const route = useRoute()
const logInOpen = shallowRef<boolean>(false)
</script>

<template>
  <UHeader title="lolpocket" :toggle="false" :ui="{ root: '' }">
    <template #left>
      <LpLogo />
    </template>

    <div class="flex items-center gap-4">
      <slot name="center-leading" />
      <LazyAppCommand />
    </div>
    <template #right>
      <LazyUPopover
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
      </LazyUPopover>
    </template>

    <LazyUModal
      v-model:open="logInOpen"
      title="Log in"
      :ui="{
        content:
          'h-max max-w-120 px-10 pt-6 pb-8 items-start grid! self-start! divide-none',
      }"
      description="Use a connected account or log in with email and password.">
      <template #content>
        <div class="flex w-full justify-center">
          <LpLogo />
        </div>
        <h3 class="dst mt-2 mb-10 w-full text-center">
          Log in
        </h3>

        <LazyAuthForm type="logIn" />
      </template>
    </LazyUModal>
  </UHeader>
</template>
