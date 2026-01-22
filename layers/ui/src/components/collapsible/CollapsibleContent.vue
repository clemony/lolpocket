<script setup lang="ts">
import type { CollapsibleContentProps } from 'reka-ui'
import { CollapsibleContent } from 'reka-ui'

const props = defineProps<
  CollapsibleContentProps & {
    class?: HTMLAttributes['class']
    menu?: boolean
  }
>()
</script>

<template>
  <CollapsibleContent
    v-bind="props"
    :class="
      cn('data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down CollapsibleContent *:not-after:z-1 w-full max-w-full overflow-hidden transition-all',
        { ' ': props.menu },
        props.class,
      )
    ">
    <div
      v-if="props.menu"
      :class="
        cn('relative size-full', {
          ' after:w-px after:z-0 after:h-[calc(100%-12px)]  after:absolute after:left-3  py-px after:top-[6px] after:bg-b3/60 px-6':
            props.menu,
        })
      ">
      <slot />
    </div>

    <slot v-else />
  </CollapsibleContent>
</template>
