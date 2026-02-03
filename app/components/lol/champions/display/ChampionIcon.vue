<script setup lang="ts">
import ChampionTooltip from '#components'

const {
  id,
  side = 'top',
  class: className,
  k,
  loadingType,
} = defineProps<{
  class?: HTMLAttributes['class']
  k?: string
  id?: number
  side?: Side
  loadingType?: LoadingStyle
}>()
const emit = defineEmits(['loaded'])

const champId = computed(() =>
  k ? champIdByKey(k) : id
)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}
const toast = useToast()
function showToast() {
  if (!toast.toasts.value.find(t => t.id === `champion-${id}`)) {
    toast.add({
      id: `champion-${id}`,
      description: h(ChampionTooltip, { id: champId.value }),
      duration: 0,
      ui: {
        root: 'p-0!'
      }
    })
  }
}
</script>

<template>
  <Tooltip
    trailing-icon="i" :text="champNameById(champId)" :img="`/img/champions/${champId}.webp`" :side
  >
    <Img
      role="button"
      :src="`/img/champions/${champId}.webp`"
      :class="
        cn(
          'overflow-hidden shadow-sm drop-shadow-sm size-14 rounded-lg',
          className,
        )
      "
      :alt="`${champNameById(champId)} icon`"
      @click.stop="showToast()"
      @loaded="onLoad"
    >
      <Icon
        v-if="!champId"
        class="absolute size-5 place-self-center opacity-60"
        name="lol:champ"
      />
    </Img>
  </Tooltip>
</template>
