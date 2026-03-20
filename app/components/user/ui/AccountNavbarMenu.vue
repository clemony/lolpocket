<script lang="ts" setup>
import { themes } from "~/domain/lp/ui/theme"
import { useSignOut } from "../auth/useAuth"

const summoner = computed(() => user().account)

const open = shallowRef<boolean>(false)

const router = useRouter()

const settings = computed(() => {
  const settingsRoute = router.getRoutes().find((r) => r.path === "/settings")
  return (settingsRoute?.children ?? [])
    .filter((r) => r.path !== "/settings/account")
    .sort()
})

const themeModel = computed({
  get: () => user().settings?.theme ?? "",
  set: (value) => {
    const settings = user().settings
    if (settings) settings.theme = value
  }
})
</script>

<template>
  <UPopover arrow animation="shift-toward">
    <UButton class="relative overflow-hidden">
      <LazySummonerIcon
        v-if="summoner"
        class="size-10 rounded-full"
        :summoner />
    </UButton>

    <template #content>
      <div class="flex h-fit w-64! flex-col overflow-hidden">
        <div class="flex items-center gap-3 p-2">
          <SummonerIcon class="size-11 rounded-lg" />
          <div class="flex flex-col">
            <h1
              class="truncate pl-1 text-xxl! leading-none font-semibold text-pc/90 drop-shadow-2xs">
              {{ summoner?.name }}
            </h1>
            <SummonerId
              :summoner="summoner ?? undefined"
              type="tag"
              class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
          </div>
        </div>
      </div>
    </template>
    <USeparator class="mt-0 mb-1" />
    <div class="w-full px-1">
      <UButton class="h-10">
        <icon name="mail" />
        Inbox

        <span
          v-if="user().inbox?.messages?.length"
          class="absolute right-4 font-mono text-sm opacity-60">
          {{ user().inbox?.messages?.filter((m) => !m.read).length ?? 0 }}
        </span>
      </UButton>
    </div>

    <USeparator class="my-1" />

    <div class="w-full px-1">
      <UButton
        v-if="user().user"
        class="h-10"
        @click="navigateTo('/settings/account')">
        <icon name="at" />
        Account
      </UButton>

      <UButton class="h-10" @click="navigateTo('/settings')">
        <icon name="gear" />
        Settings
      </UButton>

      <div>
        <div v-for="(theme, i) in themes" :key="i" :data-theme="theme.name">
          <Label class="relative p-0!" base="btn" size="c-9">
            <input v-model="themeModel" class="peer hidden" type="" />
            <Icon class="absolute text-pc" :name="theme.icon" />
          </Label>
        </div>
      </div>
    </div>

    <USeparator />
    <div class="px-1 pb-1">
      <UButton v-if="user().user" class="h-9">
        <icon name="log-out" @click="useSignOut()" />
        Log out
      </UButton>

      <UButton v-else @click="navigateTo('/login')">
        <icon name="log-in" />
        Log in
      </UButton>
    </div> </UPopover
  >>
</template>
