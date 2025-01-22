<script setup lang="ts">
  const ts = useTempStore()
  const as = useAccountStore()
  //const hs = history.state;

  const sidebarTrigger = ref()

  /*   const isHovered = useElementHover(sidebarTrigger);
  console.log('💠 - isHovered:', isHovered);

  watch(
    () => isHovered.value,
    (newVal) => {
      console.log('💠 - newVal:', newVal);
      newVal ? (ts.sidebarTrigger = true) : '';
    }
  ); */
</script>

<template>
  <Menubar
    class="bg-b1/80 absolute z-50 m-0 flex w-full items-center gap-6 overflow-hidden border-x-0 border-t-0 border-b border-b-transparent !pt-2 pr-4 pl-2 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center">
    <div>
      <MenubarMenu>
        <div class="flex items-center">
          <Label
            variant="ghost"
            size="icon"
            class="gap-3 grid place-items-center group cursor-pointer"
            ref="sidebarTrigger">
            <icon
              name="system-uicons:menu-hamburger"
              class="size-7 shrink-0 object-center drop-shadow-xs transition-all duration-300 group-hover:stroke-1.5 group-hover:scale-x-15 group-hover:scale-y-150" />
            <input
              class="hidden"
              type="checkbox"
              v-model="ts.sidebarTrigger" />
          </Label>

          <Button
            variant="ghost"
            class="justify-start gap-3"
            as-child>
            <NuxtLink to="/">
              <h4 class="drop-shadow-text select-none !tracking-normal">lolpocket</h4>
            </NuxtLink>
          </Button>

          <Dialog>
            <LoginDialog v-if="!ts.sessionInfo">
              <Button
                variant="outline"
                size="xs"
                class="text-1 ml-23 font-medium shadow-xs">
                log in
              </Button>
            </LoginDialog>
          </Dialog>

          <Button @click="signOut()">sign out</Button>
        </div>
      </MenubarMenu>
    </div>
    <Grow />
    <div class="">
      <MenubarMenu>
        <SearchButton
          class="h-9 rounded-lg px-4 backdrop-brightness-[97%]"
          placeholder="Search" />
      </MenubarMenu>
    </div>

    <div class="!-mt-1 flex items-center">
      <Label
        variant="ghost"
        size="icon"
        class="!h-10.75 grid place-items-center">
        <input
          type="checkbox"
          class="hidden"
          @change="console.log(ts.pocketDrawerTrigger)"
          v-model="ts.pocketDrawerTrigger" />
        <LittleTip
          content="New Pocket ・ ⌘N"
          class="grid place-items-center">
          <icon
            name="teenyicons:add-outline"
            class="size-5 stroke-[1.2] opacity-60 drop-shadow-sm" />
        </LittleTip>
      </Label>
      <MenubarMenu> </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger
          class="group pt-1.5"
          as-child>
          <LittleTip content="News">
            <icon
              name="material-symbols-light:breaking-news-outline-rounded"
              class="size-7.25 shrink-0 stroke-2 opacity-60 drop-shadow-sm group-hover:opacity-100 group-data-[state=open]:opacity-100" />
          </LittleTip>
        </MenubarTrigger>
        <MenubarContent
          :side-offset="8"
          class="w-96">
          <News />
        </MenubarContent>
      </MenubarMenu>

      <!--      <MenubarMenu>
        <MenubarTrigger class="group flex min-w-fit grow items-center justify-end">
          <icon
            name="qlementine-icons:external-link-16"
            class="-mt-0.75 size-5.75 shrink-0 opacity-60 group-hover:opacity-100" />
        </MenubarTrigger>

   <MenubarContent
          :side-offset="8"
          class="pl-2">
          <ResourcesDropdown />
        </MenubarContent>
      </MenubarMenu> -->

      <MenubarMenu>
        <MenubarTrigger class="group -mt-[1.5px] flex min-w-fit grow items-center justify-end">
          <LittleTip content="Settings">
            <icon
              name="ph:gear-six"
              class="size-6.25 shrink-0 opacity-60 drop-shadow-sm group-hover:opacity-100" />
          </LittleTip>
        </MenubarTrigger>

        <MenubarContent
          class="min-w-64"
          :side-offset="8">
          <SettingsDropdown />
        </MenubarContent>
      </MenubarMenu>
    </div>
  </Menubar>
</template>

<style scoped></style>
