<script lang="ts" setup>
function closeAndNavigate(link: string) {
  navigateTo(link)
}

const user = useSupabaseUser()

const router = useRouter()

const routes = computed(() => {
  return router.getRoutes().filter(r => r.path.match(/\/settings.*/g))
})

const open = shallowRef(false)
const target = shallowRef<HTMLButtonElement>(null)
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger
      ref="target"
      as-child
      size="icon"
      class="size-9 shrink-0 p-0 cursor-pointer grayscale transition-all duration-200  hover:ring ring-bc/50 hover:grayscale-0 group data-[state=open]:grayscale-0">
      <SummonerIcon
        class="size-9  *:size-full  rounded-full" />
    </PopoverTrigger>
    <PopoverContent
      class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg p-1"
      side="bottom"
      align="end"
      :side-offset="4">
      <div class="flex items-center gap-2 px-1 py-1.5 text-left text-2">
        <SummonerIcon class="h-8 w-8 rounded-lg text-nc" />

        <div class="grid flex-1 text-left text-2 leading-tight">
          <SummonerName class="truncate font-semibold" />
          <SummonerTag class="truncate text-1" />
        </div>
      </div>

      <DropdownMenuSeparator />
      <div>
        <PopoverItem>
          <icon name="arrow-up" />
          h
        </PopoverItem>
      </div>
      <DropdownMenuSeparator />
      <div>
        <PopoverItem
          v-if="as().loggedIn"
          @click="closeAndNavigate('/settings/account')">
          <icon name="at" />
          Account
        </PopoverItem>
        <PopoverItem @click="closeAndNavigate('/settings')">
          <icon name="gear" />
          Settings
        </PopoverItem>
        <PopoverItem>
          <icon name="ph:bell" />
          Notifications
        </PopoverItem>
      </div>
      <DropdownMenuSeparator />
      <PopoverItem v-if="as().loggedIn">
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
