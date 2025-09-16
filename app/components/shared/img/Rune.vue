<script lang="ts" setup>
import { runeToPath } from '#shared/appdata/index/'

const { class: className, id } = defineProps<{
  class?: HTMLAttributes['class']
  id?: number | null
}>()
const loaded = ref(false)
const imgEl = ref<HTMLImageElement>()

watch(
  () => id,
  () => {
    loaded.value = false
    nextTick(() => {
      if (imgEl.value?.complete) {
        loaded.value = true
      }
    })
  }
)
</script>

<template>
  <Label
    variant="b1"
    :class="
      cn(
        'h-full border border-b2 bg-b2/30 rounded-full overflow-hidden transition-all duration-300 relative size-17  grid place-items-center aspect-square ',
        {
          'drop-shadow-sm shadow-sm inset-shadow-sides  shadow-black/20 border border-black/60 inset-shadow-black/60':
            loaded,
        },
        className,
      )
    ">
    <slot />
    <img
      v-if="id"
      :key="id"
      ref="imgEl"
      :src="`/img/runes/${runeToPath[id]}/${id}.webp`"
      :alt="ix().runeNameById(id)"
      :class="
        cn('transition-all duration-300  rounded-full size-full', {
          'scale-108 ': loaded,
        })
      "
      @load="loaded = true" />
  </Label>
</template>
