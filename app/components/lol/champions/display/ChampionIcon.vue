<script setup lang="ts">
import type { AsTag } from 'reka-ui'
import { useForwardProps } from 'reka-ui'

interface Props {
  id?: number
  title?: string
  alt?: string
  as?: AsTag | string
  base?: ButtonVariants['base']
  class?: HTMLAttributes['class']
  hover?: ButtonVariants['hover']
  k?: string
  on?: ButtonVariants['on']
  size?: ButtonVariants['size']
  variant?: ButtonVariants['variant']
}
const props = withDefaults(defineProps<Props>(), { size: 'sq-14' })
const emit = defineEmits(['loaded'])

const champId = computed(() =>
  props.k ? ix().champIdByKey(props.k) : props.id,
)

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}

const forwarded = useForwardProps(props)
</script>

<template>
  <Img
    v-tooltip="{ type: 'champion', id: champId }"
    v-bind="forwarded"
    :src="`/img/champions/${champId}.webp`"
    :class="
      cn('overflow-hidden shadow-sm drop-shadow-sm',
         elementVariants({ base, variant, hover, on, size }),
         props.class, 'border-0')"
    :alt="title || alt || `Champion ${champId} icon`"
    @loaded="onLoad">
    <Icon
      v-if="!champId"
      name="lol:champ"
      class="absolute size-5 place-self-center opacity-60" />
  </Img>
</template>
