<script lang="ts" setup>

const as = useAccountStore()
const emit = defineEmits(['open:settings'])



const inbox: LinkObject[] = [
  {
    name: 'Notifications',
    icon: {
      name: 'ph:bell-simple-bold',
      class: 'size-4 mt-px'
    },
  },
  {
    name: 'Messages',
    icon: {
      name: 'fluent:mail-16-regular',
      class: 'size-5'
    },
  }
]

const openBox = ref('Notifications')

const hello = computed (() => getGreeting())
</script>

<template>
  <NavigationMenuItem value="signIn" avoidCollisions>

    <NavigationMenuTrigger :arrow="false" class="relative size-11.5 rounded-full overflow-hidden grid bg-transparent place-items-center group/acc-btn  ">
    <div class=" absolute inset-0 opacity-0 transition-opacity duration-250 group-hover/acc-btn:opacity-100  group-data-[state=open]/acc-btn:opacity-100 " />
    <AccountSummonerIcon :account="as.userAccount" class="rounded-full   place-self-center size-9.5 overflow-hidden grayscale transition duration-200 group-hover/acc-btn:grayscale-0  group-data-[state=open]/acc-btn:grayscale-0">
    </AccountSummonerIcon>

  </NavigationMenuTrigger>

  <NavigationMenuContent align="end"   @focus-outside.prevent  class="gap-6  pb-2  flex flex-col gap-1 inset-shadow-xxs w-max">


    <div v-if="as.currentSession.session" class="size-full w-130  bg-b2/40  h-130 flex flex-col">


  <div class="px-4 pt-4 mb-9 flex gap-4 h-14 items-center w-full">
    <AccountSummonerIcon class="size-14 shadow-sm drop-shadow-xs rounded-full mt-2" />

    <div class="flex flex-col space-between size-full">
    <div class="flex gap-1 items-center w-full h-5 relative">
        <span class="font-medium text-bc/80 text-2">
     {{hello.greeting}},
    </span>
<Grow  />
      <NavigationMenuLink v-tippy="'Account Settings'" class="size-10 grid items-center justify-end pr-2.5  opacity-60 hover:opacity-100 cursor-pointer" @click="emit('open:settings')">
            <icon name="gear-solid" class="size-4 shrink-0 dst" />
          </NavigationMenuLink>
      </div>

      <h1 class="font-bold font-serif text-9 dst self-start">
        {{ as.userAccount.riot.name || as.userAccount.name }}
      </h1>
    </div>
    </div>



<div class="tabs tabs-lift grow border-b-0 -mb-1">
  <template  v-for="item in inbox" :key="item.name"  :value="item.name" >
  <label class="tab gap-2 z-1 first:-ml-1.25 text-3 not-active:padding-bottom-1 !font-medium border-b not-active:border-b-transparent group/tab !text-start"
:style="{
'--tab-radius-min':  '0.65rem',
'--tab-border-colors': 'var(--color-b4)',
'--tab-paddings': '7px 20px 5px 20px',
'--tabs-height': '30px',
}">
    <input type="radio" name="inbox-tab" v-model="openBox" :value="item.name"/>

    <icon :name="item.icon.name" :class="cn('dst  transition-opacity duration-200', {'opacity-50': openBox != item.name}, item.icon.class)" />
        {{ item.name }}

        <Badge class="ml-6 relative">
          <StatusIndicator color="glow" class="-top-1 -right-3 dst saturate-160"/>
          {{ as.userAccount.inbox[item.name.toLowerCase()].length }}
        </Badge>
  </label>
  <div class="tab-content bg-b1 drop-shadow-sm z-0 rounded-none w-full h-[calc(100%-30px)] border-t border-t-b4 pb-10  relative">

<Inbox  v-if="openBox == item.name" :inbox="item.name"/>
  </div>
</template>
</div>
</div>


<div v-else class="w-full flex justify-between items-center">
  <Login/>
</div>


    <div class="flex border-t border-t-b4/80 pt-2  justify-between items-center px-3">
      <div class="flex   items-center text-2 gap-2">
        <icon :name="hello.icon" class="size-5 dst"/>

    </div>
<div class="flex gap-4">
  <NavHyperlink to="/about" hash>
    about
  </NavHyperlink>
<NavHyperlink to="/docs" hash>
docs / help
</NavHyperlink>


<NavHyperlink  v-if="as.currentSession.session"   @click="useSignOut()" >
          <icon name="mdi:sign-out" class="size-4  shrink-0 dst " />
      </NavHyperlink>
</div>
    </div>
</NavigationMenuContent>
</NavigationMenuItem>
</template>