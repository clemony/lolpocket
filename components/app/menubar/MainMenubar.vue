<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin';

const ts = useTempStore()
// const hs = history.state;

const route = useRoute()
console.log('💠 - route:', route)

const isPocket = computed (() => {
  const regEx = /^\/pocket/
  return route.path.match(regEx)
})
</script>

<template>
  <div
    class="bg-b1/80 w-screen max-w-screen isolate h-[var(--menubar-height)] max-h-[5vh] absolute z-60 m-0 flex items-center gap-6 border-b border-b-transparent !pt-2 pr-4 pl-2 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center"
    :class="{ 'border-b-b2': isPocket }"
  >
    <Label
      ref="sidebarTrigger"
      variant="ghost"
      size="icon"
      class="gap-3 grid place-items-center group cursor-pointer"
    >
      <icon
        name="system-uicons:menu-hamburger"
        class="size-7 shrink-0 object-center drop-shadow-xs transition-all duration-300 group-hover:stroke-1.5 group-hover:scale-x-15 group-hover:scale-y-150"
      />
      <input
        v-model="ts.sidebarTrigger"
        class="hidden"
        type="checkbox"
      />
    </Label>

    <Button
      variant="ghost"
      class="justify-start gap-3"
      as-child
    >
      <NuxtLink to="/">
        <h4 class="drop-shadow-text select-none !tracking-normal">
          lolpocket
        </h4>
      </NuxtLink>
    </Button>

    <NavigationMenu>
    <NavigationMenuList class="pt-0.75">

      <MenubarUser v-if="ts.sessionInfo" />
      <LazyDialog v-else>
        <LoginDialog v-if="!ts.sessionInfo">
        </LoginDialog>
      </LazyDialog>
  

      <MenubarPocket />
      <MenubarData />
      <MenubarInfo />

      <NavigationMenuItem>
        <NuxtLink to="/Summoners">
          <NavigationMenuLink :class="navigationMenuTriggerStyle()">
            Calculator
          </NavigationMenuLink>
        </NuxtLink>
      </NavigationMenuItem>

      <NavigationMenuViewport class="top-[3px] left-4 rounded-xl" />
    </NavigationMenuList>
    </NavigationMenu>
    <Grow />
    <div class="">
      <MenubarSearch
        class="h-9 rounded-lg px-4 backdrop-brightness-[97%]"
        placeholder="Search"
      />
    </div>

    <Label
      variant="ghost"
      size="icon"
      class="!h-10.75 grid place-items-center"
    >
      <input
        v-model="ts.pocketDrawerTrigger"
        type="checkbox"
        class="hidden"
        @change="console.log(ts.pocketDrawerTrigger)"
      />
      <LittleTip
        content="New Pocket ・ ⌘N"
        class="grid place-items-center"
      >
        <icon
          name="teenyicons:add-outline"
          class="size-5 stroke-[1.2] opacity-60 drop-shadow-sm"
        />
      </LittleTip>
    </Label>
    <NavigationMenu>
 <NavigationMenuList >

 <!--   <NavigationMenuItem>
        <NavigationMenuTrigger
        class="group pt-1.5"
        as-child
      >
        <LittleTip content="News">
          <icon
            name="material-symbols-light:breaking-news-outline-rounded"
            class="size-7.25 shrink-0 stroke-2 opacity-60 drop-shadow-sm group-hover:opacity-100 group-data-[state=open]:opacity-100"
          />
        </LittleTip>
        </NavigationMenuTrigger>
      <NavigationMenuContent
        :side-offset="8"
        class="w-96"
      >
        <News />
      </NavigationMenuContent>
   </NavigationMenuItem>
 -->
<!--    <NavigationMenuItem>
        <NavigationMenuTrigger class="group flex min-w-fit grow items-center justify-end">
          <icon
            name="qlementine-icons:external-link-16"
            class="-mt-0.75 size-5.75 shrink-0 opacity-60 group-hover:opacity-100" />
        </NavigationMenuTrigger>

   <MenubarContent
          :side-offset="8"
          class="pl-2">
          <ResourcesDropdown />
        </MenubarContent>
      </MenubarMenu> -->

   <NavigationMenuItem>
        <NavigationMenuTrigger class="group -mt-[1.5px] flex min-w-fit grow items-center justify-end">
   <NavigationMenuLink v-tippy="'Settings'">
          <icon
            name="ph:gear-six"
            class="size-6.25 shrink-0 opacity-60 drop-shadow-sm group-hover:opacity-100"
          />
            </NavigationMenuLink>
      </NavigationMenuTrigger>

         <NavigationMenuContent class="min-w-64" >
        <LazyMenubarSettings />
      </NavigationMenuContent>
       <LazyNavigationMenuViewport class="top-[3px] right-4 rounded-xl" />
   </NavigationMenuItem>
   </NavigationMenuList>
   </NavigationMenu>
  </div>
</template>

<style scoped></style>
