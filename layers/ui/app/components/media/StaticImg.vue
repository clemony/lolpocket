<script lang="ts" setup>
import type { AsTag } from 'reka-ui'
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<Props>()

const emit = defineEmits(['loaded'])

interface Props {
  variant?: ElementVariants['variant']
  alt: string
  as?: AsTag | string
  base?: ElementVariants['base']
  class?: HTMLAttributes['class']
  hover?: ElementVariants['hover']
  on?: ElementVariants['on']
  size?: ElementVariants['size']
  src: string | null
}

/* skeleton size-full bg-blend-screen rounded-lg bg-p3 border-p3 inset-shadow-5 inset-shadow-xs border !opacity-40 */

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}

const forwarded = useForwardProps(props)
</script>

<template>
  <div
    v-bind="forwarded"
    :class="
      cn(elementVariants({ base, variant, hover, on, size }), props.class)
    ">
    <img
      v-bind="$attrs"
      :key="src"
      decoding="async"
      loading="lazy"
      :src
      placeholder-class=""
      :alt="alt"
      :class="
        cn('size-full shrink-0 translate-z-0 object-center', {
          'opacity-100': loaded,
          'opacity-0': !loaded,
        })
      "
      @load="onLoad()">
    <slot />
  </div>
</template>
