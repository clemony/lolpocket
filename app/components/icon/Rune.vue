<script lang="ts" setup>
const {
  id,
  side,
  class: className,
  loadingType
} = defineProps<{
  class?: HTMLAttributes["class"]
  id?: number | null
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)
const runeName = computed(() => (id ? runeNameById(id) : undefined))
</script>

<template>
  <Tooltip
    trailing-icon="i"
    :side
    :label="runeName ?? ''"
    :avatar="id ? `/img/rune/${id}.webp` : undefined"
    :class="
      cn(
        'relative grid aspect-square size-17 h-full place-items-center overflow-hidden rounded-full border border-p2 bg-p2/30 p-0 transition-all duration-300',
        {
          'inset-shadow-sides border border-black/60 shadow-sm shadow-black/20 inset-shadow-black/60 drop-shadow-sm':
            loaded
        },
        className
      )
    ">
    <slot />
    <UAvatar
      v-if="id"
      :key="id"
      icon="i-ui-none"
      role="button"
      :src="`/img/rune/${id}.webp`"
      :loading-type
      :alt="runeName ?? 'rune icon'"
      :class="
        cn('size-full rounded-full transition-all duration-300', {
          'scale-108': loaded
        })
      "
      @load="loaded = true" />
  </Tooltip>
</template>
