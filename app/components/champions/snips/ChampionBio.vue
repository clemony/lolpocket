<script lang="ts" setup>
const { champion } = defineProps<{
  champion: Champion
}>()
console.log('💠 - champion.positions[0]:', champion.positions[0])
</script>

<template>
  <div class="pb-3 pt-7 flex flex-col gap-6 px-6">
    <div class="flex gap-4 items-end justify-between">
      <h1 class="font-serif dst">
        {{ champion.fullName || champion.name }}
      </h1>

      <p class="text-md uppercase grow dst text-wrap">
        {{ champion.title }}
      </p>
    </div>

    <p class="leading-7 text-pretty text-sm">
      {{ champion.lore }}
    </p>

    <Separator class="bg-b3 shadow-none mb-0" />

    <div class="flex gap-6 items-center justify-between flex-nowrap">
      <ValueFormatter
        :array="champion.roles"
        class="text-xs font-medium" />

      <ValueFormatter
        :array="champion.positions"
        class="badge badge-lg shrink-0 w-fit role-bg border-b4/30 mb-1"
        :data-role="champion.positions[0].toLowerCase()">
        <component
          :is="`i-roles-${champion.positions[0].toLowerCase()}`"
          class="size-4 mr-2 -mt-1" />
      </ValueFormatter>
    </div>
  </div>
</template>
