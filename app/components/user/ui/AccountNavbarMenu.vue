<script lang="ts" setup>
import { themes } from '~/domain/lp/ui/theme'

const summoner = computed(() => as().account)

const open = shallowRef<boolean>(false)

const router = useRouter()

const settings = computed(() => {
  return router
    .getRoutes()
    .filter(r => r.path === '/settings')[0]
    .children
    .filter(r => r.path !== '/settings/account')
    .sort()
})
</script>

<template>
  <UPopover
    arrow
    animation="shift-toward">
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
            <SummonerName
              class="truncate pl-1 text-xxl! leading-none font-semibold text-pc/90 dst" />
            <SummonerTag
              class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
          </div>
        </div>
      </div>
    </template>
    <DropdownMenuSeparator class="mt-0 mb-1" />
    <div class="w-full px-1">
      <PopoverItem class="h-10">
        <icon name="mail" />
        Inbox

        <span
          v-if="as().inbox?.messages?.length"
          class="absolute right-4 font-mono text-sm opacity-60">
          {{ as().inbox.messages.filter((m) => !m.read).length }}
        </span>
      </PopoverItem>
    </div>

    <DropdownMenuSeparator class="my-1" />

    <div class="w-full px-1">
      <PopoverItem
        v-if="as().user"
        class="h-10"
        @click="navigateTo('/settings/account')">
        <icon name="at" />
        Account
      </PopoverItem>

      <PopoverItem
        class="h-10"
        @click="navigateTo('/settings')">
        <icon name="gear" />
        Settings
      </PopoverItem>

      <div>
        <div
          v-for="(theme, i) in themes"
          :key="i"
          :data-theme="theme.name">
          <Label
            class="relative p-0!"
            base="btn"
            size="c-9"
            color="default">
            <input
              v-model="as().settings.theme"
              class="peer hidden"
              type="">
            <Icon
              class="absolute text-pc"
              name="theme.icon" />
          </Label>
        </div>
      </div>
    </div>

    <DropdownMenuSeparator />
    <div class="px-1 pb-1">
      <PopoverItem
        v-if="as().user"
        class="h-9">
        <icon
          name="log-out"
          @click="useSignOut()" />
        Log out
      </PopoverItem>

      <PopoverItem
        v-else
        @click="navigateTo('/login')">
        <icon name="log-in" />
        Log in
      </PopoverItem>
    </div>
  </UPopover>
</template>
