<script setup lang="ts">
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'
import { toast } from 'vue-sonner'

const ts = useTempStore()
// const hs = history.state;

const route = useRoute()

const isPocket = computed (() => {
  const regEx = /^\/pocket/
  return route.path.match(regEx)
})

const as = useAccountStore()

const summoner = ref(as.userAccount)
const messages = ref()
const modelSettings = ref()
const isOpen = ref('closed')

const ps = usePocketStore()
// ps.pockets = []
</script>

<template>
  <div
    class="bg-b1/80 w-screen max-w-screen  h-[5vh] min-h-[5vh] max-h-[5vh] fixed z-66 m-0 flex items-center gap-5 border-b border-b-transparent !pt-2 pr-7.5 pl-6 outline-hidden backdrop-blur-sm [&_>div]:-mt-px [&_>div]:flex [&_>div]:items-center "
    :class="{ '': isPocket }"
  >
    <Button
      variant="ghost"
      class=" size-11 mr-2"
      as-child
    >
      <NuxtLink to="/">
        <h4 class="drop-shadow-text select-none !tracking-normal">
          LP
        </h4>
      </NuxtLink>
    </Button>

    <NavigationMenu
      :skip-delay-duration="100"
      :disable-click-trigger="true"
    >
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

        <NavigationMenuViewport class="top-1  left-24 !rounded-xl" />
      </NavigationMenuList>
    </NavigationMenu>

    <Grow />
    <button class="btn btn-md invisible" @click="toast('Test toast', { description: 'Hey hi that\'s really cool!' })">
      test toast
    </button>

    <LazyCommand />
    <MenubarSearch />

    <DropdownMenu>
      <DropdownMenuTrigger class="ml-2 mb-1 hover:bg-transparent focus:bg-transparent max-w-11 group/acc transition-all duration-150 flex items-center">
        <Avatar class="size-11 hover:ring-2 rounded-lg hover:ring-b3 shadow-sm group-data-[state=open]/acc:ring group-data-[state=open]/acc:ring-neutral cursor-pointer">
          <AvatarImage

            v-if="summoner.gameName && as.userAccount.session"
            :src="`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.profileIconId}.png`"
            :alt="summoner.gameName || summoner.name"
            class="size-full [&_img]:scale-115 rounded-lg  inset-shadow-sm inset-shadow-black"
          />
          <AvatarFallback
            v-else
            class="rounded-lg grid place-items-center"
          >
            <icon name="octicon:person-24" class=" -mb-1  text-nc shrink-0 size-6.5 shadow-sm" />
          </AvatarFallback>

          <div v-if="messages" class="inline-grid *:[grid-area:1/1] absolute top-0.5 right-1.75">
            <div class="status !bg-resolve animate-ping"></div>
            <div class="status !bg-resolve"></div>
          </div>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent class="min-w-96" align="end" :align-offset="-9" side="bottom" :side-offset="9">
        <LazyMenubarSettings />
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<style scoped></style>
