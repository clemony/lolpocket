<script lang="ts" setup>
const ts = useTempStore()

function handleLogin() {
  useDrawerToggle('sidebar')
  useDialogToggle('login')
}
</script>

<template>
  <Sheet :open="ts.sidebarTrigger">
    <SheetContent class="min-h-full w-110 min-w-110 overflow-hidden" @update:clicked="ts.sidebarTrigger = false">
      <ul
        :class="
          cn(
            'z-0 gap-0  menu px-5 **:text-3 text-bc font-medium w-full overflow-y-auto overflow-x-hidden max-h-screen flex-nowrap pt-9 pb-28',

            //title
            '[&_.collapse-title]:px-2  [&_li.collapse]:-mt-2    [&_.collapse-title]:flex [&_.collapse-title]:items-center ',

            //li
            '[&_li.collapse]:hover:bg-transparent [&_li:not(.collapse)]:[&_a]:py-3 [&_li:not(.collapse)]:-mx-1 [&_li:not(.collapse)]:[&_a]:hover:bg-b2/60',
          )
        "
      >
        <SidebarTitle />

        <Tag class="mt-6">
          Summoner
        </Tag>
        <div
          v-if="ts.sessionInfo"
          class="pl-2"
        >
          <SidebarUser />
          <SidebarUserLinks />
        </div>

        <Dialog v-else>
          <LoginDialog>
            <div class="w-full grid gap-3 pt-1 pb-4 !font-normal">
              Log in to save your pockets, view personalized data, and customize your dashboard.

              <Button
                class="w-full"
                @click="ts.sidebarTrigger = false"
              >
                Log In
              </Button>
            </div>
          </LoginDialog>
        </Dialog>

        <Tag>Pocket Tools</Tag>

        <div class="pl-2">
          <SidebarPockets />
          <SidebarUtilities />
          <li class="">
            <NuxtLink
              to="/Calculator"
              class="flex gap-4 px-2.5 items-center"
            >
              <LittleIcon
                icon="teenyicons:calculator-outline"
                class="size-5"
              />
              Calculator
            </NuxtLink>
          </li>
        </div>

        <Tag>Database</Tag>
        <div class="pl-2">
          <li class="">
            <NuxtLink
              to="/Summoners"
              class="flex gap-4 px-2.5 items-center"
            >
              <i-search-user class="size-5.5 stroke-[0.5]" />
              Summoner Lookup
            </NuxtLink>
          </li>
          <SidebarDatabase />
        </div>

        <Tag>External Resources</Tag>
        <div class="pl-2">
          <SidebarResources />
        </div>

        <Tag>App Tools</Tag>
        <div class="pl-2">
          <SidebarInfo />
        </div>

        <li class="pl-2">
          <NuxtLink
            to="/Settings"
            class="flex gap-4 px-2.5 items-center"
          >
            <LittleIcon
              icon="ph:gear-six"
              class="size-5.5"
            />
            Settings
          </NuxtLink>
        </li>
      </ul>
    </SheetContent>
  </Sheet>
</template>

<style scoped></style>
