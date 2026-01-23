<script lang="ts" setup>
const { champion } = defineProps<{
  champion: Champion
}>()
console.log('💠 - champion.positions[0]:', champion.positions[0])
</script>

<template>
  <div class="flex flex-col gap-6 px-6 pt-7 pb-3">
    <div class="flex items-end justify-between gap-4">
      <h1 class="dst font-serif">
        {{ champion.fullName || champion.name }}
      </h1>

      <p class="dst grow text-lg text-wrap uppercase">
        {{ champion.title }}
      </p>
    </div>

    <p class="text-md/7 text-pretty">
      {{ champion.lore }}
    </p>

    <Separator class="bg-b3 mb-0 shadow-none" />

    <div class="flex flex-nowrap items-center justify-between gap-6">
      <ValueFormatter
        :array="champion.roles"
        class="text-sm font-medium" />

      <ValueFormatter
        :array="champion.positions"
        class="role-bg badge border-b4/30 badge-lg mb-1 w-fit shrink-0"
        :data-role="champion.positions[0].toLowerCase()">
        <component
          :is="`i-roles-${champion.positions[0].toLowerCase()}`"
          class="-mt-1 mr-2 size-4" />
      </ValueFormatter>
    </div>
  </div>
</template>
