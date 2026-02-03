<script lang="ts" setup>
import SpellTooltip from '#components'

const {
  id,
  side = 'top',
  class: className,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes['class']
  id: number | undefined
  loadingType?: LoadingStyle
  side?: Side
}>()

const loaded = ref(false)

watch(
  () => id,
  (newVal) => {
    if (newVal) loaded.value = false
  }
)

const toast = useToast()
function showToast() {
  if (!toast.toasts.value.find(t => t.id === `spell-${id}`)) {
    toast.add({
      id: `spell-${id}`,
      description: h(SpellTooltip, { id }),
      duration: 0
    })
  }
}
</script>

<template>
  <Tooltip
    :text="spells[id]?.name"
    trailing-icon="i"
    :img="`/img/spells/${id}.webp`"
    :side
  >
    <Img
      v-if="id"
      role="button"
      :class="
        cn({ 'size-14 shadow-sm shadow-black/30 drop-shadow-sm': loaded }, className)
      "
      :loading-type
      :alt="spells[id].name"
      :src="`/img/spells/${id}.webp`"
      @click.stop="showToast()"
      @load="loaded = true"
    />
  </Tooltip>
</template>
