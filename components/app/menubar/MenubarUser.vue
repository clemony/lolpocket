<script lang="ts" setup>

import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'



const ts = useTempStore()
const as = useAccountStore()

const summoner = computed(() => {
  return as.riotAccount ? as.riotAccount : defaultUser
})

const summonerIcon = ref('/img/summoner-icons/space-yuumi.jpg')



const role = computedAsync(() => {
  if (ts.sessionInfo  && ts.sessionInfo.user.app_metadata.user_role == 'admin') {
    return 'admin'
  }
  else  {
    return 'summoner'
  }
})
  console.log("💠 - role - role:", role)

const links = [
  {
    name: `Board`,
    link: '/summoner',
    icon: 'ph:squares-four-light',
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

const userCheck = ref(true)

const user = computed (() => {
  return ts.sessionInfo ? useSupabaseUser() : 'Summoner'
})

/* onMounted (async() => {
const { data, isFinished } =  useAxios(`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.value.profileIconId}.png`)
await data
summonerIcon.value = data
}) */
</script>

<template>

  <NavigationMenuItem>
    <NavigationMenuTrigger class="capitalize">{{ summoner.gameName }}</NavigationMenuTrigger>
    <NavigationMenuContent>
      <div class=" min-w-130 min-h-84 h-84 py-6 px-7 gap-4 grid grid-cols-[1fr_1.2fr]">
        
             <div class="flex justify-start flex-col gap-2 rounded-xl bg-b2/40 border-b2 border">
    
              <div class=" grid place-items-center size-full" >
      <Avatar class="size-26 ring-1 ring-b3 rounded-full  shadow-md border border-neutral ">
        <AvatarImage

          :src="summonerIcon"
          v-if="summoner"
          :alt="summoner.gameName"
          class="size-full [&_img]:scale-115 rounded-full  inset-shadow-sm inset-shadow-black"
        />
        <AvatarFallback
          v-else
          class="rounded-full"
        >
          LP
        </AvatarFallback>
      </Avatar>
</div>

          <div class="justify-center items-center flex flex-col px-4 pb-5">

      <h1 class="tracking-tight font-serif !font-black dst">
        {{ summoner.gameName }}
      </h1>
      <p>#{{summoner.tagLine}}</p>
       <p class="mt-2">
        <span class="font-semibold">Lv. </span>
        <span class=" font-medium" >{{summoner.summonerLevel}}
          </span>
        </p>
      <p class="mt-2 dst">{{summoner.region}}</p>

          </div>
          </div>

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
                  <span class="absolute -bottom-1 left-0 w-0 transition-all duration-300 h-0.5 bg-indigo-600" :class="`group-hover/${submenu.name}:w-full`"
    ></span>
        </NavigationMenuLink>
          </NuxtLink>

  
    <NuxtLink v-if="role == 'admin'"
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
