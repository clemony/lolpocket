<script lang="ts" setup>
const {
  akey,
  cid,
  ckey,
  id,
  class: className,
  dataSize = 'lg',
  noTip = false
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

const champ = computed(() =>
  cid ? ix().champKeyById(cid) : ckey
)

const ability = computed (() => id || `${champ.value}${akey}`)
</script>

<template>
  <label
    v-if="ability"
    :data-id="noTip ? '' : ability"
    :data-size="dataSize"
    :data-interactive="dataSize === 'lg' ? true : false"
    :data-tip="noTip ? null : 'ability'"
    :class="
      cn('relative grid aspect-square size-15 place-items-center overflow-hidden rounded-md',
         { ' shadow-sm drop-shadow-sm  shadow-black/30 ': loaded },
         className,
      )
    ">
    <Spinner
      v-if="!loaded"
      class="absolute z-0" />
    <img
      :alt="ability"
      :src="`/img/abilities/${ability}.webp`"
      class="size-full shrink-0"
      @load="loaded = true" />
    <slot />
  </label>
</template>