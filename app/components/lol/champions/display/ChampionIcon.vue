<script setup lang="ts">
import type { ElementVariants } from '@variants'
import type { AsTag } from 'reka-ui'
import { useForwardProps } from 'reka-ui'

interface Props {
  id?: number
  title?: string
  alt?: string
  as?: AsTag | string
  base?: ElementVariants['base']
  class?: HTMLAttributes['class']
  hover?: ElementVariants['hover']
  k?: string
  on?: ElementVariants['on']
  params?: any
  size?: ElementVariants['size']
  variant?: ElementVariants['variant']
}
const props = withDefaults(defineProps<Props>(), { size: 'sq-14' })
const emit = defineEmits(['loaded'])

const champId = computed(() =>
  props.params ? props.params.value : props.k ? ix().champIdByKey(props.k) : props.id,
)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}

const forwarded = useForwardProps(props)
</script>

<template>
  <StaticImg
    v-bind="forwarded"
    :img="`/img/champions/${champId}.webp`"
    :class="
      cn(
        `overflow-hidden shadow-sm drop-shadow-sm`,
        elementVariants({ base, variant, hover, on, size }),
        props.class,
      )
    "
    :alt="title || alt || `Champion ${champId} icon`"
    @loaded="onLoad" />
</template>
