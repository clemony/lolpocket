<script lang="ts" setup>
const as = useAccountStore()
</script>

<template>
  <menu class=" px-3  mb-3 w-full flex flex-col ">
    <SummonerLabel />
  </menu>
  <Collapsible
    :default-open="true"
    class="size-full grid">
    <CollapsibleTrigger class=" border-y border-y-b3/90 py-2  group/collapse flex  px-3 !gap-2 font-medium items-center text-bc/70 text-2 hover:underline ">
      <icon
        name="ci:heart-02"
        class="dst size-3.75 opacity-80 " />
      <span class="grow text-left">
        friends
      </span>

      <icon
        name="left-sm"
        class="group-data-[state=open]/collapse:-rotate-90 ml-1  transition-rotate duration-200" />
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent  px-5.25  py-6 w-full flex flex-col gap-6 data-[state=closed]:gap-0">
      <SummonerFriend
        v-for="i in 4"
        :key="i" />
    </CollapsibleContent>
  </Collapsible>

  <Collapsible
    :default-open="true"
    class="size-full grid">
    <CollapsibleTrigger class=" px-3 border-y border-y-b3/90 py-2  group/collapse flex  px-3 !gap-2 font-medium items-center text-bc/70 text-2 hover:underline ">
      <icon
        name="star"
        class="dst size-3.75 opacity-80 " />
      <span class="grow text-left">
        followed
      </span>

      <icon
        name="left-sm"
        class="group-data-[state=open]/collapse:-rotate-90 ml-1  transition-rotate duration-200" />
    </CollapsibleTrigger>

    <CollapsibleContent class="CollapsibleContent px-5.25 py-4   w-full flex flex-col gap-6">
      <SummonerFriend
        v-for="i in 4"
        :key="i" />
    </CollapsibleContent>
  </Collapsible>
</template>