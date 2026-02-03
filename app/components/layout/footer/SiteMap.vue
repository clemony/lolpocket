<script setup lang="ts">
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
  group: any
}>()
const listClass
  = 'flex flex-col gap-3 w-80 h-full  [&_li]:px-1 [&_li]:drop-shadow-sm'

const itemClass
  = 'flex items-center font-medium gap-2 hover:underline-offset-2 hover:underline'
</script>

<template>
  <ul
    v-for="nav, i in group"
    :key="i">
    <h1 class="capitalize dss">
      {{ nav.meta?.title || nav?.name }}
    </h1>
    <li
      v-for="item in nav.items"
      :key="item?.name"
      :class="cn('capitalize', itemClass)">
      {{ item?.meta?.title || item?.name }}
    </li>
  </ul>
</template>
