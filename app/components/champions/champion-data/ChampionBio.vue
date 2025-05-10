<script lang="ts" setup>
const { champion} = defineProps<{
champion: Champion
}>()
      console.log("💠 - champion.positions[0]:", champion.positions[0])
</script>

<template>
  <div class="py-3 flex flex-col gap-6 pl-10 w-3/4 ">

    <div class="flex gap-4 items-end">
    <h1 class="font-serif dst">{{champion.fullName || champion.name}}</h1>
<p class="text-4 uppercase font-medium dst mb-0.25">{{champion.title}}</p>
</div>

    <div class="flex gap-6 items-center justify-between pr-4">
    <ValueFormatter :array="champion.positions" class=" badge role-bg" :data-role="champion.positions[0].toLowerCase()">
      <component :is="`i-roles-${champion.positions[0].toLowerCase()}`"  class="size-4 mr-2"/>
    </ValueFormatter>
    <ValueFormatter :array="champion.roles" class="text-2 font-medium"/>
    </div>
    <p class="leading-7 text-pretty ">
    {{champion.lore}}
    </p>
  </div>
</template>