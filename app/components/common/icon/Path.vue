<script lang="ts" setup>
const {
  id,
  name,
  side,
  class: className,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes['class']
  id?: number | null
  name?: string
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)

const path = computed (() => name || pathNameById(id))
</script>

<template>
  <Tooltip
    :side
    :text="path"
    :img="`/img/paths/${path}.webp`"
    :class="
      cn(
        'anchor size-5 h-full overflow-hidden rounded-full transition-all duration-300',
        className,
      )
    ">
    <slot />
    <Img
      v-if="path"
      :loading-type
      :alt="path"
      :src="`/img/paths/${path}.webp`"
      :class="
        cn('size-full rounded-full transition-all duration-300')
      "
      @click.stop
      @load="loaded = true" />
  </Tooltip>
</template>
