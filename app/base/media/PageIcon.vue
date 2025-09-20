<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'

const { class: className, page } = defineProps<{
  page: RouteRecordRaw
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    class=""
    :class="cn('size-4.5 relative place-items-center grid', className)">
    <icon
      v-if="page.meta.section === 'analysis' && page.path !== '/analysis'"
      name="guidance:search"
      class="absolute size-4.5 dst stroke-[1.3]" />

    <icon
      v-if="page.meta.icon"
      :name="page.meta.icon as string"
      :alt="page.name"
      class="size-4 absolute"
      :class="{
        '!size-3.5 left-[1.25px] top-[1px] text-bc/60':
          page.name === 'champion analysis',
        '!size-3 left-[2px] top-0.5 text-bc/70': page.name === 'ally analysis',
        '!size-2.5 left-[2.5px] top-[2.75px]  dst text-bc/64':
          page.name === 'item analysis',
      }" />

    <component
      :is="`i-${page.meta.icon1}`"
      v-if="page.meta.icon1"
      :alt="page.name"
      class="size-4.5 absolute dst"
      :class="{ ' text-bc/60': page.meta.icon1 === 'lol-champ' }" />
  </span>
</template>
