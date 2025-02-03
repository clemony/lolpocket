<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const ts = useTempStore()
const as = useAccountStore()

const summoner = computed(() => {
  return as.riotAccount ? as.riotAccount : defaultUser
})

const role = computedAsync(() => {
  if (ts.sessionInfo && ts.sessionInfo.user.app_metadata.user_role == 'admin') {
    return 'admin'
  }
  else {
    return 'summoner'
  }
})
console.log('💠 - role - role:', role)

const links = [
  {
    name: `Board`,
    link: '/summoner',
    icon: 'ph:squares-four-light',
    altIcon: 'system-uicons:browser-alt',
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
}) */
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger class="capitalize">
      {{ summoner.gameName }}
    </NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" min-w-130 min-h-84 h-84 py-6 px-7 gap-4 grid grid-cols-[1fr_1.2fr]">
        <SummonerCard :summoner="summoner" />

        <div class="flex flex-col w-full">
          <NuxtLink
            v-for="submenu in links"
            :key="submenu.name"
            :to="{
              path: submenu.link,
            }"
            class="flex items-center  w-full gap-4 px-2.5"
          >
            <NavigationMenuLink class="flex relative group justify-start grow w-full" :class="cn(navigationMenuTriggerStyle(), `group/${submenu.name}`)">
              {{ submenu.name }}
              <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-600" :class="`group-hover/${submenu.name}:w-full`"></span>
            </NavigationMenuLink>
          </NuxtLink>

          <NuxtLink
            v-if="role == 'admin'"
            to="/admin/Admin"
            class="flex items-center gap-4 px-2.5"
          >
            <NavigationMenuLink :class="navigationMenuTriggerStyle()">
              <!--  <icon
        name="codicon:source-control"
        class="size-4.5"
      /> -->
              Admin Board
            </NavigationMenuLink>
          </NuxtLink>
        </div>
      </div>
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>

<style scoped>

</style>
