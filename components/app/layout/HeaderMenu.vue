<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
const as = useAccountStore()
const ts = useTempStore()

const summoner = ref(as.userAccount)

function handleClick(mode) {
  emit('update:modelValue', false)
  if (mode == 'in') {
    ts.loginOpen = true
  }
  else if (mode == 'out') {
    signOut()
  }
}


function handleAddClick() {
  const ps = usePocketStore()
  ps.newPocketOpen = true
  emit('update:modelValue')
}

const messages = ref(false)
</script>

<template>
  <div
    class="rounded-full size-13 bg-neutral/0 z-41 fixed  top-2 right-4  group justify-self-end backdrop-blur-md" :class="{'ease-in-out  hover:w-58  hover:bg-neutral/85 transition-[width_colors] dr-40 ': as.userAccount.session}">
    <SummonerIcon class="size-11 border border-black absolute  top-1 right-1 drop-shadow-sm grayscale  brightness-120 inset-shadow-rounded  ring-1 ease-in-out  rounded-full ring-neutral/40 contrast-90 group-hover:grayscale-0  transition-all dr-40 group-hover:brightness-100 group-hover:contrast-100  shadow-sm cursor-pointer z-1" />

<StatusIndicator v-if="messages"  class="group-hover:opacity-0"/>

    <div class="opacity-0 group-hover:opacity-100 transition-opacity dr-30 absolute size-full items-center flex *:w-11 px-5 z-0 overflow-hidden">



      <button v-tippy="{content:'New Pocket', placement:'bottom'}"  class="   h-full group/b cursor-pointer size-full  -mr-1.5 place-items-center flex " @click="handleAddClick()">
        <icon
          name="mingcute:add-fill"
          class="size-5.5  shrink-0 drop-shadow-sm tldr-20  group-hover/b:text-nc/90 text-nc/80"/>
      </button>


      <button v-tippy="{content:'Settings', placement:'bottom'}"  class="   h-full group/b cursor-pointer">
        <NuxtLink to="/settings" class="size-full   place-items-center flex ">
        <icon
          name="ph:gear-six-fill"
          class="size-5.75 shrink-0 drop-shadow-sm tldr-20  group-hover/b:text-nc/90 text-nc/80"/>
          </NuxtLink>
      </button>

      <button  v-tippy="{content:'Messages', placement:'bottom'}"  class="flex  cursor-pointer  h-full  place-items-center  group/b relative">
        <StatusIndicator v-if="messages"   class="group-hover:opacity-100 tldr-60 top-3.25 right-4 *:!status-md"/>
        <icon
          name="tabler:mail-filled"
          class="size-6 shrink-0 drop-shadow-sm   group-hover/b:text-nc/0 text-nc/80 absolute"/>
          <icon name="tabler:mail-opened-filled"
          class="size-6 shrink-0 drop-shadow-sm   text-nc/0 absolute group-hover/b:!text-nc/90 bottom-4"/>
      </button>


      <button  v-tippy="{content:'Sign Out', placement:'bottom'}" class="flex   h-full  place-items-center  group/b cursor-pointer"  @click="handleClick('out')">
        <icon
          name="ph:sign-out-bold"
          class="size-5.75 shrink-0 drop-shadow-sm tldr-20  group-hover/b:text-nc/90 text-nc/80"/>
      </button>

    </div>

  </div>
  </template>