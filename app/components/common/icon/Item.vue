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

const loaded = shallowRef<boolean>(false)
const outerTt = shallowRef<boolean>(true)
const innerTt = shallowRef<boolean>(false)
const innerOpen = shallowRef<boolean>(false)
function handleSwap() {
  outerTt.value = false
  innerTt.value = true
  innerOpen.value = true
}

function handleClose() {
  outerTt.value = true
  innerTt.value = false
  innerOpen.value = false
}

const child = useTemplateRef<HTMLElement>("child")
onClickOutside(child, (e: Event) => handleClose())
</script>

<template>
  <Tooltip
    :disabled="disabled || !outerTt"
    :label="id ? itemNameById(id) : ''"
    trailing-icon="i-right-click"
    :img="id ? `/img/items/${id}.webp` : undefined"
    :side>
    <UTooltip v-model:open="innerOpen" :disabled="disabled || !innerTt" :side>
      <Img
        role="button"
        :class="
          cn(
            'overflow-hidden rounded-lg',
            {
              'opacity-98 shadow-sm shadow-black/30 drop-shadow-sm':
                id && loaded,
            },
            className
          )
        "
        :src="id ? `/img/items/${id}.webp` : undefined"
        :alt="id ? itemNameById(id) : 'item icon'"
        :loading-type
        @click.right.prevent="handleSwap()"
        @load="loaded = true" />
      <template v-if="innerTt" #content>
        <ItemTooltip v-if="id" :id ref="child" />
      </template>
    </UTooltip>
  </Tooltip>
</template>
