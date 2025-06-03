<script lang="ts" setup>
const { champion} = defineProps<{
champion: Champion
}>()
      console.log("💠 - champion.positions[0]:", champion.positions[0])
</script>

<template>
  <div class="py-3 flex flex-col gap-6 px-6 ">

    <div class="flex gap-4 items-end">
    <h1 class="font-serif dst">{{champion.fullName || champion.name}}</h1>
</div>

    <div class="flex gap-6 items-center justify-between font-medium flex-nowrap">
<p class="text-4 uppercase grow dst text-wrap">{{champion.title}}</p>
    <ValueFormatter :array="champion.positions" class=" badge badge-lg role-bg border-b4/30  mb-1" :data-role="champion.positions[0].toLowerCase()">
      <component :is="`i-roles-${champion.positions[0].toLowerCase()}`"  class="size-4 mr-2"/>
    </ValueFormatter>
    </div>
    <p class="leading-7 text-pretty text-3">
    {{champion.lore}}
    </p>

    <Separator class="bg-b3/80 shadow-none" />
    <ValueFormatter :array="champion.roles" class="text-2 font-medium"/>
  </div>
</template>