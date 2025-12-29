<script lang="ts" setup>
const {
  id,
  class: className,
  dataSize = 'lg',
  noTip = false,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | undefined
  dataSize?: TooltipSize
  noTip?: boolean
}>()

const loaded = ref(false)

watch(
  () => id,
  (newVal) => {
    if (newVal)
      loaded.value = false
  },
)
</script>

<template>
  <label
    :data-id="noTip ? '' : id"
    :data-size="dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :data-tip="noTip ? null : 'spell'"
    :class="
      cn('relative grid size-14 place-items-center overflow-hidden rounded-md group-hover/select:bg-b3/50',
         { ' shadow-sm drop-shadow-sm  shadow-black/30': loaded },
         className,
      )
    ">
    <Spinner
      v-if="!loaded"
      class="absolute z-0" />
    <img
      v-if="id"
      :alt="spellbook[id].name"
      :src="`/img/spells/${id}.webp`"
      class="size-full shrink-0"
      @load="loaded = true" />
    <slot />
  </label>
</template>
