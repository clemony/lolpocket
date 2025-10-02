<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'

const { item: i, path } = defineProps<{
  item?: RouteRecordRaw | string
  path?: string
}>()

const emit = defineEmits(['close-sidebar'])
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
  <BtnLink
    v-if="path || item"
    :to="path || item.path"
    variant="ghost"
    size="lg"
    :class="
      cn(
        ' flex-nowrap overflow-hidden hover:!text-bc gap-2.75 pl-4 w-full !duration-0 h-10 text-3 capitalize text-nowrap justify-start',
        { 'btn-active bg-b2/40 !border-b3/80': route.path.match(path || item?.path) },
      )
    "
    @click="emit('close-sidebar')">
    <slot>
      <span class="size-4.5 shrink-0 grid place-items-center relative">
        <hicon
          :name="String(item.meta?.icon) "
          :class="cn('size-4.5 absolute', item?.meta?.listClass)" />
      </span>
      {{ item.meta?.title || item.name }}
    </slot>
  </BtnLink>
</template>