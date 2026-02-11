<script setup lang="ts">
import ItemTooltip from "#components"

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

const loaded = shallowRef<boolean>(false)

const toast = useToast()
function showToast() {
  if (!id) return
  if (!toast.toasts.value.find((t) => t.id === `item-${id}`)) {
    toast.add({
      id: `item-${id}`,
      description: h(ItemTooltip, { id, map }),
      duration: 0,
      ui: {
        root: "p-0!",
      },
    })
  }
}
</script>

<template>
  <Tooltip
    :disabled
    :text="id ? itemNameById(id) : ''"
    trailing-icon="i-right-click"
    :img="id ? `/img/items/${id}.webp` : undefined"
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
          className
        )
      "
      :src="id ? `/img/items/${id}.webp` : undefined"
      :alt="id ? itemNameById(id) : 'item icon'"
      :loading-type
      @click.stop="showToast()"
      @load="loaded = true" />
  </Tooltip>
</template>
