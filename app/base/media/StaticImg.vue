<script lang="ts" setup>
import type { AsTag } from 'reka-ui'
import { useForwardProps } from 'reka-ui'

defineOptions({
  inheritAttrs: false,
})
const props = defineProps<Props>()

const emit = defineEmits(['loaded'])

interface Props {
  alt: string
  as?: AsTag | string
  base?: ElementVariants['base']
  class?: HTMLAttributes['class']
  hover?: ElementVariants['hover']
  img: string | null
  on?: ElementVariants['on']
  size?: ElementVariants['size']
  variant?: ElementVariants['variant']
}

/* skeleton size-full bg-blend-screen rounded-lg bg-b3 border-b3 inset-shadow-5 inset-shadow-xs border !opacity-40 */

const loaded = ref(false)

function onLoad() {
  loaded.value = true
  emit('loaded')
}

const forwarded = useForwardProps(props)
</script>

<template>
  <Element

    v-bind="forwarded"
    :class="
      cn(
        elementVariants({ base, variant, hover, on, size }),
        props.class,
      )
    ">
    <img
      :key="img"
      decoding="async"
      loading="lazy"
      :src="img"
      placeholder-class=""
      v-bind="$attrs"
      :alt="alt"
      :class="
        cn(
          `size-full shrink-0 translate-z-0 object-center`,
          {
            'opacity-100 ': loaded,
            'opacity-0': !loaded,
          },
        )
      "
      @load="onLoad()" />
    <slot />
  </Element>
</template>
