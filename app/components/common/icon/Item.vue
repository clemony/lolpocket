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

const emit = defineEmits(["clicked"])
const loaded = shallowRef<boolean>(false)
const outerTt = shallowRef<boolean>(true)
const innerTt = shallowRef<boolean>(false)
const innerOpen = shallowRef<boolean>(false)
function handleSwap() {
  outerTt.value = false
  innerTt.value = true
  innerOpen.value = true
}

function handlePin() {}

const img = useImage()

const pinned = shallowRef<boolean>(false)
</script>

<template>
  <Tooltip
    interactive
    :avatar="id ? `/img/items/${id}.webp` : undefined"
    :label="id ? itemNameById(id) : ''"
    :ui="{
      content: cn('h-fit! max-h-80! w-full max-w-80', {
        'rounded-xl  px-1': pinned,
      }),
    }"
    :side
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
          className
        ),
      }"
      :src="id ? `/img/items/${id}.webp` : undefined"
      :alt="id ? itemNameById(id) : 'item icon'"
      :loading-type
      @load="loaded = true" />

    <template v-if="pinned" #content>
      <LazyItemTooltip v-if="id" :id />
    </template>
  </Tooltip>
</template>
