<script lang="ts" setup>
import { HoverCardArrow } from 'reka-ui'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <HoverCardArrow
    as-child
    :height="8"
    :width="8">
    <div class="relative size-7 relative -mb-6">
      <icon
        name="fa:caret-down"
        :class="
          cn(
            '!size-7  absolute bottom-3 textneutral/77 stroke-[0.5] stroke-accent drop-shadow-xs mask-clip-bottom',
            props.class,
          )
        " />
    </div>
  </HoverCardArrow>
</template>
