<script setup lang="ts">
import ItemTooltip from '#components'

const {
  id,
  side = 'top',
  class: className,
  loadingType,
  map,
} = defineProps<{
  id: number | null
  class?: HTMLAttributes['class']
  loadingType?: LoadingStyle
  map?: number
  side?: Side
}>()

const loaded = shallowRef<boolean>(false)

const toast = useToast()
function showToast() {
  if (!toast.toasts.value.find(t => t.id === `item-${id}`)) {
    toast.add({
      id: `item-${id}`,
      description: h(ItemTooltip, { id, map }),
      duration: 0,
      ui: {
        root: 'p-0!'
      }
    })
  }
}
</script>

<template>
  <Tooltip
    :text="itemNameById(id)"
    trailing-icon="i"
    :img="`/img/items/${id}.webp`"
    :side>
    <Img
      role="button"
      :class="
        cn(
          'overflow-hidden rounded-lg',
          {
            ' opacity-96 shadow-sm  shadow-black/30 drop-shadow-sm ':
              id && loaded,
          },
          className,
        )
      "
      :src="`/img/items/${id}.webp`"
      :alt="itemNameById(id)"
      :loading-type
      @click.stop="showToast()"
      @load="loaded = true" />
  </Tooltip>
</template>
