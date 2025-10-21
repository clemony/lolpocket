<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from 'reka-ui'
import { PopoverContent, PopoverPortal, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(
  defineProps<
    PopoverContentProps & {
      class?: HTMLAttributes['class']
      id?: string
      to?: string
      variant?: PopoverContentVariants['variant']
    }
  >(),
  {
    sideOffset: 8,
    align: 'center',
  }
)

const emits = defineEmits<PopoverContentEmits>()

const delegatedProps = reactiveOmit(props, 'class')

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const content = useTemplateRef<HTMLElement>('content')
onMounted(() => content.value?.scrollTo({ top: 0 }))
</script>

<template>
  <PopoverPortal :to="props.to">
    <PopoverContent
      :id="props.id"
      ref="content"
      :align
      :side-offset
      v-bind="{ forwarded }"
      :class="
        cn(popoverContentVariants({ variant }), props.class,
        )
      "
      @close-auto-focus.prevent>
      <slot />
    </PopoverContent>
  </PopoverPortal>
</template>
