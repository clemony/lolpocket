<script lang="ts" setup>
function closeAndNavigate(link: string) {
  navigateTo(link)
}

const user = useSupabaseUser()

const router = useRouter()

const settings = computed(() => {
  return router.getRoutes().filter(r => r.path === '/settings')[0].children.filter(r => r.path !== '/settings/account').sort()
})
console.log('🌱 - settings:', settings)

const open = shallowRef(false)
const target = shallowRef<HTMLButtonElement>(null)
</script>

<template>
  <Popover>
    <PopoverTrigger
<<<<<<< HEAD
      variant="ghost"
      hover="inset"
      base="btn"
      active="inset"
      class="on:!bg-b2/60 on:border-b3 absolute inset-x-0 bottom-5 mx-3 h-16 justify-between border-transparent  px-4 backdrop-blur">
      <div class="flex  items-center gap-3 ">
        <SummonerIcon class="size-11 rounded-lg " />
        <SummonerName
          as="h3"
          class="dst text-bc/90 truncate pl-1 leading-none font-semibold" />
        <SummonerTag class="pl-1 align-bottom leading-none italic [&_svg]:pt-px" />
      </div>

      <icon
        name="select"
        class="size-4" />
=======
      as-child>
      <Button
        variant="ghost"
        class="h-19 rounded-none pb-1 inset-x-0 -mx-3  px-4 justify-between">
        <div class="gap-3 inline-flex **:align-bottom items-center ">
          <SummonerIcon class="size-11 rounded-lg relative" />
          <SummonerName
            as="h3"
            class="dst pl-1 font-semibold truncate leading-none text-bc/90" />
          <SummonerTag class="pl-1 [&_svg]:pt-px align-bottom italic leading-none" />
        </div>

        <icon
          name="select"
          class="size-4" />
      </Button>
>>>>>>> refs/remotes/origin/main
    </PopoverTrigger>
    <PopoverContent
      class="w-[var(--reka-popover-trigger-width)] rounded-lg pb-2 shadow-sm"
      side="top"
      align="start"
<<<<<<< HEAD
      :side-offset="6">
=======
      :side-offset="4">
>>>>>>> refs/remotes/origin/main
      <PopoverItem
        class="h-10 ">
        <icon name="mail" />
        Inbox

        <span
          v-if="as().account"
          class="text-2 absolute right-4 font-mono opacity-60">
          {{ as().account?.inbox.messages.filter(m => !m.read).length }}
        </span>
      </PopoverItem>

      <DropdownMenuSeparator class="my-1" />

      <PopoverItem
        v-if="as().loggedIn"
        class="h-10"
        @click="closeAndNavigate('/settings/account')">
        <icon name="at" />
        Account
      </PopoverItem>

      <HoverCard>
        <HoverCardTrigger as-child>
          <PopoverItem
            class="open:btn-active open:bg-b2/80 open:border-b3/60 open:noise-1 group/t h-10 w-full"
            @click="closeAndNavigate('/settings')">
            <icon
              name="gear"
              class="!size-4.75" />
            Settings

            <icon
              name="right"
              class="absolute right-3 size-3.5 opacity-50 group-open:opacity-60 group-hover:opacity-60" />
          </PopoverItem>
        </HoverCardTrigger>

        <HoverCardContent
          class="p-1 !py-1.5"
          side="right"
          :align-offset="-4"
          align="end">
          <PopoverItem
            v-for="child in settings"
            :key="child.path"
            class="h-10 capitalize">
            <icon
              :name="String(child.meta?.icon)"
              :class="cn('', child.meta?.listClass)"
              @click="navigateTo(child.path)" />
            {{ child.meta?.title || child.name }}
          </PopoverItem>
        </HoverCardContent>
      </HoverCard>

      <DropdownMenuSeparator />
      <PopoverItem
        v-if="as().loggedIn"
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
    </PopoverContent>
  </Popover>
</template>
