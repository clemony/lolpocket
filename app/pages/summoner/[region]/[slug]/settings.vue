<script lang="ts" setup>

definePageMeta({
  middleware: 'check-if-user',
})
const { summoner, class: className } = defineProps<{
  summoner: Summoner
  class?: HTMLAttributes['class']
}>()

const ix = useIndexStore()
const user = inject<User>('user')
const { championStats: lite } = useChampions(user.summoner.matches.simplified, { mode: 'lite', limit: 1 })

const opt = computed (() => user.account.settings)
const splash =  computed (() => opt.value.profile.splash)

const automatic = computed (() => {
  const champ = Object.keys(lite.value)[0]
  return {
    name: ix.champNameByKey(champ),
    splash: getSplash(champ, 'tile')
  }
  })

  const cardClass = 'flex px-3 items-center group/photo-button rounded-xl group/photo !gap-6 photo btn  h-50 max-w-110 w-110 w-110 hover-ring  justify-start **:text-start'

  const activeClass = ' shadow-sm hover:!bg-b2/60 !border-b3 !bg-b2/30 inset-shadow-sm-reverse'
  const inactiveClass = 'btn-ghost  grayscale    '
</script>

<template>
  <div :class="cn('max-w-[1040px] py-14 px-1 flex-col gap-14 scrollbar-hidden !justify-start !items-center ', className)">
<div class="grid grid-cols-[1.2fr_4fr] w-full">
<h2 class="col-span-full dst font-bold mb-8">
  Profile Settings
</h2>

  <menu class="col-start-1 grid w-full h-max pl-1 *:hover:underline *:underline-offset-2 *:font-medium gap-3 *:cursor-pointer">
    <li>Profile Splash</li>
    <li>Display Options</li>
  </menu>

  <div class="w-full flex flex-col gap-22">
      <h1 class="dst font-bold"  id="profile-splash" >Profile Splash</h1>
  <div class=" flex gap-x-16 h-max w-full justify-around">

<button @click="opt.profile.splash = null"  :class="cn(splash ? inactiveClass : activeClass,  cardClass)">
      <SplashCard :skin-url="automatic.splash" :text="automatic.name" :alt="`${user.summoner.name}'s icon`" />
      <div class="flex flex-col h-full pt-6 gap-4">
        <h4 class="dst">Automatic</h4>
        <p>Displays your most played champion in recent games.</p>

<ActiveTick v-if="!splash"  class="h-6  mt-2 "/>
      </div>
      </button>


<SplashSelectPanel @update:splash="e => opt.profile.splash = e">
<button  :class="cn(!splash ? inactiveClass : activeClass, cardClass)">
  <SplashCard :skin-url="splash" :alt="`${user.summoner.name}'s icon`" />
      <div class="flex flex-col  h-full pt-6 gap-4">
        <h4 class="dst">Custom</h4>
        <p>
          <span  class="italic">
Never played a champ?
          </span><br  />
          No problem. Rep your guy.</p>

          <ActiveTick v-if="splash"  class="h-6 mt-2 "/>
      </div>
      </button>
</SplashSelectPanel>
    </div>

    <Separator class="my-4" />

      <h1 class="dst font-bold"  id="profile-display" >Display Options</h1>
        <h4 class="dst">Hide Ranked Solo</h4>
  </div>
</div>
</div>
</template>