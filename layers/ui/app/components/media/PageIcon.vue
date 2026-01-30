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
    :class="cn('relative grid size-4.5 place-items-center', className)"
  >
    <icon
      v-if="page.meta.section === 'analysis' && page.path !== '/analysis'"
      class="dst absolute size-4.5 stroke-[1.3]"
      name="guidance:search"
    />

    <icon
      v-if="page.meta.icon"
      class="absolute size-4"
      :name="page.meta.icon as string"
      :alt="page.name"
      :class="{
        'text-bc/60 top-px left-[1.25px] size-3.5!':
          page.name === 'champion analysis',
        'text-bc/70 top-0.5 left-[2px] size-3!': page.name === 'ally analysis',
        'text-bc/64 dst top-[2.75px] left-[2.5px] size-2.5!':
          page.name === 'item analysis',
      }"
    />

    <component
      :is="`i-${page.meta.icon1}`"
      v-if="page.meta.icon1"
      class="dst absolute size-4.5"
      :alt="page.name"
      :class="{ 'text-bc/60': page.meta.icon1 === 'lol-champ' }"
    />
  </span>
</template>
