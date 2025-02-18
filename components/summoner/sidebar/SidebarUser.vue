<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const config = useRuntimeConfig()

const ts = useTempStore()
const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})


const role = computedAsync(() => {
  if (as.userAccount.session && as.userAccount.role == 'admin') {
    return 'admin'
  }
  else {
    return 'summoner'
  }
})


const links = [
  {
    name: `Board`,
    link: '/summoner',
    icon: 'material-symbols-light:newsmode-outline',
  },
  {
    name: 'Build Analysis',
    link: '/summoner/Analysis',
    icon: 'octicon:graph-24',
  },
  {
    name: 'Match History',
    link: '/summoner/MatchHistory',
    icon: 'iconoir:archery-match',
  },
  {
    name: 'Favorites',
    link: '/summoner/Favorites',
    icon: 'teenyicons:heart-outline',
  },
]

/* onMounted (async() => {
const { data, isFinished } =  useAxios(`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.value.profileIconId}.png`)
await data
summonerIcon.value = data
})

system-uicons:browser-alt

 */

function handleClick(mode) {
  if (mode == 'out') {
    signOut()
  }
  else if (mode == 'in') {
    ts.loginOpen == true
  }
}

const cardKey = ref(0)

watchEffect(() => {
  if (!as.userAccount.session) {
    cardKey.value++
  }
})
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger class="capitalize">
      {{ summoner.gameName }}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" nav-menu-size py-6 px-7 h-full  gap-4 grid grid-cols-[1fr_1.2fr] relative">
        <SummonerCard :key="cardKey" :summoner="summoner" />

        <div class="relative size-full">
          <div class="flex flex-col gap-0   w-full">
            <NuxtLink
              v-for="submenu in links"
              :key="submenu.name"
              :to="{
                path: submenu.link,
              }"
              class="flex w-full -mt-1 pl-5 pr-3 py-2 "
            >
              <NavigationMenuLink class="flex relative group justify-start grow w-full gap-4 items-center btn btn-ghost btn-md  " :class="cn(`group/${submenu.name}`)">
                <icon
                  :name="submenu.icon"
                  class="size-5.5 shrink-0 dst"
                  :class="{ 'stroke-[1.5] -ml-1 -mr-1 size-7': submenu.name == 'Board' }"
                />

                <span
                  class="!font-semibold !text-3 underline-offset-2 "
                  :class="cn(`group-hover/${submenu.name}:underline`)"
                >
                  {{ submenu.name }}
                </span>
              </NavigationMenuLink>
            </NuxtLink>

            <NuxtLink
              v-if="role == 'admin' && as.userAccount.session"
              to="/admin/Admin"
              class="flex w-full -mt-1 pl-5 pr-2 py-2 "
            >
              <NavigationMenuLink class="flex relative group justify-start grow w-full gap-4 items-center btn btn-ghost btn-md  !font-medium !text-3 ">
                <icon
                  name="mynaui:key"
                  class="size-7 -mr-1 -ml-1"
                />

                Admin Board
              </NavigationMenuLink>
            </NuxtLink>
            <Grow />

             <NavigationMenuLink
             class="absolute w-full bottom-0 left-0 pr-10">
              <button v-if="as.userAccount.session" class="btn btn-neutral ml-6.5 flex btn-md rounded-md mb-1 w-full gap-4 !text-2" @click="handleClick('out')">
                <icon name="teenyicons:upload-outline" class="-ml-3 !text-nc size-5 -rotate-90" />
                Sign out
              </button>

              <LoginDialog v-else>
                <button class="btn rounded-md   btn-neutral ml-6.5 flex btn-md mb-1 w-full gap-4 !text-2">
                  <icon name="teenyicons:signin-outline" class="-ml-3 !text-nc size-5 " />
                  Sign in
                </button>
              </LoginDialog>
             </NavigationMenuLink>
          </div>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>
