<script lang="ts" setup>
const summoner = computed (() => as().account)

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
  <HoverCard
    :interactive="true"

    trigger="click"
    animation="shift-toward"
    theme="base clean popover">
    <HoverCardTrigger
      size="c-10"
      class="relative overflow-hidden border-b3! p-0 shadow-sm drop-shadow-sm">
      <LazySummonerIcon
        v-if="summoner"
        :summoner
        class="size-10 rounded-full" />
    </HoverCardTrigger>

    <HoverCardContent class="flex h-fit w-64! flex-col overflow-hidden">
      <HoverCardArrow />
      <div class="flex items-center gap-3 px-2 pt-2">
        <SummonerIcon class="size-11 rounded-lg" />
        <div class="flex flex-col">
          <SummonerName
            class="truncate pl-1 text-6! leading-none font-semibold text-bc/90 dst" />
          <SummonerTag
            class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
        </div>
      </div>

      <DropdownMenuSeparator class="mt-0 mb-1" />
      <div class="w-full px-1">
        <PopoverItem class="h-10">
          <icon name="mail" />
          Inbox

          <span
            v-if="as().inbox?.messages?.length"
            class="absolute right-4 font-mono text-2 opacity-60">
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
    </HoverCardContent>
  </HoverCard>
</template>
