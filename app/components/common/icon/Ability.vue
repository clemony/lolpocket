<script lang="ts" setup>
const {
  akey,
  cid,
  ckey,
  id,
  class: className,
  dataSize = 'lg',
  noTip = false,
} = defineProps<{
  class?: HTMLAttributes['class']
  ckey?: string
  id?: string
  cid?: number
  akey?: string
  dataSize?: TooltipSize
  noTip?: boolean
}>()

const loaded = ref(false)

const champ = computed(() => (cid ? champKeyById(cid) : ckey))

const ability = computed(() => id || `${champ.value}${akey}`)
</script>

<template>
  <label
    v-if="ability"
    :data-id="noTip ? '' : ability"
    :data-size="dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :data-type="noTip ? null : 'ability'"
    :class="
      cn(
        'relative grid aspect-square size-15 place-items-center overflow-hidden rounded-md',
        { 'shadow-sm shadow-black/30 drop-shadow-sm': loaded },
        className,
      )
    ">
    <Spinner
      v-if="!loaded"
      class="absolute z-0" />
    <img
      class="size-full shrink-0"
      :alt="ability"
      :src="`/img/abilities/${ability}.webp`"
      @load="loaded = true">
    <slot />
  </label>
</template>
