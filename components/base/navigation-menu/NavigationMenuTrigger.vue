<script setup lang="ts">
import type { NavigationMenuTriggerProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { NavigationMenuTrigger, useForwardProps } from 'radix-vue'
import { computed } from 'vue'
import { navigationMenuTriggerStyle } from './nin'

const props = defineProps<NavigationMenuTriggerProps & {
  class?: HTMLAttributes['class']
  noArrow?: boolean

}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <NavigationMenuTrigger
    v-bind="forwardedProps"
    class="flex items-center"
    :class="cn(navigationMenuTriggerStyle(), 'group', props.class)"
  >
    <div class="grow">
      <slot />
    </div>
    <icon
      name="teenyicons:down-small-outline"
      class="relative justify-self-end justify-end top-px ml-1 size-4 shrink-0 transition duration-200 group-data-[state=open]:rotate-180"
      :class="{ hidden: props.noArrow }"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
