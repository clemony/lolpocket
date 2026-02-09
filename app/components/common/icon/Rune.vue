<script lang="ts" setup>
import RuneTooltip from '#components'

const {
  id,
  side,
  class: className,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes['class']
  id?: number | null
  loadingType?: LoadingStyle
  side?: Side
}>()
const loaded = ref(false)
const runeName = computed(() => (id ? runeNameById(id) : undefined))

const toast = useToast()
function showToast() {
  if (!id) return
  if (!toast.toasts.value.find(t => t.id === `rune-${id}`)) {
    toast.add({
      id: `rune-${id}`,
      description: h(RuneTooltip, { id }),
      duration: 0,
      actions: [
        {
          variant: 'link',
          external: true,
          label: 'wiki',
          size: 'sm',
          target: '_blank',
          to: runeName.value ? wikiLink(runeName.value) : '',
          trailingIcon: 'link'
        }
      ],
      ui: {
        root: 'p-0!'
      }
    })
  }
}
</script>

<template>
  <Tooltip
    trailing-icon="i"
    :side
    :text="runeName ?? ''"
    :img="id ? `/img/runes/${id}.webp` : undefined"
    :class="
      cn(
        'relative grid aspect-square size-17 h-full place-items-center overflow-hidden rounded-full border border-p2 bg-p2/30 p-0 transition-all duration-300',
        {
          'border border-black/60 shadow-sm inset-shadow-sides shadow-black/20 inset-shadow-black/60 drop-shadow-sm':
            loaded,
        },
        className,
      )
    ">
    <slot />
    <Img
      v-if="id"
      :key="id"
      role="button"
      :src="`/img/runes/${id}.webp`"
      :loading-type
      :alt="runeName ?? 'rune icon'"
      :class="
        cn('size-full rounded-full transition-all duration-300', {
          'scale-108': loaded,
        })
      "
      @click.stop="showToast()"
      @load="loaded = true" />
  </Tooltip>
</template>
