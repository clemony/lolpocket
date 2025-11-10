<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import { closeAndNav } from '~/layout'

const { item: i, link } = defineProps<{
  item?: RouteRecordRaw | string
  link?: string
}>()

const route = useRoute()

const item = computed (() => {
  if (!i)
    return null
  if (typeof i == 'string')
    return useRouter().getRoutes().find(r => r.name === i)
  else
    return i
})
</script>

<template>
  <Button
  :disabled="route.path.match(link || item?.path)"
    v-if="link || item"
    variant="link"
    on="link"
    size="12"
    class=" pl-2 w-full h-11 !duration-0 justify-start "
    @click="closeAndNav(link || item.path)">
    <slot>
      <span :class="cn('flex-nowrap flex items-center text-3 capitalize text-nowrap !gap-2.75',
        { 'badge badge-ghost badge-xl inset-shadow-sm inset-shadow-black/3': route.path.match(link || item?.path) },)">
      <span class="relative grid size-4.5 shrink-0 place-items-center">
        <hicon
          :name="String(item.meta?.icon) "
          :class="cn('size-5 absolute', item?.meta?.listClass)" />
      </span>
      {{ item.meta?.title || item.name }}
    </span>
    </slot>
  </Button>
</template>