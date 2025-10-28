<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
<<<<<<< HEAD
import { closeAndNav } from '@app/layout/sidebar/utils.sidebar'
=======
>>>>>>> refs/remotes/origin/main

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
<<<<<<< HEAD
        ' flex-nowrap overflow-hidden hover:!text-bc !gap-2.75 pl-4 w-full h-11 !duration-0  text-3 capitalize text-nowrap justify-start',
=======
        ' flex-nowrap overflow-hidden hover:!text-bc !gap-2.75 pl-4 w-full !duration-0 h-10 text-3 capitalize text-nowrap justify-start',
>>>>>>> refs/remotes/origin/main
        { 'btn-active': route.path.match(link || item?.path) },
      )
    "
    @click="closeAndNav(link || item.path)">
    <slot>
<<<<<<< HEAD
      <span class="relative grid size-4.5 shrink-0 place-items-center">
        <hicon
          :name="String(item.meta?.icon) "
          :class="cn('size-5 absolute', item?.meta?.listClass)" />
=======
      <span class="size-4.5 shrink-0 grid place-items-center relative">
        <hicon
          :name="String(item.meta?.icon) "
          :class="cn('size-4.5 absolute', item?.meta?.listClass)" />
>>>>>>> refs/remotes/origin/main
      </span>
      {{ item.meta?.title || item.name }}
    </slot>
  </Button>
</template>