<script setup lang="ts">
import { Tooltip, TooltipXL } from '#components'

const {
  id,
  side = 'top',
  class: className,
  k,
  loadingType,
  size = 'sm'
} = defineProps<{
  class?: HTMLAttributes['class']
  k?: string
  id?: number
  side?: Side
  loadingType?: LoadingStyle
  size?: TooltipSize
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
const component = computed (() => size === 'sm' ? Tooltip : TooltipXL)
</script>

<template>
  <Tooltip :text="size === 'sm' ? champNameById(champId) : ''" :img="`/img/champions/${champId}.webp`" :side>
    <Img
      :src="`/img/champions/${champId}.webp`"
      :class="
        cn(
          'overflow-hidden shadow-sm drop-shadow-sm size-14 rounded-lg',
          className,
        )
      "
      :alt="`${champNameById(champId)} icon`"
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
