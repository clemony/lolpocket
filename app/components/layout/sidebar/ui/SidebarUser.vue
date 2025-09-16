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
const isHovered = useElementHover(target, { delayEnter: 400, delayLeave: 400 })

watch(
  () => isHovered.value,
  (newVal) => {
    if (newVal == true)
      open.value = true
  }
)
</script>

<template>
  <DropdownMenu v-model:open="open">
    <DropdownMenuTrigger
      ref="target"
      as-child
      size="icon"
      class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:size-11 shrink-0 md:p-0 group/menu">
      <SummonerIcon
        class="size-full *:size-full text-nc rounded-lg grayscale transition-all duration-200 group-hover/menu:grayscale-0 group-data-[state=open]/menu:grayscale-0" />
      <div class="grid flex-1 text-left text-xs leading-tight">
        <SummonerName class="truncate font-semibold" />
        <SummonerRegion class="truncate text-xxs" />
      </div>
      <!--
      <icon
        name="select"
        class="ml-auto size-4" /> -->
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
      side="right"
      align="end"
      :side-offset="4">
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-xs">
          <SummonerIcon class="h-8 w-8 rounded-lg text-nc" />

          <div class="grid flex-1 text-left text-xs leading-tight">
            <SummonerName class="truncate font-semibold" />
            <SummonerTag class="truncate text-xxs" />
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <icon name="arrow-up" />
          h
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem
          v-if="as().loggedIn"
          @click="closeAndNavigate('/settings/account')">
          <icon name="at" />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem @click="closeAndNavigate('/settings')">
          <icon name="gear" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <icon name="ph:bell" />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-if="as().loggedIn">
        <icon
          name="log-out"
          @click="useSignOut()" />
        Log out
      </DropdownMenuItem>

      <DropdownMenuItem
        v-else
        @click="navigateTo('/login')">
        <icon name="log-in" />
        Log in
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
