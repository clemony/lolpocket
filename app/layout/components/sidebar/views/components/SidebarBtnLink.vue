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

const utils = inject<TippyUtils>('tippy-utils')
</script>

<template>
  <BtnLink
    v-if="link || item"
    :disabled="route.path.match(link || item?.path)"
    variant="link"
    on="link"
    size="12"
    class="h-11 w-full justify-start pl-2 !duration-0"
    @click="">
    <slot>
      <span
        :class="cn(`
          flex flex-nowrap items-center !gap-2.75 text-3 text-nowrap capitalize
        `,
                   { 'badge badge-ghost badge-xl inset-shadow-sm inset-shadow-black/3': route.path.match(link || item?.path) })">
        <span class="relative grid size-4.5 shrink-0 place-items-center">
          <hicon
            :name="String(item.meta?.icon) "
            :class="cn('absolute size-5', item?.meta?.listClass)" />
        </span>
        {{ item.meta?.title || item.name }}
      </span>
    </slot>
  </BtnLink>
</template>