<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

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
    v-if="link || item"
    :variant="route.path.match(link || item?.path) ? 'link' : 'ghost'"
    active="link"
    size="lg"
    :class="
      cn(
        ' flex-nowrap overflow-hidden hover:!text-bc !gap-2.75 pl-4 w-full !duration-0 h-10 text-3 capitalize text-nowrap justify-start',
        { 'btn-active': route.path.match(link || item?.path) },
      )
    "
    @click="closeAndNav(link || item.path)">
    <slot>
      <span class="size-4.5 shrink-0 grid place-items-center relative">
        <hicon
          :name="String(item.meta?.icon) "
          :class="cn('size-4.5 absolute', item?.meta?.listClass)" />
      </span>
      {{ item.meta?.title || item.name }}
    </slot>
  </Button>
</template>