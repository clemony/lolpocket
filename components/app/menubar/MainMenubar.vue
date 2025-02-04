<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
import { toast } from 'vue-sonner'

const ts = useTempStore()
// const hs = history.state;

const route = useRoute()
console.log('💠 - route:', route)

const isPocket = computed (() => {
  const regEx = /^\/pocket/
  return route.path.match(regEx)
})

const as = useAccountStore()

const summoner = ref(as.userAccount)

const modelSettings = ref()
</script>

<template>
  <div
    class="bg-b1/80 w-screen max-w-screen isolate h-[5vh] min-h-[5vh] max-h-[5vh] absolute z-60 m-0 flex items-center gap-7.5 border-b border-b-transparent !pt-2 pr-4 pl-5 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center "
    :class="{ '': isPocket }"
  >
    <Button
      variant="ghost"
      class=" size-11"
      as-child
    >
      <NuxtLink to="/">
        <h4 class="drop-shadow-text select-none !tracking-normal">
          LP
        </h4>
      </NuxtLink>
    </Button>

    <NavigationMenu :skip-delay-duration="100" :disable-click-trigger="true">
      <NavigationMenuList class="pt-0.75">
        <MenubarUser />

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

        <NavigationMenuViewport class="top-4 left-14 rounded-xl" />
      </NavigationMenuList>
    </NavigationMenu>

    <Grow />
    <button class="btn btn-md" @click="toast('Test toast', { description: 'Hey hi that\'s really cool!' })">
      test toast
    </button>
    <div class="">
      <MenubarSearch
        class="h-9 rounded-lg px-4 backdrop-brightness-[97%]"
        placeholder="Search"
      />
    </div>

    <NavigationMenu v-model:model-value="modelSettings" @update:model-value="(e) => modelSettings = e">
      <NavigationMenuList>
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
          <NavigationMenuTrigger as-child class=" hover:bg-transparent focus:bg-transparent ">
            <button class="group  flex min-w-fit grow items-center justify-end">
              <Avatar class="size-10  rounded-full  shadow-sm ">
                <AvatarImage

                  v-if="summoner.gameName && as.userAccount.session"
                  :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
                  :alt="summoner.gameName || summoner.name"
                  class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black"
                />
                <AvatarFallback
                  v-else
                  class="rounded-full grid place-items-center"
                >
                  <icon name="octicon:person-24" class=" -mb-1  text-nc shrink-0 size-6.5 shadow-sm" />
                </AvatarFallback>
              </Avatar>
            </button>
          </NavigationMenuTrigger>

          <NavigationMenuContent class="min-w-70">
            <LazyMenubarSettings />
          </NavigationMenuContent>
          <LazyNavigationMenuViewport class="top-4 right-54 rounded-xl  border border-x-b3 border-b-b3 border-t-b2" />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<style scoped></style>
