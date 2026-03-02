<script setup lang="ts">
const {
  id,
  side = "top",
  class: className,
  loadingType,
  map,
  disabled,
} = defineProps<{
  id: number | null
  class?: HTMLAttributes["class"]
  loadingType?: LoadingStyle
  map?: number
  side?: Side
  disabled?: boolean
}>()

const loaded = ref<boolean>(false)

const pinned = shallowRef<boolean>(false)
</script>

<template>
  <Tooltip
    interactive
    arrow
    :side
    :avatar="id ? `/img/items/${id}.webp` : undefined"
    :label="id ? itemNameById(id) : ''"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        'rounded-xl  px-1': pinned,
      }),
    }"
    @pinned="pinned = true"
    @unpinned="pinned = false">
    <UAvatar
      role="button"
      :ui="{
        root: cn(
          'size-full rounded-lg p-0',
          {
            'opacity-98 shadow-sm shadow-black/30 drop-shadow-sm': id && loaded,
          },
          className,
        ),
      }"
      :src="id ? `/img/items/${id}.webp` : undefined"
      :alt="id ? itemNameById(id) : 'item icon'"
      icon="i-ui-none"
      :loading-type
      @load="loaded = true" />

    <template v-if="pinned" #content>
      <LazyItemTooltip v-if="id" :id />
    </template>
  </Tooltip>
</template>
