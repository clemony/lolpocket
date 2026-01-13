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
  size?: ElementVariants['size']
  variant?: ElementVariants['variant']
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
    v-bind="forwarded"
    :data-id="champId"
    data-tip="champion"
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
      class="absolute size-5.5 place-self-center opacity-60" />
  </Img>
</template>
