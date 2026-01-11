<script lang="ts" setup>
const {
  id,
  title,
  class: className,
  loadingStyle = 'spinner',
  size = 'sq-14',
  tip,
  variant
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | undefined
  loadingStyle?: LoadingStyle
  size?: ButtonVariants['size']
  title?: string
  variant?: ButtonVariants['variant']
  tip?: string | null
}>()

const loaded = ref(false)

watch(
  () => id,
  (newVal) => {
    if (newVal)
      loaded.value = false
  },
)

const tps = computed (() => {
  if (tip === null)
    return null
  const a = tip?.split(', ')
  return {
    placement: a?.filter(s => tooltipPlacements.includes(s))[0] || 'top',
    size: a?.filter(s => tooltipSizes.includes(s))[0] || 'lg',
  }
})
</script>

<template>
  <Img
    v-if="id"
    :size
    :variant
    :data-id="id"
    :data-placement="tps?.placement"
    :data-size="tps?.size"
    :data-interactive="tps?.size === 'lg' ? true : false"
    :data-tip="!tps ? null : 'spell'"
    :title="!tps && title ? title : !tps ? spellNameById(id) : null"
    :class="
      cn({ ' shadow-sm drop-shadow-sm  shadow-black/30': loaded }, className)"
    :loading-style="loadingStyle"
    :alt="spellbook[id].name"
    :src="`/img/spells/${id}.webp`"
    @load="loaded = true" />
</template>
